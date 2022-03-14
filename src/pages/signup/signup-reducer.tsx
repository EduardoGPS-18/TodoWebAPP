import { makeApiUrl } from "../../configs/api-url"
import { emailValidator, isSameValue, lengthValidator, ValidationError } from "../helpers/form_validation"

export type SignupPageState = {
  name: string
  nameError: ValidationError
  email: string
  emailError: ValidationError
  password: string
  passwordError: ValidationError
  confirmPassword: string
  confirmPasswordError: ValidationError
  isValid: boolean
}
export type SignupPageAction = {
  type: 'validateName' | 'validateEmail' | 'validatePassword' | 'validateConfirmPassword'
  value?: string
  responseBody?: any
}

export const signupUser = async (state: SignupPageState, setUserCookie: (user: string) => void): Promise<void> => {
  const jsonBody = JSON.stringify({
    name: state.name,
    email: state.email,
    password: state.password,
  })
  const data = await (await fetch(makeApiUrl('/user/register'), {
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

export default function SignupReducer(state: SignupPageState, action: SignupPageAction): SignupPageState {
  const newState = {...state}
  
  const validateForm = () => {
    const noContainsNameError = newState.nameError === ValidationError.noError
    const isNameDefinid = newState.name !== undefined
    const isNameSetted = newState.name.length > 1
    const isValidName = noContainsNameError && isNameDefinid && isNameSetted
    
    const noContainsEmailError = newState.emailError === ValidationError.noError
    const isEmailDefinid = newState.email !== undefined
    const isEmailSetted = newState.email.length > 1
    const isValidEmail = noContainsEmailError && isEmailDefinid && isEmailSetted

    const noContainsPasswordError = newState.passwordError === ValidationError.noError
    const isPasswordDefinid = newState.password !== undefined
    const isPasswordSetted = newState.password.length > 1
    const isValidPassword = noContainsPasswordError && isPasswordDefinid && isPasswordSetted
    
    const noContainsConfirmPasswordError = newState.confirmPasswordError === ValidationError.noError
    const isConfirmPasswordDefinid = newState.confirmPassword !== undefined
    const isConfirmPasswordSetted = newState.confirmPassword.length > 1
    const isValidConfirmPassword = noContainsConfirmPasswordError && isConfirmPasswordDefinid && isConfirmPasswordSetted
    
    newState.isValid = isValidName && isValidEmail && isValidPassword && isValidConfirmPassword
  }
  
  if(action.type === 'validateEmail') {
    newState.email = action.value ?? state.email
    const emailError = emailValidator(state.email)
    newState.emailError = emailError
  } else if(action.type === 'validatePassword') {
    newState.password = action.value ?? state.password
    const passError = lengthValidator(6, newState.password)
    newState.passwordError = passError
  } else if(action.type === 'validateName') {
    newState.name = action.value ?? state.name
    const nameError = lengthValidator(4, newState.name)
    newState.nameError = nameError
  } else if(action.type === 'validateConfirmPassword') {
    newState.confirmPassword = action.value ?? state.confirmPassword
    const passConfirmationError = isSameValue(newState.confirmPassword, newState.password)
    newState.confirmPasswordError = passConfirmationError
  }
  
  validateForm()
  return newState  
}
