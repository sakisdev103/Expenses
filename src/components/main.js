import React, { useState, useContext } from "react";
import { globalContext } from "../context/globalState";
import Transactions from "./transactions";
import Balance from "./balance";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import uniqid from "uniqid";

const Main = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(globalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: uniqid(),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ gap: 2 }}
        >
          <Grid item>
            <TextField
              value={text}
              onChange={(e) => setText(e.target.value)}
              label="Enter Expence"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" sx={{ my: 3 }}>
          Add
        </Button>
      </Box>
      <Transactions />

      <Balance />
    </Container>
  );
};

export default Main;
