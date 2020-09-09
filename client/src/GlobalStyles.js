import React from "react";
import { Global, css } from "@emotion/core";

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
        }

        html {
        }

        body {
        }

        code {
        }
      `}
    />
  );
};

export default GlobalStyles;