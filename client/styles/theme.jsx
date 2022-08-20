import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#ecefff",
      100: "#cbceeb",
      200: "#a9aed6",
      300: "#888ec5",
      400: "#666db3",
      500: "#4d5499",
      600: "#3c4178",
      700: "#2a2f57",
      800: "#181c37",
      900: "#080819",
    },
    primaryBtn: {
      50: "#453C41",
      100: "#4b4147",
      200: "#594d54",
      300: "#7B586B",
      400: "#8a6278",
      500: "#b6819f",
    },
    primaryColor: {
      50: "#04040d",
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  fonts: {
    body: "'Darker Grotesque', sans-serif",
    heading: "'Darker Grotesque', sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        fontFamily: "Darker Grotesque",
        color: "white",
        backgroundColor: "bgColor",
        padding: 0,
        margin: 0,
      },
      "&::-webkit-scrollbar": {
        width: "0.5em",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "0px",
        background: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "secondary",
        borderRadius: "50px",
      },
    }),
  },
});

export default theme;
