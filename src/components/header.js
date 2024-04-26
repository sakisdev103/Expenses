import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const header = () => {
  return (
    <Container sx={{ my: 3 }} maxWidth="xs">
      <Typography variant="h4">Expenses Tracker</Typography>
      <div className="underline" />
    </Container>
  );
};

export default header;
