import React from "react";
import styled from "@emotion/styled";

const Input = styled("input")`
  display: flex;
  font-size: 1em;
  padding: 0.5em 1.5em;
  margin: 0em;
  border: none;
  border-radius: 4em;
  background-color: #ffffff;
  color: var(--font-semi-dark);
  outline: none;
`;

export default function SearchInput() {
  return <Input placeholder="Suchen..." autoFocus />;
}
