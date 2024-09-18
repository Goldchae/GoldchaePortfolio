/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "StarBold";
        src: url('/starskyFont/Hakgyoansim Byeolbichhaneul TTF B.ttf') format("truetype");
        font-weight: normal;
        font-style: normal;
      }
      
      body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    `}
  />
);

export default GlobalStyle;