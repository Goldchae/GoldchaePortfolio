/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "StarBold";
        src: url('/starskyFont/HakgyoansimByeolbichhaneulTTFB.ttf') format("truetype");
        font-weight: normal;
        font-style: normal;
      }

        @font-face {
            font-family: "StarLight";
            src: url('/starskyFont/HakgyoansimByeolbichhaneulTTFL.ttf') format("truetype");
            font-weight: normal;
            font-style: normal;
        }
        @font-face {
            font-family: "SpaceRegular";
            src: url('/spaceFont/HakgyoansimWoojuR.ttf') format("truetype");
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