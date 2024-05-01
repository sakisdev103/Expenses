import React from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const DateFilter = ({ dates, setDates }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const onChange = (dates) => {
    const [start, end] = dates;
    setDates({
      startingDate: start,
      endingDate: end,
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        startIcon={<CalendarMonthIcon />}
        size="large"
        color="info"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {`${moment(dates.startingDate).format("YYYY-MM-DD")} -
          ${
            dates.endingDate !== null
              ? moment(dates.endingDate).format("YYYY-MM-DD")
              : ""
          }`}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <DatePicker
            selected={dates.startingDate}
            onChange={onChange}
            startDate={dates.startingDate}
            endDate={dates.endingDate}
            selectsRange
            selectsDisabledDaysInRange
            inline
          />
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default DateFilter;
