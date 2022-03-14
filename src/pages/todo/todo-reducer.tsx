import { makeApiUrl } from "../../configs/api-url"
import { DateTimeFormatter } from "../../ui/helpers/date-time-formater"
import { Todo } from "../../ui/models/todo"
import { dateValidator, lengthValidator, timeValidator, ValidationError } from "../helpers/form_validation"

export type TodoPageState = {
  title: string
  titleError: ValidationError

  subtitle?: string
  date?: string
  dateError: ValidationError
  endTime?: string
  endTimeError: ValidationError
  description?: string
  completed?: boolean
  isValidForm: boolean
}

export type TodoPageAction = {
  type: 'setCurrentTodo' | 'validateTitle' | 'validateDate' | 'validateTime' | 'setSubtitle' | 'setDescription' | 'setCompleted'
  todo?: Todo
  value?: string | boolean
}

export async function getTodoDetails(token: string, id: string) {
  const data = await (await fetch(makeApiUrl(`/task/${id}`), {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })).json()
  return data
}

export async function updateTodo(
  token: string, id: string | undefined, title: string, subtitle?: string, description?: string,
  date?: string, time?: string, completed?: boolean
) {
  let dateTime
  if(date) {
    const [day, month, year] = date?.split('/')
    dateTime = new Date(`${year}/${month}/${day} ${time}:00`)
  }
  const jsonBody = JSON.stringify({
    title, subtitle, description,
    end_date: dateTime, completed
  })
  const data = await (await fetch(makeApiUrl(`/task${id ? `/${id}` : ''}`), {
    method: id ? 'put' : 'post',
    body: jsonBody,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })).json()
  return data
}

export default function todoReducer(state: TodoPageState, action: TodoPageAction): TodoPageState {
  const newState = {...state}
  
  const validateForm = () => {
    const isValidTitle = newState.titleError === ValidationError.noError && newState.title.length >= 1
    const isValidDate = newState.dateError === ValidationError.noError
    const isValidTime = newState.endTimeError === ValidationError.noError
    newState.isValidForm = isValidTitle && isValidDate && isValidTime
  }

  if(action.type === 'setCurrentTodo') {
    const todoData = action.todo
    if(!todoData) return newState
    const todo = Todo.fromRemote(todoData)
    
    newState.title = todo?.title
    newState.description = todo?.description
    newState.subtitle = todo?.subtitle
    newState.completed = todo?.completed
    const { onlyNumberFormatedDate, formatedTime } = DateTimeFormatter(new Date(todo.endDate ?? Date.now()))

    newState.date = onlyNumberFormatedDate
    newState.endTime = formatedTime
    validateForm()
    
  } else if (action.type === 'validateTitle') {
    newState.title = action.value as string ?? ''
    newState.titleError = lengthValidator(6, newState.title)
    validateForm()
  } else if (action.type === 'validateDate') {
    newState.date = action.value as string
    newState.dateError = dateValidator(newState.date ?? '')
    validateForm()
  } else if (action.type === 'validateTime') {
    newState.endTime = action.value as string
    newState.endTimeError = timeValidator(newState.endTime ?? '')
    validateForm()
  } else if (action.type === 'setSubtitle') {
    newState.subtitle = action.value as string
  } else if (action.type === 'setDescription') {
    newState.description = action.value as string
  } else if (action.type === 'setCompleted') {
    newState.completed = action.value as boolean
  }

  return newState
}


