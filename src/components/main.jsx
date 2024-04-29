import React, { useState } from "react";
import Transactions from "./transactions";
import Balance from "./balance";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Modal from "@mui/material/Modal";

import { ChildModal } from "./ChildModal";

const style = {
  position: "absolute",
  top: "40%",
  left: "20%",
  width: "60%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

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
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ChildModal openModal={openModal} setOpenModal={setOpenModal} />
        </Box>
      </Modal>
      <Transactions />
      <Balance />
    </Container>
  );
};

export default Main;
