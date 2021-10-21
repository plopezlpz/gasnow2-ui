import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Main />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
