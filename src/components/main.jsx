import React, { useState } from "react";
import Transactions from "./transactions";
import Balance from "./balance";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import { ChildModal } from "./ChildModal";

const Main = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

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
            onClick={handleOpen}
          >
            New
          </Button>
        </Grid>
      </Grid>
      <Dialog open={openModal} onClose={handleClose}>
        <DialogContent>
          <ChildModal openModal={openModal} setOpenModal={setOpenModal} />
        </DialogContent>
      </Dialog>
      <Transactions />
      <Balance />
    </Container>
  );
};

export default Main;
