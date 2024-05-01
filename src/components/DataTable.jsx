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
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const DataTable = ({ filteredTransactions }) => {
  const { deleteTransaction } = useContext(globalContext);
  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
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
