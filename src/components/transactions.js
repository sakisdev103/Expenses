import React, { useContext } from "react";
import { globalContext } from "../context/globalState";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const Transactions = () => {
  const { transactions, deleteTransaction } = useContext(globalContext);
  return (
    <Container maxWidth="xs" sx={{ mt: 3 }}>
      <Typography variant="h4" align="center">
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
                    item.amount >= 0 ? `primary.light` : `secondary.light`
                  }`}
                >
                  {item.amount}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="text"
                  color="secondary"
                  onClick={() => deleteTransaction(item.id)}
                >
                  <DeleteIcon />
                </Button>
              </Grid>
            </Grid>
          </Container>
          // <article key={item.id} className="flex">
          //   <div className="history">
          //     <label>{item.text}</label>
          //     <label className={item.amount >= 0 ? `positive` : `negative`}>
          //       {item.amount}
          //     </label>
          //   </div>
          //   <button
          //     className="trash"
          //     onClick={() => deleteTransaction(item.id)}
          //   >
          //     <i className="fa-solid fa-trash-can"></i>
          //   </button>
          // </article>
        );
      })}
    </Container>
  );
};

export default Transactions;
