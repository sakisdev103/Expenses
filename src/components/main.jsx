import React, { useState } from "react";
import Transactions from "./transactions";
import Balance from "./balance";
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
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
            aria-controls={open ? "add-transaction" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            New
          </Button>
          <Menu
            id="add-transaction"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "add-transaction-button",
            }}
          >
            <MenuItem>
              <ChildModal setAnchorEl={setAnchorEl} />
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
      <Transactions />
      <Balance />
    </Container>
  );
};

export default Main;
