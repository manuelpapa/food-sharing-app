import React from "react";
import styled from "@emotion/styled";

const Input = styled("input")`
  font-size: 0.9em;
  padding: 10px 15px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid var(--font-semi-dark);
  ::placeholder {
    color: var(--font-semi-dark);
    font-size: 13px;
    text-align: center;
  }
`;

// export default function SearchInput({ value, onChange }) {
export default function SearchInput() {
  return (
    <Input
      placeholder="Eingabe"
      // value={value}
      // onChange={(event) => onChange(event.target.value.trim())}
      autoFocus
    />
  );
}
