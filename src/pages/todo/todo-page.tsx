import { useEffect, useReducer } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import { AppHeader } from "../../ui/components/app-header/app-header";
import Button from "../../ui/components/button/button";
import Checkbox from "../../ui/components/checkbox/checkbox";
import Greetings from "../../ui/components/greetings/greetings";
import Input from "../../ui/components/input/input";
import TextButton from "../../ui/components/profile-button/text-button";
import { Column } from "../../ui/components/shared/column";
import { Row } from "../../ui/components/shared/row";
import { SizedBox } from "../../ui/components/shared/sizedbox";
import TextArea from "../../ui/components/text-area/text-area";
import TightText from "../../ui/components/tight-text/tight-text";
import { ValidationError } from "../helpers/form_validation";
import todoReducer, { getTodoDetails, TodoPageState, updateTodo } from "./todo-reducer";

const initialState: TodoPageState = {
  title: '',
  isValidForm: false,
  titleError: ValidationError.noError,
  dateError: ValidationError.noError,
  endTimeError: ValidationError.noError
}

export default function TodoPage() {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  const navigateTo = useNavigate()
  const [cookies] = useCookies(['user'])
  const {todoID} = useParams()

  useEffect(() => {
    if(todoID) {
      getTodoDetails(cookies?.user?.token, todoID)
        .then((todo) => {
          dispatch({type: 'setCurrentTodo', todo: todo})
        })
    }
  }, [])

  return <Column alignContent="center" justifyContent="center" style={{ height: '100vh'}}>
    <AppHeader />
    <Greetings
      userName={cookies?.user?.name}
      onClick={() => navigateTo('/profile')}
    />
    <SizedBox height={48}/>
    <div style={{flex: 1}}></div>
    <Column style={{padding: '12px 12vw'}}>
      <Row>
        <Input
          placeholder="Buy breads"
          initialValue={state.title}
          errorText={state.titleError === ValidationError.noError ? '' : 'Titulo obrigatório'}
          onValueChanged={title => dispatch({type: 'validateTitle', value: title})}
          width="65vw"
        />
        <SizedBox width={56}/>
        <Input
          placeholder="30/12/2022"
          width="25vw"
          pattern="([0-9]{2}\/[0-9]{2}\/[0-9]{4})"
          initialValue={state.date}
          onValueChanged={date => dispatch({type: 'validateDate', value: date})}
          errorText={state.dateError === ValidationError.noError ? '' : 'Data inválida'}
          maxLength={10}
        />
        <SizedBox width={12}/>
        <Input
          maxLength={5}
          placeholder="20:15"
          width="18vw"
          onValueChanged={time => dispatch({type: 'validateTime', value: time})}
          errorText={state.endTimeError === ValidationError.noError ? '' : 'Hora inválida'}
          initialValue={state.endTime}
        />
      </Row>
      <SizedBox height={32}/>
      <Input
        placeholder="Buy wholegrain and sweet bread"
        errorText=''
        onValueChanged={sub => dispatch({type: 'setSubtitle', value: sub})}
        initialValue={state.subtitle}
      />
      <SizedBox height={32}/>
      <TextArea 
        placeHolder="Take the opportunity to go to the supermarket and buy 5 French breads, 2 bags of sweet breads and 1 bag of wholemeal bread"
        initialValue={state.description ?? ''}
        onChange={desc => dispatch({type: 'setDescription', value: desc})}
      />
      <SizedBox height={32}/>
      <Row justifyContent="center" alignContent="center">
        <Checkbox
          radius={40} 
          value={state.completed}
          onValueChanged={(v) => dispatch({type: 'setCompleted', value: !state.completed})}
        />
        <SizedBox width={6}/>
        <TightText title="Completed?" textAlignment="center"/>
        <SizedBox width={32}/>
        <Button
          inactive={!state.isValidForm}
          text="SAVE"
          width="40%"
          onPressed={() => updateTodo(
            cookies?.user?.token,
            todoID,
            state.title,
            state.subtitle,
            state.description,
            state.date,
            state.endTime,
            state.completed
          ).then(() => {
            navigateTo('/home')
          })}
        />
      </Row>
    </Column>
    <div style={{flex: 1}}></div>
    <TextButton text="BACK TO HOME PAGE" onClick={() => navigateTo('/home')}/>
  </Column>
}