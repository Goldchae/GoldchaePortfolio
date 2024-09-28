/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface ShineLineStyleProps {
  width: string;
  height: string;
  color: string;
}

export const ShineLineStyle = ({
                                 width,
                                 height,
                                 color,
                               }: ShineLineStyleProps) => css`
  width: ${width};
  height: ${height};
  background-color: ${color};
  position: relative;
  box-shadow: 0 0 2px ;
 
`;
