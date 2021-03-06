import React from "react";
import styled from "@emotion/styled";
import AddIcon from "../assets/icons/menu.svg";
import UserIcon from "../assets/icons/sort.svg";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const SearchHeaderContainer = styled.header`
  display: grid;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  background: var(--bg-main-gradient);
`;

const SearchHeaderIcons = styled.nav`
  padding: 0.7em 0.2em;
  display: flex;
  margin: 0 1em;
  justify-content: space-between;
  & > a {
    display: flex;
    padding: 0.7em;
  }
  & > a > img {
    height: 1em;
  }
`;

function SearchHeader() {
  return (
    <SearchHeaderContainer>
      <SearchHeaderIcons>
        <Link to="/AddIcon">
          <img src={AddIcon} alt="Essen teilen" />
        </Link>
        <SearchInput />
        <Link to="/UserIcon">
          <img src={UserIcon} alt="Mein Bereich" />
        </Link>
      </SearchHeaderIcons>
    </SearchHeaderContainer>
  );
}

export default SearchHeader;
