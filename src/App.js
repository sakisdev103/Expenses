import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import { GlobalProvider } from "./context/globalState";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

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
