import { SizedBox } from "../shared/sizedbox"
import { Title } from "../title/title"
import { StyledAuthCardCenterDiv, StyledAuthCardDiv, StyledAuthCardTitle } from "./auth-card.style"

type CardProps = {
  title?: string
  children: JSX.Element
}

export function AuthCard({title, children}: CardProps) {
  
  return <StyledAuthCardCenterDiv>
    <Title title="TODO APP" fontWeight="400" fontSize="46px"/>
    <SizedBox height={24}/>
    <StyledAuthCardDiv>
      <StyledAuthCardTitle>
        {title ?? ''}
      </StyledAuthCardTitle>
      {children}
    </StyledAuthCardDiv>
  </StyledAuthCardCenterDiv>
}