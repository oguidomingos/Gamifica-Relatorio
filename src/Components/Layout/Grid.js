import { BorderColorRounded } from "@material-ui/icons";
import styled from "styled-components";
//

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 100px 1fr 2fr;
  grid-template-rows: 50px 5em min-content auto;
  gap: ${(props) => (props.gapDefault ? props.gapDefault : "2rem 2rem")};
  margin: ${(props) => (props.marginDefault ? props.marginDefault : 0)};`


export default Grid;
