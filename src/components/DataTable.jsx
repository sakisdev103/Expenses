import React, { useContext } from "react";
import { globalContext } from "../context/globalState";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DataTable = () => {
  const { transactions } = useContext(globalContext);
  return (
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
  );
};

export default DataTable;
