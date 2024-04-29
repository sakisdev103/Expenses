import React, { useContext } from "react";
import { globalContext } from "../context/globalState";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const DataAmount = () => {
  const { transactions } = useContext(globalContext);
  const revenue = transactions
    .filter(({ amount }) => amount > 0)
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expenses = transactions
    .filter(({ amount }) => amount < 0)
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography variant="h6" color="error.light">
          {`${expenses} €`}
        </Typography>
        <Typography variant="p">EXPENSES</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6" color="success.light">
          {`${revenue} €`}
        </Typography>
        <Typography variant="p">REVENUE</Typography>
      </Grid>
    </Grid>
  );
};

export default DataAmount;
