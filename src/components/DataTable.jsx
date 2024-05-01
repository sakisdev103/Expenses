import React, { useState, useContext } from "react";
import { globalContext } from "../context/globalState";
import DateFilter from "./DateFilter";
import moment from "moment";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const DataTable = () => {
  const { transactions, deleteTransaction } = useContext(globalContext);

  const [dates, setDates] = useState({
    startingDate: moment().format("YYYY-MM-DD"),
    endingDate: moment().format("YYYY-MM-DD"),
  });

  const filteredTransactions = transactions.filter((item) => {
    if (
      moment(item.date).isBetween(
        dates.startingDate,
        dates.endingDate,
        "days",
        "[]"
      )
    ) {
      return item;
    }
  });

  return (
    <TableContainer sx={{ mt: 3 }} component={Paper}>
      <DateFilter dates={dates} setDates={setDates} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Date</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h6">Merchant</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h6">Transaction Amount</Typography>
            </TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredTransactions.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  <Typography>{item.date}</Typography>
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
                <TableCell align="right">
                  <IconButton
                    aria-label="close"
                    color="error"
                    onClick={() => deleteTransaction(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
