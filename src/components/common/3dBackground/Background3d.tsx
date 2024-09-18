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

      {/* 빛나는 효과*/}
      <EffectComposer>
        <Bloom
          intensity={0.4} // 빛의 강도
          luminanceThreshold={0} // 빛 효과가 적용되는 최소 밝기
          luminanceSmoothing={0.9} // 빛이 퍼지는 부드러움 조절
          // radius={0.1} // 빛이 퍼지는 범위 ?? 안 먹음

        />
      </EffectComposer>
    </StyledCanvas>
  );
}

export default Background3D;