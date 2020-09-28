import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

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

export const SearchInput = ({ value, onChange }) => {
  return (
    <Input
      placeholder="Suchen"
      value={value}
      onChange={(event) => onChange(event.target.value.trim())}
      autoFocus
    />
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
