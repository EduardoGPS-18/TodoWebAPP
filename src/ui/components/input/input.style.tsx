import styled from 'styled-components'

type StyledInputProps = {
  hasError?: boolean
}
const StyledInput = styled.input.attrs(({type}) => ({
  type: type || 'text'
}))`
  width: 100%;
  
  padding: 14px;
  border-radius: 15px;
  
  border: 1px solid ${({hasError}: StyledInputProps) => hasError ? 'red' : '#676767'};
  color: ${({hasError}: StyledInputProps) => hasError ? 'red' : '#676767'};  
  
  font-size: 24px;
  :focus {
    border: 1px solid ${({hasError}: StyledInputProps) => hasError ? 'red' : '#676767'};
    outline: none;
  }
  ::placeholder {
    color: #ccc;
  }
  ::-ms-input-placeholder{
    color: #ccc;
  }
`
const StyledErrorText = styled.p`
  color: red;
  font-size: 14px;
  padding: 0px 16px;
  text-align: right;
`
type StyledDivProps = {
  width?: string
}
const StyledDiv = styled.div`
  width: ${({width}: StyledDivProps) => width ?? '100%'};
`;

export {
  StyledDiv as StyledInputDiv,
  StyledInput as StyledSingleLineInput,
  StyledErrorText as StyledSingleLineInputErrorText
}

