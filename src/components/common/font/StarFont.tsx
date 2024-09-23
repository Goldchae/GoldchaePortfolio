/** @jsxImportSource @emotion/react */
import { SerializedStyles } from "@emotion/react";
import { StarFontStyle } from "./StarFont.styled";

interface TextProps {
  value: string;
  fontFamily?: string;
  fontSize?: string | number;
  color?: string;
  style?: SerializedStyles;
}

const StarFont: React.FC<TextProps> = ({
                                         value,
                                         fontFamily = "StarBold",
                                         fontSize = 17,
                                         color = "#ffffff",
                                         style: customCss,
                                       }) => {
  return (
    <>
      <span css={[StarFontStyle({ fontFamily, fontSize, color }), customCss]}>
        {value}
      </span>
    </>
  );
};

export default StarFont;