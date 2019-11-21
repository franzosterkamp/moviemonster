import { Global, css } from "@emotion/core";
import React from "react";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *before {
          box-sizing: border-box;
        }
        body {
          background-color: #fcef87;
          font-size: 16px;
          padding: 0px;
          margin: 0;
          font-family: "Alatsi", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}
    />
  );
}

// /* Color Theme Swatches in Hex */
// .Yellows-1-hex { color: #FFFF55; }
// .Yellows-2-hex { color: #FCEF87; }
// .Yellows-3-hex { color: #F5C342; }
// .Yellows-4-hex { color: #F5BD42; }
// .Yellows-5-hex { color: #F9DB49; }
