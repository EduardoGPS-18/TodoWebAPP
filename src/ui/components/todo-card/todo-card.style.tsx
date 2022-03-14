import styled from "styled-components";

const StyledTodoCardTitle = styled.p`
  color: white;
  font-size: 24px;
  overflow: hidden;

  display: -webkit-box;

  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  line-clamp: 1;

  text-overflow: ellipsis;

  text-shadow: 2px 2px 4px black;
  padding: 0px 4px;
  :hover {
    color: #A5A5A5;
  }
  :active {
    text-shadow: none;
  }

  cursor: pointer;
`

const StyledTodoCardSubtitle = styled.p`
  color: white;
  text-align: justify;
  font-size: 16px;

  display: -webkit-box;
  overflow: hidden;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  line-clamp: 2;
`

const StyledTodoCardTimeText = styled.p`
  color: white;
  font-size: 12px;
  text-align: right;
`

const StyledTodoCardDiv = styled.div`
  border-radius: 15px;
  background-color: #C4C4C4;

  border: 1px solid #9A9A9A;
  padding: 12px;

  height: 100px;

  
`

const StyledTodoCardTrailSpace = styled.div`
  min-width: 120px;
`

export {
  StyledTodoCardTitle,
  StyledTodoCardSubtitle,
  StyledTodoCardTimeText,
  StyledTodoCardDiv,
  StyledTodoCardTrailSpace
};
