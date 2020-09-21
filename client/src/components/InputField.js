import React from "react";
import styled from "@emotion/styled";

const Input = styled("input")`
  font-size: 0.9em;
  padding-bottom: 0.3em;
  padding-top: 2em;
  background: none;
  border: none;
  border-bottom: 1px solid var(--font-semi-dark);
  text-align: center;
  ::placeholder {
    color: var(--font-semi-dark);
    font-size: 13px;
    text-align: center;
  }
`;

export function emailInput() {
  return (
    <Input
      type="email"
      id="email"
      aria-describedby="emailHelp"
      placeholder="E-Mail"
      autoFocus
    />
  );
}

export function pwdInput() {
  return <Input type="password" id="password" placeholder="Password" />;
}
