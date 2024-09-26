import React from 'react';
import My3dModel from './My3dModel';
import { StyledCanvas } from './Background3D_styled';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';


function Background3D() {
  return (
    <StyledCanvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      gl={{ toneMapping: THREE.ACESFilmicToneMapping, outputColorSpace: THREE.SRGBColorSpace }}
    >


      <My3dModel />


      <EffectComposer>
        <Bloom
          intensity={0.4}
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          

        />
      </EffectComposer>
    </StyledCanvas>
  );
}

export default Background3D;