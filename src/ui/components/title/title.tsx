import styled from "styled-components"

type TitleProps = {
  title: String
  fontWeight?: string
  fontSize?: string
}
type StyledTitleProps = {
  fontWeight?: string
  fontSize?: string
}
export function Title({title, fontWeight, fontSize}: TitleProps) {
  const StyledTitle = styled.h1`
    font-size: ${({fontSize}: StyledTitleProps)=>fontSize??'28px'};
    color: #9A9A9A;
    font-weight: ${({fontWeight}: StyledTitleProps) => fontWeight ?? '300'};
    text-align: center;
  `
  return <StyledTitle fontWeight={fontWeight} fontSize={fontSize}>
    {title}
  </StyledTitle>
}