import styled from "styled-components"

const StyledTextArea = styled.textarea`
  max-width: 100%;
  max-height: 300px;
  min-height: 100px;
  
  height: 200px;
  border-radius: 15px;
  border: 1px solid #676767;
  
  color: #676767;
  font-size: 24px;
  padding: 16px;
  overflow: hidden;

  :focus {
    border: 1px solid '#676767';
    outline: none;
  }

  ::placeholder {
    color: #ccc;
  }
  ::-ms-input-placeholder{
    color: #ccc;
  }
`

export {
  StyledTextArea
}
