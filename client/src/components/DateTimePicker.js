import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TimePicker } from "antd";
import "antd/dist/antd.css";

export function DateTimePicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  const { RangePicker } = TimePicker;

  return (
    <>
      <div>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd.MM.yyyy"
          isClearable="true"
        />
      </div>
      <div>
        <RangePicker format="HH:mm" minuteStep={15} />
      </div>
    </>
  );
}
