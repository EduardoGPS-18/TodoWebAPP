import { makeApiUrl } from "../../configs/api-url"
import { emailValidator, lengthValidator, ValidationError } from "../helpers/form_validation"

export type LoginPageState = {
  email: string
  emailError: ValidationError
  password: string
  passwordError: ValidationError
  isValid: boolean
}
export type LoginPageAction = {
  type: 'validateEmail' | 'validatePassword'
  value?: string
  responseBody?: any
}

export const submitData = async (state: LoginPageState, setUserCookie: (token: string) => void): Promise<void> => {
  const jsonBody = JSON.stringify({
    email: state.email,
    password: state.password
  })
  const data = await (await fetch(makeApiUrl('/user/login'), {
    body: jsonBody,
    method: 'post',
    headers: {'Content-Type': 'application/json'}
  })).json()
  if(data.session) {
    return setUserCookie(JSON.stringify({
      name: data.name,
      email: data.email,
      token: data.session
    }))
  }
}

export default function LoginReducer(state: LoginPageState, action: LoginPageAction): LoginPageState {
  const newState = {...state}
  
  const validateForm = () => {
    const noContainsEmailError = newState.emailError === ValidationError.noError
    const isEmailDefinid = newState.email !== undefined
    const isEmailSetted = newState.email.length > 1
    const isValidEmail = noContainsEmailError && isEmailDefinid && isEmailSetted

    const noContainsPasswordError = newState.passwordError === ValidationError.noError
    const isPasswordDefinid = newState.password !== undefined
    const isPasswordSetted = newState.password.length > 1
    const isValidPassword = noContainsPasswordError && isPasswordDefinid && isPasswordSetted
    
    newState.isValid = isValidEmail && isValidPassword
  }
  
  if(action.type === 'validateEmail') {
    newState.email = action.value ?? state.email
    const emailError = emailValidator(state.email)
    newState.emailError = emailError
  } else if(action.type === 'validatePassword') {
    newState.password = action.value ?? state.password
    const passError = lengthValidator(6, newState.password)
    newState.passwordError = passError
  }
  validateForm()
  return newState  
}
