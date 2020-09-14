import React from "react";
import styled from "@emotion/styled";
import AddIcon from "../assets/images/secondBite_Icon_Add.svg";
import ListIcon from "../assets/images/secondBite_Icon_List.svg";
import UserIcon from "../assets/images/secondBite_Icon_User.svg";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  display: grid;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  background: #fff;
`;

const FooterGradient = styled.div`
  height: 0.4em;
  background: var(--bg-main-gradient);
`;

const FooterIcons = styled.nav`
  padding: 0.7em 0.2em;
  display: flex;
  margin: 0 1em;
  justify-content: space-between;
  & > a {
    display: flex;
    align-items: center;
    padding: 0.7em;
  }
  & > a > img {
    height: 1em;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterGradient />
      <FooterIcons>
        <Link to="/AddIcon">
          <img src={AddIcon} alt="Essen teilen" />
        </Link>
        <Link to="/ListIcon">
          <img src={ListIcon} alt="Liste durchsuchen" />
        </Link>
        <Link to="/UserIcon">
          <img src={UserIcon} alt="Mein Bereich" />
        </Link>
      </FooterIcons>
    </FooterContainer>
  );
}
