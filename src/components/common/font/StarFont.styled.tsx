/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SerializedStyles } from "@emotion/react";

// 기존 스타일 함수
interface TextStyleProps {
  fontFamily: string;
  fontSize: number;
  color: string;
}

export const StarFontStyle = ({ fontFamily, fontSize,  color }: TextStyleProps): SerializedStyles => css`
    font-family: ${fontFamily};
    font-size : ${fontSize}  
    color: ${color};
`;