import { makeApiUrl } from "../../configs/api-url"
import { Todo } from "../../ui/models/todo"

export type HomePageState = {
  todayTodos?: Todo[] 
  otherTodos?: Todo[] 
}
export type HomePageAction = {
  type: 'setTodos' | 'updateTodo'
  responseData?: any
}

export const loadUserData = async (token: string): Promise<void> => {
  const data = await (await fetch(makeApiUrl('/tasks'), {
    method: 'get',
    headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
  })).json()
  return data
}

export const changeTodoCompleted = async (token: string, value: boolean, todo: Todo): Promise<void> => {
  const jsonBody = JSON.stringify({
    completed: value
  })
  const data = await (await fetch(makeApiUrl(`/task/${todo.id}`), {
    method: 'put',
    body: jsonBody,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })).json()
  return data
}

export default function homeReducer(state: HomePageState, action: HomePageAction): HomePageState {
  const newState = {...state}

  if(action.type === 'setTodos') {
    const todos = (action.responseData as any[]).map((curr) => new Todo(curr.id, curr.title, curr.subtitle, new Date(curr.end_date), curr.description, curr.completed))
    newState.todayTodos = todos?.filter((todo) => todo.endDate?.toLocaleDateString() === new Date().toLocaleDateString())
    newState.otherTodos = todos?.filter((todo) => todo.endDate?.toLocaleDateString() !== new Date().toLocaleDateString())
  }
  
  return newState
}
