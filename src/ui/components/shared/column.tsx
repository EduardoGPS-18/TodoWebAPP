import styled from "styled-components";
import { Alignment } from "./alignment";

type ColumnProps = {
  justifyContent?: Alignment
  alignContent?: Alignment
}
const Column = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: ${({justifyContent}: ColumnProps) => justifyContent};
  align-content: ${({alignContent}: ColumnProps) => alignContent};
`;

export { Column };
