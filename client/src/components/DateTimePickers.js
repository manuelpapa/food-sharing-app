import "antd/dist/antd.css";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import {
  DatePicker as AntdDatePicker,
  TimePicker as AntdTimePicker,
} from "antd";

const pickerStyle = css`
  font-size: 1em;
  border: 1px solid black;
  border-radius: 0;
  font-family: "SFUIreg";
  margin: 0;
  input {
    padding: 0.5em;
    color: var(--font-semi-dark);
  }
`;

export const DatePicker = styled(AntdDatePicker)`
  ${pickerStyle}
`;
export const RangePicker = styled(AntdTimePicker.RangePicker)`
  ${pickerStyle}
`;
