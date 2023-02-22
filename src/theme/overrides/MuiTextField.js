import { palette } from "../palette";
export const MuiTextField = {
  styleOverrides: {
    root: {
      "& label.Mui-focused": {
        color: palette.primary.gray,
      },

      "& .MuiOutlinedInput-root": {
        backgroundColor: "#fff",

        "& fieldset": {
          borderColor: "transparent",

          color: "black",
        },
        "&:hover fieldset": {
          borderColor: "#013eb7",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#013eb7",
          outline: "none",
        },
        "@media (max-width: 500px)": {
          "& .MuiOutlinedInput-input": {
            padding: "12.5px 0px 12.5px 18px",
          },
          
        },
        color: palette.text.darkBlack,
        fontSize: "14px",
        fontStyle: "bold",
        fontFamily: "Roboto-Regular",
        fontWeight: 700,
        borderRadius: "10px",
        "& ::placeholder": {
          color: "#090909",
          fontFamily: "Roboto-Regular",
          fontWeight: 500,
          fontSize: "15px",
          textAlign: "left",
          opacity: 0.8,
        },
        
      },

      "& .MuiFormHelperText-root": {
        fontWeight: 500,
        fontSize: "12px",
        backgroundColor: "transparent",
      },
      "&  .MuiFormHelperText-root.Mui-error": {
        backgroundColor: "transparent",
        margin: 0,
        paddingLeft: 10,
      },
    },
  },
};
