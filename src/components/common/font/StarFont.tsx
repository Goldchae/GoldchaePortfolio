/** @jsxImportSource @emotion/react */
import { SerializedStyles } from "@emotion/react";
import { StarFontStyle, GlobalFontStyle } from "./StarFont.styled";

interface TextProps {
  value: string;
  fontFamily?: string;
 //fontSize?: number;
  color?: string;
  style?: SerializedStyles;
}

const StarFont: React.FC<TextProps> = ({
                                         value,
                                         fontFamily = "StarBold",

                                         color = "#000",
                                         style: customCss,
                                       }) => {
  return (
    <>
      {/* 전역 폰트 스타일 적용 */}
      <GlobalFontStyle />
      <span css={[StarFontStyle({ fontFamily, color }), customCss]}>
        {value}
      </span>
    </>
  );
};

export default StarFont;