import React, { useState, useContext } from "react";
import { globalContext } from "../context/globalState";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import uniqid from "uniqid";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const ChildModal = ({ setAnchorEl }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  const handleOpen = (transaction) => {
    if (transaction === "Expense") {
      setTitle("Expense");
    } else {
      setTitle("Revenue");
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const { addTransaction } = useContext(globalContext);
  const handleSubmit = (e, title) => {
    e.preventDefault();
    const newTransaction = {
      id: uniqid(),
      date,
      text,
      amount: title === "Revenue" ? +amount : -amount,
    };

    addTransaction(newTransaction);
    setText("");
    setAmount();
    setOpen(false);
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ gap: 2 }}
      >
        <Grid item>
          <Button
            variant="text"
            color="error"
            size="large"
            onClick={() => handleOpen("Expense")}
          >
            Expense
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="text"
            color="success"
            size="large"
            onClick={() => handleOpen("Revenue")}
          >
            Revenue
          </Button>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h6">{title}</Typography>
            </Grid>
            <Grid item>
              <IconButton aria-label="close" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Typography align="center" sx={{ my: 1 }}>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={(e) => handleSubmit(e, title)}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    label={title === "Expense" ? "New Expense" : "New Revenue"}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={amount < 0 ? 0 : amount}
                    onChange={(e) => setAmount(e.target.value)}
                    label="Amount"
                    variant="outlined"
                    InputProps={{
                      type: "number",
                      inputProps: { min: 0 },
                    }}
                  />
                </Grid>
              </Grid>
              <Container disableGutters sx={{ my: 3 }}>
                <DatePicker
                  inline
                  name="date"
                  selected={date}
                  value={date}
                  onChange={(e) => setDate(moment(e).format("YYYY-MM-DD"))}
                  disabledKeyboardNavigation
                  onFocus={(e) => (e.target.readOnly = true)}
                />
              </Container>
              <Button type="submit" variant="contained">
                Save
              </Button>
            </Box>
          </Typography>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};
