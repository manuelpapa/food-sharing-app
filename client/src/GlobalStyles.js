import React from "react";
import { Global, css } from "@emotion/core";
import SFUIreg from "./assets/fonts/SFUIText-Regular.woff";
import SFUIbold from "./assets/fonts/SFUIText-Bold.woff";
import SFUIheavy from "./assets/fonts/SFUIText-Heavy.woff";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        #root {
          height: 100vh;
          width: 100vw;
          --bg-main-gradient: linear-gradient(
            45deg,
            rgba(140, 239, 192, 1) 0%,
            rgba(195, 255, 186, 1) 100%
          );
          --bg-dark: #424953;
          --font-semi-dark: #818181;
        }
        /* FONTS */
        @font-face {
          font-family: "SFUIbold";
          src: url(${SFUIbold}) format("woff");
        }
        @font-face {
          font-family: "SFUIheavy";
          src: url(${SFUIheavy}) format("woff");
        }
        @font-face {
          font-family: "SFUIreg";
          src: url(${SFUIreg}) format("woff");
        }
        h2 {
          font-family: "SFUIbold";
          font-size: 2em;
          color: #000000;
        }
        h3 {
          font-family: "SFUIheavy";
          color: #000000;
        }
        body {
          font-family: "SFUIreg";
          font-size: 17px;
        }
        small {
          font-family: "SFUIreg";
          font-size: 13px;
          color: var(--font-semi-dark);
        }

        code {
        }
      `}
    />
  );
};

export default GlobalStyles;
