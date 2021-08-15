import styled from "styled-components";
import { variant, space, layout } from "styled-system";

const Input = styled.input(
  {
    outline: 0,
    border: "none",
    width: "100%",
    height: "100%",
    borderRadius: "5px",
  },
  variant({
    variants: {
      primary: {
        backgroundColor: "white",
        padding: "1rem 1rem",
        fontSize: "18px",
        "&::placeholder": {
          fontWeight: 'bold',
          color: "#A4A4A4",
        },
      },
    },
  }),
  space,
  layout
);

export default Input;

// `
//   width: 100%;
//   height: 100%;
//   background-color: white;
//   outline: 0;
//   border: none;
//   padding: 1.5rem 2rem;
// `;
