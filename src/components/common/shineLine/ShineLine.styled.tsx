/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface ShineLineStyleProps {
  width: string;
  height: string;
  color: string;
  glowColor: string;
  duration: string;
}

export const ShineLineStyle = ({
                                 width,
                                 height,
                                 color,
                                 glowColor,
                                 duration,
                               }: ShineLineStyleProps) => css`
  width: ${width};
  height: ${height};
  background-color: ${color};
  position: relative;
  box-shadow: 0 0 2px ${glowColor};
  animation: shine ${duration} infinite alternate;

  @keyframes shine {
    0% {
      box-shadow: 0 1px 8px ${glowColor};
    }
    100% {
      box-shadow: 0 0 0 ${glowColor};
    }
  }
`;
