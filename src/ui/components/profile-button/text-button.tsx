import styled from "styled-components"

type TextButtonProps = {
  onClick?: () => void
  text?: string
}
export default function TextButton({onClick, text}: TextButtonProps) {
  const StyledTextButton = styled.p`
    font-size: 24px;
    font-weight: 500;
    padding: 16px;
    color: #a2a2a2;
    text-align: center;
    cursor: pointer;
    :hover {
      color: #555555;
    }
    :active {
      color: #373737;
    }
  `
  return <StyledTextButton onClick={onClick}>
    {text}
  </StyledTextButton>
}