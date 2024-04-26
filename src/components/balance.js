import React, { useContext } from "react";
import { globalContext } from "../context/globalState";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Balance() {
  const { transactions } = useContext(globalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <Container maxWidth="xs">
      <Typography variant="h5" align="center" sx={{ mt: 3 }}>
        YOUR BALANCE
      </Typography>
      <Typography variant="h6">{`${total} €`}</Typography>
    </Container>
  );
}

export default Balance;
