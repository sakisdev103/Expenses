import React, { useState, useContext } from "react";
import DataAmount from "./DataAmount";
import DateFilter from "./DateFilter";
import DataTable from "./DataTable";
import { globalContext } from "../context/globalState";
import moment from "moment";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Transactions = () => {
  const { transactions } = useContext(globalContext);

  const [dates, setDates] = useState({
    startingDate: moment().format("YYYY-MM-DD"),
    endingDate: moment().format("YYYY-MM-DD"),
  });

  const filteredTransactions = transactions.filter((item) => {
    return moment(item.date).isBetween(
      dates.startingDate,
      dates.endingDate,
      "days",
      "[]"
    );
  });
  return (
    <Container sx={{ mt: 3 }}>
      <Typography align="center" component="div">
        <DataAmount filteredTransactions={filteredTransactions} />
        <DateFilter dates={dates} setDates={setDates} />
        <DataTable filteredTransactions={filteredTransactions} />
      </Typography>
    </Container>
  );
};

export default Transactions;
