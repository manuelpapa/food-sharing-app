import styled from "@emotion/styled";
import React, { useState } from "react";
import PropTypes from "prop-types";

const Tag = styled.div`
  font-family: "SFUIreg";
  font-size: 1em;
  color: ${({ value }) => (value ? "black" : "var(--font-semi-dark)")};
  border: ${({ value }) =>
    value ? "1px solid white" : "1px solid var(--font-semi-dark)"};
  border-radius: 3em;
  padding: 1em 2em;
  margin: 0 0.5em 0.5em 0.5em;
  display: inline-block;
  line-height: 1;
  background: ${({ value }) => (value ? "var(--bg-main-gradient)" : "white")};
  cursor: pointer;
`;

function TagComponent({ preference }) {
  const [tagChecked, setTagChecked] = useState(false);
  function handleChange() {
    setTagChecked(!tagChecked);
  }

  return (
    <Tag value={tagChecked}>
      <label htmlFor={preference}>
        <input
          onChange={() => handleChange()}
          type="checkbox"
          hidden
          placeholder={preference}
          name={preference}
          id={preference}
        />
        <span>{preference}</span>
      </label>
    </Tag>
  );
}

export default TagComponent;

TagComponent.propTypes = {
  preference: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
};
