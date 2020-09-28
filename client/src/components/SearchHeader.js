import React from "react";
import styled from "@emotion/styled";
import MenuIcon from "../assets/icons/menu.svg";
import { SearchInput } from "./SearchInput";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SearchHeaderContainer = styled.header`
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  background: var(--bg-main-gradient);
  input {
    width: 100%;
    margin: 0 0.8em;
  }
`;

const SearchHeaderIcons = styled.nav`
  padding: 0.7em 0.5em;
  display: flex;
  margin: 0;
  justify-content: space-between;
  & > a {
    display: flex;
    padding: 0.7em;
  }
  & > a > img {
    height: 1em;
  }
`;

function SearchHeader({ value, onChange }) {
  return (
    <SearchHeaderContainer>
      <SearchHeaderIcons>
        <Link to="/menu">
          <img src={MenuIcon} alt="Icon für das Hauptmenü" />
        </Link>
        <SearchInput value={value} onChange={onChange} />
      </SearchHeaderIcons>
    </SearchHeaderContainer>
  );
}

export default SearchHeader;

SearchHeader.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
