import { DateTimeFormatter } from "../../helpers/date-time-formater";
import Checkbox from "../checkbox/checkbox";
import { Column } from "../shared/column";
import { Row } from "../shared/row";
import { SizedBox } from "../shared/sizedbox";
import { StyledTodoCardDiv, StyledTodoCardSubtitle, StyledTodoCardTimeText, StyledTodoCardTitle, StyledTodoCardTrailSpace } from "./todo-card.style";

type TodoCardProps = {
  title: string
  subtitle?: string
  date?: Date
  completed?: boolean
  onClick?: () => void
  onChangedCheckbox?: (value: boolean) => void
}
export function TodoCard({title, subtitle, date, completed, onClick, onChangedCheckbox}: TodoCardProps) {
  const formatedDate = DateTimeFormatter(date)
  return <StyledTodoCardDiv>
    <Row alignContent={"flex-start"} justifyContent={"space-between"} >
      <StyledTodoCardTitle onClick={onClick}>
        {title}
      </StyledTodoCardTitle>
      <Column justifyContent={"flex-end"}>
        <StyledTodoCardTrailSpace>
          <StyledTodoCardTimeText>
            {formatedDate.formatedDate}
          </StyledTodoCardTimeText>
          <StyledTodoCardTimeText>
            {formatedDate.formatedTime}
          </StyledTodoCardTimeText>
        </StyledTodoCardTrailSpace>
      </Column>
    </Row>
    <SizedBox height={12}/>
    <Row justifyContent={"space-between"}>
      <StyledTodoCardSubtitle>
        {subtitle}
      </StyledTodoCardSubtitle>
      <StyledTodoCardTrailSpace >
        <Row justifyContent={"flex-end"}>
          <Checkbox radius={30} onValueChanged={onChangedCheckbox} value={completed}/>
        </Row>
      </StyledTodoCardTrailSpace>
    </Row>
  </StyledTodoCardDiv>
}