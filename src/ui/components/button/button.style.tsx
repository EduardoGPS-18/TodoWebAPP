import styled from "styled-components"

type StyledButtonProps = {
  inactive?: boolean
  width?: string
  padding?: boolean
}
const StyledButton = styled.button`
  border: 1px solid #9A9A9A;
  border-radius: 15px;

  padding: ${({padding}: StyledButtonProps) => padding ? '16px' : 0};
  width: ${({width}: StyledButtonProps) => width ?? '100%'};
  
  background-color: ${({inactive}: StyledButtonProps) => inactive ? '#C9C9C9' : '#9A9A9A'};
  box-shadow: ${({inactive}: StyledButtonProps) => inactive ? 'none' :'1px 1px 4px #555'};

  font-size: 24px;
  color: ${({inactive}: StyledButtonProps) => inactive ? '#848484' : '#FFFFFF'};
 
  :hover {
    background-color: ${({inactive}: StyledButtonProps) => inactive ? 'none' : '#353535'};
    cursor: ${(({inactive}: StyledButtonProps) => inactive ? 'default' : 'pointer')};
  }
  :active {
    box-shadow: none;
  }
`

export {
  StyledButton
}
