import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import DataTable from "./DataTable";
import DataAmount from "./DataAmount";

const Transactions = () => {
  return (
    <Container sx={{ mt: 3 }}>
      <Typography align="center">
        <DataAmount />
        <DataTable />
      </Typography>
    </Container>
  );
};

export default Transactions;
