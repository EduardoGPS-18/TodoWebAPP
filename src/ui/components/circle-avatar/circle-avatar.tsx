import styled from "styled-components"

type CircleAvatarProps = {
  value?: string
}
export default function CircleAvatar({value}: CircleAvatarProps) {
  const StyledCircle = styled.div`
    height: 150px;
    border-radius: 150px;
    width: 150px;
    align-self: center;
    background-color: #949494;
    display: flex;
    
  `
  const StyledChildren = styled.div`
    flex: 1;
    align-self: center;
    text-align: center;
    font-size: 64px;
    color: #525252;
  `

  return <StyledCircle>
    <StyledChildren>{value}</StyledChildren> 
  </StyledCircle>
}