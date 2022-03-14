import styled from "styled-components";
import { Alignment } from "./alignment";


type RowProps = {
  justifyContent?: Alignment
  alignContent?: Alignment
}
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: ${({justifyContent}: RowProps) => justifyContent};
  align-content: ${({alignContent}: RowProps) => alignContent};
`;

export { Row };

