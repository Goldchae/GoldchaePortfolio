/** @jsxImportSource @emotion/react */
import React from 'react';
import { ShineLineStyle } from './ShineLine.styled';

interface ShineLineProps {
  width?: string;
  height?: string;
  color?: string;
  glowColor?: string;
  duration?: string;
}

const ShineLine: React.FC<ShineLineProps> = ({
                                               width = '100px',
                                               height = '4px',
                                               color = '#ffffff',
                                               glowColor = '#ffffff',
                                               duration = '2s',
                                             }) => {
  return <div css={ShineLineStyle({ width, height, color, glowColor, duration })} />;
};

export default ShineLine;
