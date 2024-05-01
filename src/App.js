import React from "react";
import Main from "./components/main";
import { GlobalProvider } from "./context/globalState";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
console.log(grey[900]);

const theme = createTheme({
  palette: {
    info: {
      main: grey[900],
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <Container maxWidth="lg" sx={{ mt: 5 }}>
          <CssBaseline />
          <Typography align="center">
            <Main />
          </Typography>
        </Container>
      </GlobalProvider>
    </ThemeProvider>
  );
};

export default App;
