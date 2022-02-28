import styled from "styled-components";
import { typography, variant, color, space } from "styled-system";

const asMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1Regular: "p",
  body1Bold: "p",
  btnPrimary: "span",
  btnSecondary: "span",
  c1: "p",
  c2: "span",
  c3: "span",
  c4: "span",
};

const Typography = styled.span.attrs((props) => ({
  as: asMap[props.variant || "span"],
}))`
  ${typography}
  ${space}
  ${color}
  ${variant({
    variants: {
      h1: {
        fontFamily: "Montserrat",
        fontWeight: "800",
        fontSize: "60px",
        lineHeight: "60px",
      },
      h2: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: "40px",
        lineHeight: "40px",
      },
      h3: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: "24px",
        lineHeight: "28px",
      },
      h4: {
        fontFamily: "Montserrat",
        fontWeight: "400",
        fontStyle: "normal",
        fontSize: "30px",
        lineHeight: "30px",
      },
      h5: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontStyle: "normal",
        fontSize: "24px",
        lineHeight: "30px",
      },
      h6: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontStyle: "normal",
        fontSize: "16px",
        lineHeight: "30px",
      },
      body1Regular: {
        fontFamily: "Montserrat",
        fontWeight: "400",
        fontSize: "24px",
        lineHeight: "30px",
      },
      body1Bold: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: "24px",
        lineHeight: "30px",
      },
      btnPrimary: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontStyle: "normal",
        fontSize: "30px",
        lineHeight: "30px",
      },
      btnSecondary: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontStyle: "normal",
        fontSize: "18px",
        lineHeight: "18px",
      },
      default: {
        fontFamily: "Montserrat",
        fontSize: "16px",
        fontWeight: "normal",
        lineHeight: "16px",
      },
    },
  })}
`;

export default Typography;
