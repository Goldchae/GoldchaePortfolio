import styled from '@emotion/styled';
import { Canvas } from '@react-three/fiber';

export const StyledCanvas = styled(Canvas)`
    background: black;
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

