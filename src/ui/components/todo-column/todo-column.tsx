
import { Fragment } from "react"
import EmptyIcon from "../../../assets/empty-icon"
import { Todo } from "../../models/todo"
import { Column } from "../shared/column"
import { Row } from "../shared/row"
import { SizedBox } from "../shared/sizedbox"
import { Title } from "../title/title"
import { TodoCard } from "../todo-card/todo-card"
import { StyledEmptyTodoText, StyledTodoColumn } from "./todo-column.style"

type TodoColumnProps = {
  todos?: Todo[]
  title?: string
  onTodoClick?: ((todo: Todo) => void) | null
  onChangedCheckbox: ((value: boolean, todo: Todo) => Promise<void>) | null
  emptyListText?: string
}

export default function TodoColumn({todos, title, emptyListText, onChangedCheckbox, onTodoClick}: TodoColumnProps) {
  const todoList = todos?.map((todo, i) => <Fragment key={i}>
    <TodoCard
      title={todo.title}
      completed={todo.completed}
      date={todo.endDate}
      subtitle={todo.subtitle}
      onClick={() => onTodoClick?.(todo)}
      onChangedCheckbox={value => onChangedCheckbox?.(value, todo)}
    />
    <SizedBox height={12} key={`${i}${i}`}/>
  </Fragment>)

  const todoColumn = <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
    <Title title={title ?? ''}></Title>
    <StyledTodoColumn>
      {todoList}
    </StyledTodoColumn>
  </div>

  const emptyTodoColumn = <Column style={{flex: 1}}>
    <Title title={title ?? ''}></Title>
    <Row justifyContent="space-around" alignContent="space-around" >
      <Column justifyContent="center" >
        <EmptyIcon />
        <StyledEmptyTodoText>
          {emptyListText}
        </StyledEmptyTodoText>
      </Column>
    </Row>
  </Column>
  
  return todos?.length == 0 ? emptyTodoColumn : todoColumn
}