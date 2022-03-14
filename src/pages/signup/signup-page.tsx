import { useEffect, useReducer, useState } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
import Button from "../../ui/components/button/button"
import { AuthCard } from "../../ui/components/card/auth-card"
import Input from "../../ui/components/input/input"
import TextButton from "../../ui/components/profile-button/text-button"
import { Column } from "../../ui/components/shared/column"
import { Row } from "../../ui/components/shared/row"
import { ValidationError } from "../helpers/form_validation"
import SignupReducer, { SignupPageState, signupUser } from "./signup-reducer"

const initialState: SignupPageState = {
  name: '',
  nameError: ValidationError.noError,
  email: '',
  emailError: ValidationError.noError,
  password: '',
  passwordError: ValidationError.noError,
  confirmPassword: '',
  confirmPasswordError: ValidationError.noError,
  isValid: false
}

export default function SignupPage() {
  const [state, dispatch] = useReducer(SignupReducer, initialState)
  const [cookies, setCookies] = useCookies(['user'])
  const [loading, setLoading] = useState<boolean>(false)
  const navigateTo = useNavigate()

  useEffect(() => {
    if(cookies?.user?.token) navigateTo('/home')
  }, [])

  return <AuthCard title='REGISTRAR'>
    <Column>
      <Input 
        errorText={state.nameError === ValidationError.noError ? '' : 'Nome inválido'}
        onValueChanged={(name) => dispatch({type: 'validateName', value: name})}
        maxLength={30}
        placeholder='Usuario'
      />
      <Input
        placeholder='mail@mail.com.br'
        onValueChanged={(email) => dispatch({type: 'validateEmail', value: email})}
        errorText={state.emailError === ValidationError.noError ? '' : 'Email inválido'}
        maxLength={50}
      />
      <Input
        placeholder='************'
        onValueChanged={(pass) => dispatch({type: 'validatePassword', value: pass})}
        maxLength={50}
        errorText={state.passwordError === ValidationError.noError ? '' : 'Senha inválida'}
        hidden
      />
      <Input
        placeholder='************'
        hidden
        onValueChanged={(cPass) => dispatch({type: 'validateConfirmPassword', value: cPass})}
        maxLength={50}
        errorText={state.confirmPasswordError === ValidationError.noError ? '' : 'Senhas não coincidem'}
      />
      <Row justifyContent="center" alignContent="center">
        <Button
          text="CADASTRAR"
          inactive={!state.isValid || loading}
          onPressed={() => {
            setLoading(true)
            signupUser(state, (user) => setCookies('user', user)).then(() => {
              navigateTo('/home')
            }).finally(() => {
              setLoading(false)
            })
          }}
          width="50%"
          padding/>
      </Row>
      <TextButton text="Já sou cadastrado" onClick={() => navigateTo('/login')}/>
    </Column>
  </AuthCard>
}