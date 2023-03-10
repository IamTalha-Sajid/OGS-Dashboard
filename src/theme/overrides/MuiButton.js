import { palette } from "../palette";

export const MuiButton = {
  styleOverrides: {
    // Name of the slot
    contained: {
      padding: "18px 15px ",
      maxWidth: "243px",
      width: "100% ",
      height: 49,
      borderRadius: "10px",
      color: palette.white,
      background: "linear-gradient(49deg,#a86d00 34%,#f6ce69)",
      fontFamily: "SpaceGrotesk",
      fontSize: "14px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "Bold",
      letterSpacing: 0.64,
      textTransform: "capitalize",
      border:'2px solid rgba(218,165,32,.63)',
      // "&:hover": {
      //   backgroundColor: palette.primary.main,
      //   boxShadow: "none",
      // },
      "&.Mui-disabled": {
        // backgroundColor: `#013eb796 !important`,
        // color: "#8B849B",
        // opacity: 1,
      },
      "@media (max-width: 500px)": {
        fontSize: 14,
        height: 40,
      },
    },
    outlined: {
      padding: "18px 15px ",
      maxWidth: "243px",
      width: "100% ",
      height: 49,
      border:'2px solid rgba(218,165,32,.63)',
      boxShadow: "none",
      borderRadius: "10px",
      color: '#fff',
      backgroundColor: 'transparent',
      fontFamily: "SpaceGrotesk",
      fontSize: 18,
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "Bold",
      letterSpacing: 0.36,
      textTransform: "capitalize",
      "@media (max-width: 500px)": {
        fontSize: 16,
        height: 45,
      },
      "&:hover": {
        // backgroundColor: palette.primary.light,
        border: "2px solid rgba(218,165,32,.63)",
      },
      "&.Mui-disabled": {
        // backgroundColor: "#D5D4DC !important",
        // color: "#8B849B",
        // opacity: 1,
      },
    },

    text: {
      textDecoration: "underline",
      fontFamily: "Roboto-Italic",
      fontSize: 18,
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "italic",
      lineHeight: "normal",
      letterSpacing: "normal",
      textAlign: "left",
      color: palette.primary.dark,
      textTransform: "capitalize",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    white: {
      padding: "18px 35px ",
      maxWidth: "243px",
      width: "100% ",
      height: 49,
      boxShadow: "7px 7px 10px 0 rgba(202, 206, 220, 0.31)",
      borderRadius: "10px",
      color: palette.primary.main,
      backgroundColor: "#fff",
      fontFamily: "Roboto-Regular",
      fontSize: 14,
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "Bold",
      letterSpacing: 0.64,
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: "#fff",
      },
      "&.Mui-disabled": {
        backgroundColor: "#D5D4DC !important",
        color: "#8B849B",
        opacity: 1,
      },
    },
  },
};
