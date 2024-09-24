/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SerializedStyles } from "@emotion/react";

interface TextStyleProps {
  fontFamily: string;
  fontSize: string | number;
  color: string;
}

export const StarFontStyle = ({ fontFamily, fontSize,  color }: TextStyleProps): SerializedStyles => css`
    font-family: ${fontFamily};
    font-size : ${fontSize} ;
    color: ${color};
`;