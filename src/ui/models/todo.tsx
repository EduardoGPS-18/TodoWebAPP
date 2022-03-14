type TodoAPI = {
  id: string
  title: string
  subtitle?: string
  end_date?: Date
  description?: string
  completed?: boolean
}

export class Todo {
  id: string
  title: string
  subtitle?: string
  endDate?: Date
  description?: string
  completed?: boolean

  constructor(id: string, title: string, subtitle?: string, endDate?: Date, description?: string, completed?: boolean) {
    this.id = id
    this.title = title
    this.subtitle = subtitle
    this.endDate = endDate
    this.description = description
    this.completed = completed
  }

  static fromRemote({id, title, subtitle, end_date, completed, description}: TodoAPI) {
    return new Todo(id, title, subtitle, new Date(`${end_date}`), description, completed)
  }
}