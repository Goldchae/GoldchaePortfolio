/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import { SerializedStyles } from "@emotion/react";

// 전역 폰트 적용
export const GlobalFontStyle = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "StarBold";
        src: url('/starskyFont/Hakgyoansim Byeolbichhaneul TTF B.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
      }
    `}
  />
);

// 기존 스타일 함수
interface TextStyleProps {
  fontFamily: string;
  //fontSize: number;
  color: string;
}

export const StarFontStyle = ({ fontFamily, color }: TextStyleProps): SerializedStyles => css`
  font-family: ${fontFamily};
 
  color: ${color};
`;