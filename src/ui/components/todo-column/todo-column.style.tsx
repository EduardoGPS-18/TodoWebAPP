import styled from "styled-components"

const StyledTodoColumn = styled.div`
  padding: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  height: 70vh;
  overflow-y: scroll;
`

const StyledEmptyTodoText = styled.p`
  font-size: 28px;
  font-weight: 100;
  color: #9A9A9A;
  text-align: center;
`

export {
  StyledTodoColumn,
  StyledEmptyTodoText
}
