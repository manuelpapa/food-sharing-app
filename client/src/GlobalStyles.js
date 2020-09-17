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
          margin: 0;
        }

        #root {
          display: grid;
          height: 100vh;
          width: 100vw;
          --bg-main-gradient: linear-gradient(
            45deg,
            rgba(140, 239, 192, 1) 0%,
            rgba(195, 255, 186, 1) 100%
          );
          --bg-dark: #424953;
          --font-semi-dark: #818181;
          --tag-yellow: #fefcc9;
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
        h1,
        h2,
        h3 {
          letter-spacing: -0.05em;
          color: #000000;
        }
        h1 {
          font-family: "SFUIheavy";
          font-size: 2.2em;
        }
        h2 {
          font-family: "SFUIbold";
          font-size: 1.8em;
        }
        h3 {
          font-size: 1em;
        }
        h4 {
          font-family: "SFUIbold";
          letter-spacing: -0.05em;
          font-size: 1em;
          color: #000000;
        }

        body {
          font-family: "SFUIreg";
          font-size: 1em;
          margin: 0;
          padding: 0;
          overflow: none;
        }
        small {
          font-family: "SFUIreg";
          font-size: 0.8em;
          color: var(--font-semi-dark);
        }

        code {
        }
      `}
    />
  );
};

export default GlobalStyles;
