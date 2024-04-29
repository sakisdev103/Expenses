import React, { useContext } from "react";
import { globalContext } from "../context/globalState";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Transactions = () => {
  const { transactions, deleteTransaction } = useContext(globalContext);
  return (
    <Container maxWidth="xs" sx={{ mt: 3 }}>
      <Typography align="center">
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" color="error.light">
              -$15.00
            </Typography>
            <Typography variant="p">EXPENSES</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" color="success.light">
              $0.00
            </Typography>
            <Typography variant="p">REVENUE</Typography>
          </Grid>
        </Grid>
        <TableContainer sx={{ mt: 3 }} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Merchant</TableCell>
                <TableCell align="right">Transaction Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.date}
                    </TableCell>
                    <TableCell align="right">
                      <Typography>{item.text}</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        color={`${
                          item.amount >= 0 ? `success.light` : `error.light`
                        }`}
                      >
                        {`${item.amount}€`}
                      </Typography>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Typography>
      {/* <Typography variant="h4" align="center">
        Recent Transactions
      </Typography>
      <div className="underline" />
      {transactions.map((item) => {
        return (
          <Container key={item.id} sx={{ mt: 3 }}>
            <Grid container>
              <Grid item xs={5}>
                <Typography variant="h6">{item.text}</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography
                  variant="h6"
                  color={`${
                    item.amount >= 0 ? `success.light` : `error.light`
                  }`}
                >
                  {item.amount}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="text"
                  color="error"
                  onClick={() => deleteTransaction(item.id)}
                >
                  <DeleteIcon />
                </Button>
              </Grid>
            </Grid>
          </Container>
        );
      })} */}
    </Container>
  );
};

export default Transactions;
