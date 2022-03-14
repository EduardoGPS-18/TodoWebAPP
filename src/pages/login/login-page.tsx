import { useEffect, useReducer, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/components/button/button";
import { AuthCard } from "../../ui/components/card/auth-card";
import Input from "../../ui/components/input/input";
import TextButton from "../../ui/components/profile-button/text-button";
import { Column } from "../../ui/components/shared/column";
import { Row } from "../../ui/components/shared/row";
import { ValidationError } from "../helpers/form_validation";
import reducer, { LoginPageState, submitData } from "./login-reducer";

const initialState: LoginPageState = {
  email: '',
  emailError: ValidationError.noError,
  password: '',
  passwordError: ValidationError.noError,
  isValid: false
}

export default function LoginPage() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [loading, setLoading] = useState<boolean>(false)
  const [cookies, setCookies] = useCookies(['user'])
  const navigateTo = useNavigate()

  useEffect(() => {
    if(cookies?.user?.token) navigateTo('/home')
  }, [])

  return <AuthCard title='ENTRAR'>
    <Column>
      <Input
        placeholder='mail@mail.com'
        onValueChanged={(email) => dispatch({type: 'validateEmail', value: email})}
        errorText={state.emailError === ValidationError.noError ? '' : 'Email inválido'}
        maxLength={30}
      />
      <Input 
        placeholder='************'
        hidden
        onValueChanged={(pass) => dispatch({type: 'validatePassword', value: pass})}
        maxLength={30}
        errorText={state.passwordError === ValidationError.noError ? '' : 'Senha inválida'}
      />
      <Row justifyContent="center" alignContent="center">
        <Button
          text="ENTRAR"
          width="50%"
          padding
          onPressed={() => {
            setLoading(true)
            submitData(state, (user) => setCookies('user', user)).then(() => {
              navigateTo('/home')
            }).finally(() => {
              setLoading(false)
            })
          } }
          inactive={!state.isValid || loading}
        />
      </Row>
      <TextButton text="Ainda não tenho uma conta" onClick={() => navigateTo('/signup')}/>
    </Column>
  </AuthCard>
}

