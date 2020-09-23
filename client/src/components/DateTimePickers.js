import "antd/dist/antd.css";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import {
  DatePicker as AntdDatePicker,
  TimePicker as AntdTimePicker,
} from "antd";

const pickerStyle = css`
  font-size: 1em;
  border: solid 1px var(--font-semi-dark);
  border-radius: 0;
  font-family: "SFUIreg";
  margin: 0.5em;
  padding: 0;
  align-content: center;
  input,
  span,
  p {
    color: var(--font-semi-dark);
  }
  input {
    border: none;
    padding-left: 1em;
  }
  span {
    padding-right: 0.5em;
  }
  svg {
    align-content: center;
  }
`;

export const DatePicker = styled(AntdDatePicker)`
  ${pickerStyle}
`;
export const RangePicker = styled(AntdTimePicker.RangePicker)`
  ${pickerStyle}
`;
