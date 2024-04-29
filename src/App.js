import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import { GlobalProvider } from "./context/globalState";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const App = () => {
  return (
    <GlobalProvider>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <CssBaseline />
        <Typography align="center">
          <Header />
          <Main />
        </Typography>
      </Container>
    </GlobalProvider>
  );
};

export default App;