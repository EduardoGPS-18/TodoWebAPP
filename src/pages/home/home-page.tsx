import { useEffect, useReducer, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { AppHeader } from "../../ui/components/app-header/app-header";
import Greetings from "../../ui/components/greetings/greetings";
import TextButton from "../../ui/components/profile-button/text-button";
import { Column } from "../../ui/components/shared/column";
import { Row } from "../../ui/components/shared/row";
import { SizedBox } from "../../ui/components/shared/sizedbox";
import TodoColumn from "../../ui/components/todo-column/todo-column";
import { Todo } from "../../ui/models/todo";
import reducer, { changeTodoCompleted, HomePageState, loadUserData } from "./home-reducer";

const initialState: HomePageState = {}

export default function HomePage() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [loading, setLoading] = useState<boolean>(false)
  const [cookies, _setCookie, removeCookie] = useCookies(['user'])
  const navigateTo = useNavigate()

  const redirectToLogin = () => {
    removeCookie('user')
    navigateTo('/login')
  }

  useEffect(() => {
    if(!(cookies?.user?.token)) {
      redirectToLogin()
    }
  }, [])

  useEffect(() => {
    loadUserData(cookies?.user?.token).then((data) => {
      dispatch({type: 'setTodos', responseData: data})
    }).catch(redirectToLogin)
  }, [])

  const updateCompleted = async (value: boolean, todo: Todo) => {
    setLoading(true)

    changeTodoCompleted(cookies.user?.token, value, todo)
      .then((data) => {
        dispatch({type: 'setTodos', responseData: data})
      }).catch(redirectToLogin).finally(() => {
        setLoading(false)
      })
  }
  
  return <Column alignContent="center" justifyContent="center" style={{ height: '100vh'}}>
    <AppHeader/>
    <Greetings
      userName={cookies?.user?.name ?? 'Loading...'}
      onClick={() => navigateTo('/profile')}
    />
    <SizedBox height={48}/>
    <Row>
      <TodoColumn
        title="TODAY TASKS"
        emptyListText="Tou haven't any task today"
        todos={state.todayTodos}
        onChangedCheckbox={!loading ? updateCompleted : null}
        onTodoClick={!loading ? todo => navigateTo(`/todo-details/${todo.id}`) : null}
      />
      <TodoColumn 
        title="OTHER TASKS"
        emptyListText="Tou haven't any other task"
        todos={state.otherTodos}
        onChangedCheckbox={!loading ? updateCompleted : null}
        onTodoClick={!loading ? todo => navigateTo(`/todo-details/${todo.id}`) : null}
      />
    </Row>
    <TextButton 
      text="ADD TASK"
      onClick={() => navigateTo('/todo-details')}
    />
  </Column>
}