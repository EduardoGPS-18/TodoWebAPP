import { useEffect, useState } from "react";
import { DateTimeFormatter } from "../../helpers/date-time-formater";
import { Column } from "../shared/column";
import { Row } from "../shared/row";
import { StyledHeaderTitle, StyledHeaderTrailedText } from "./app-header.style";

export function AppHeader() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setNow(new Date())
  }, [new Date().getMinutes()])

  const { formatedDate, formatedTime } = DateTimeFormatter(now);
  return <Column style={{padding: '12px 32px'}}>
    <Row justifyContent="center" alignContent="center">
      <StyledHeaderTrailedText style={{visibility: 'hidden'}}>
        {formatedDate} <br/>
        {formatedTime}
      </StyledHeaderTrailedText>
      <div style={{flex: 1}}></div>
      <StyledHeaderTitle>
        TODO APP
      </StyledHeaderTitle>
      <div style={{flex: 1}}></div>
      <StyledHeaderTrailedText>
        {formatedDate} <br/>
        {formatedTime}
      </StyledHeaderTrailedText>
    </Row>
  </Column>
}