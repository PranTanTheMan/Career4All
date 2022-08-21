import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import NavBar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
