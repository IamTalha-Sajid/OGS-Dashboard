import { red, blueGrey, grey } from "@mui/material/colors";

const white = "#ffff";
const black = "#000";
const darkBlack = "#090909";
const blue = "#0254c4";
const lightBlue = "#0143c1";
const gray = "#8a909a";

export const palette = {
  black,
  white,
  blue,
  gray,
  darkBlack,

  primary: {
    dark: darkBlack,
    main: blue,
    light: white,
    blue,
    lightBlue,
    gray,
  },
  error: {
    contrastText: white,
    dark: red[900],
    main: red[600],
    light: red[400],
  },
  text: {
    primary: black,
    secondary: white,
    link: blue[600],
    darkBlack,
  },
  link: blue[800],
  icon: blueGrey[600],
  background: {
    default: "#F4F6F8",
    paper: white,
  },
  divider: grey[200],
};
