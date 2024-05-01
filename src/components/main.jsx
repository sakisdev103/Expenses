import React, { useState } from "react";
import Transactions from "./Transactions";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { ChildModal } from "./ChildModal";

const Main = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

  return (
    <Container>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="h5">Transactions</Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="success"
            endIcon={<ArrowDropDownIcon />}
            id="add-transaction-button"
            aria-controls={isOpen ? "add-transaction" : undefined}
            aria-haspopup="true"
            aria-expanded={isOpen ? "true" : undefined}
            onClick={handleClick}
          >
            New
          </Button>
          <Menu
            id="add-transaction"
            anchorEl={anchorEl}
            open={isOpen}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "add-transaction-button",
            }}
          >
            <MenuItem>
              <Button
                variant="text"
                color="error"
                size="large"
                onClick={() => handleOpen("Expense")}
              >
                Expense
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                variant="text"
                color="success"
                size="large"
                onClick={() => handleOpen("Revenue")}
              >
                Revenue
              </Button>
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
      <ChildModal
        setAnchorEl={setAnchorEl}
        open={open}
        setOpen={setOpen}
        title={title}
      />
      <Transactions />
    </Container>
  );
};

export default Main;
