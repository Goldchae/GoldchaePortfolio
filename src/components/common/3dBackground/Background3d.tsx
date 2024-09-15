import React from 'react';
import My3DModel from './My3dModel';
import { StyledCanvas } from './Background3D_styled';
import * as THREE from 'three'; // THREE 패키지 가져오기

function Background3D() {
  return (
    <StyledCanvas
      camera={{ position: [0, 0, 5], fov: 100 }}
      gl={{ toneMapping: THREE.ACESFilmicToneMapping, outputColorSpace: THREE.SRGBColorSpace }}
    >
      <My3DModel />
    </StyledCanvas>
  );
}

export default Background3D;