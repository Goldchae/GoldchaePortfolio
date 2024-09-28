/** @jsxImportSource @emotion/react */
import React from 'react';
import { ShineLineStyle } from './ShineLine.styled';

interface ShineLineProps {
  width?: string;
  height?: string;
  color?: string;
}

const ShineLine: React.FC<ShineLineProps> = ({
                                               width = '100px',
                                               height = '4px',
                                               color = '#ffffff',

                                             }) => {
  return <div css={ShineLineStyle({ width, height, color })} />;
};

export default ShineLine;
