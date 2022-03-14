import styled from "styled-components"

type GreetingsProps = {
  userName: String
  onClick?: () => void
}
export default function Greetings({userName, onClick}: GreetingsProps) {
  const HelloText = styled.span`
    font-size: 28px;
    font-weight: 300;
    color: #9A9A9A;
  `
  const TextBold = styled.span`
    font-size: 32px;
    color: #9A9A9A;
    font-weight: 500 ;
    :hover {
      color: #C4C4C4;
    }
    :active {
      color: #686868;
    }
    cursor: pointer;
  `
  return <span style={{paddingLeft: 16}}>
    <HelloText>Hello, </HelloText>
    <TextBold onClick={onClick}>{`${userName}`}</TextBold>
    <HelloText>!!</HelloText>
  </span>
}