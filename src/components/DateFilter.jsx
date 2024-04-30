import React, { useState } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Grid from "@mui/material/Grid";

const DateFilter = () => {
  const [dates, setDates] = useState({
    startingDate: moment().format("YYYY-MM-DD"),
    endingDate: moment().add(1, "d").format("YYYY-MM-DD"),
  });
  const onChange = (dates) => {
    const [start, end] = dates;
    console.log(start, end);
    setDates({
      startingDate: start,
      endingDate: end,
    });
  };
  return (
    <React.Fragment>
      <DatePicker
        showIcon
        className=""
        selected={dates.startingDate}
        onChange={onChange}
        startDate={dates.startingDate}
        endDate={dates.endingDate}
        selectsRange
        selectsDisabledDaysInRange
        withPortal
      />

      {/* <Grid container sx={{ mt: 3 }}>
        <Grid item xs={6}>
          <DatePicker
            name="startingDate"
            selectsStart
            selected={dates.startingDate}
            value={dates.startingDate}
            onChange={(e) =>
              setDates({
                ...dates,
                startingDate: moment(e).format("YYYY-MM-DD"),
                endingDate: moment(e).add(1, "d").format("YYYY-MM-DD"),
              })
            }
            startDate={moment(dates.startingDate).toDate()}
            disabledKeyboardNavigation
            withPortal
            onFocus={(e) => (e.target.readOnly = true)}
          />
        </Grid>
        <Grid item xs={6}>
          <DatePicker
            name="endingDate"
            selectsEnd
            selected={dates.endingDate}
            value={dates.endingDate}
            onChange={(e) =>
              setDates({
                ...dates,
                endingDate: moment(e).format("YYYY-MM-DD"),
              })
            }
            minDate={moment(dates.startingDate)
              .add(1, "d")
              .format("YYYY-MM-DD")}
            startDate={moment(dates.startingDate).toDate()}
            disabledKeyboardNavigation
            withPortal
            onFocus={(e) => (e.target.readOnly = true)}
          />
        </Grid>
      </Grid> */}
    </React.Fragment>
  );
};

export default DateFilter;
