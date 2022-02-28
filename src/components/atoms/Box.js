import styled from "styled-components";
import {
  background,
  border,
  color,
  layout,
  position,
  space,
  textAlign,
  fontSize,
  flexWrap,
} from "styled-system";

const Box = styled.div`
  ${space}
  ${color}
  ${layout}
  ${background}
  ${border}
  ${position}
  ${textAlign}
  ${fontSize}
  ${flexWrap}
`;

export default Box;
