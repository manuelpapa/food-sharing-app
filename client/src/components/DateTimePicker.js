import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TimePicker } from "antd";
import "antd/dist/antd.css";

export default function DateTimePicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const { RangePicker } = TimePicker;

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd.MM.yyyy"
        isClearable="true"
      />

      <RangePicker
        format="H:mm"
        minuteStep={15}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
}
