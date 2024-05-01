import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const DataAmount = ({ filteredTransactions }) => {
  const revenue = filteredTransactions
    .filter(({ amount }) => amount > 0)
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expenses = filteredTransactions
    .filter(({ amount }) => amount < 0)
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  return (
    <Grid container sx={{ mb: 3 }}>
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
