import React, { useRef, useEffect, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Group } from 'three';

function MyGLBModel(): JSX.Element {
  const model = useRef<Group>(null!);
  const gltf = useLoader(GLTFLoader, '/model3d/moon.glb');

  // 드래그 상태 및 회전 속도 관리
  const [isDragging, setIsDragging] = useState(false);
  const previousPosition = useRef({ x: 0, y: 0 });
  const rotationVelocity = useRef({ x: 0, y: 0 }); // 모델의 회전 속도
  const friction = 0.95; // 관성 감속률 (0에 가까울수록 빨리 멈춤)
  const rotationSensitivity = 0.01; // 회전 감도

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      setIsDragging(true);
      previousPosition.current = { x: event.clientX, y: event.clientY };
      rotationVelocity.current = { x: 0, y: 0 }; // 회전 속도 초기화
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (isDragging && model.current) {
        const deltaX = event.clientX - previousPosition.current.x;
        const deltaY = event.clientY - previousPosition.current.y;

        model.current.rotation.y += deltaX * rotationSensitivity;
        model.current.rotation.x += deltaY * rotationSensitivity;

        rotationVelocity.current = { x: deltaY * rotationSensitivity, y: deltaX * rotationSensitivity };

        previousPosition.current = { x: event.clientX, y: event.clientY };
      }
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging]);

  useFrame(() => {
    if (!isDragging && model.current) {
      model.current.rotation.y += rotationVelocity.current.y;
      model.current.rotation.x += rotationVelocity.current.x;

      rotationVelocity.current.x *= friction;
      rotationVelocity.current.y *= friction;

      if (Math.abs(rotationVelocity.current.x) < 0.001) rotationVelocity.current.x = 0;
      if (Math.abs(rotationVelocity.current.y) < 0.001) rotationVelocity.current.y = 0;
    }
  });

  return (
    <>
      {/*  전역 조명 */}
      <ambientLight intensity={0.4} color="#ffffff" />

      {/*태양광 */}
      <directionalLight position={[5, 10, 5]} intensity={3} color="#ffffff" />

      {/* 포인트 라이트*/}
      <pointLight position={[-5, 5, 5]} intensity={5} color="#ffcc00" distance={20} />

      {/* 스포트 라이트 */}
      <spotLight position={[5, 10, 5]} angle={0.3} penumbra={0.5} intensity={2000} color="#8258FA" />
      <spotLight position={[2, 7, 5]} angle={0.3} penumbra={0.5} intensity={2000} color="#2E9AFE" />
      <spotLight position={[8, 3, 2]} angle={0.3} penumbra={0.5} intensity={1000} color="#A9A9F5" />
      <spotLight position={[20, 10, 15]} angle={0.3} penumbra={0.5} intensity={2000} color="#fffff" />

      <primitive
        object={gltf.scene}
        ref={model}
        scale={[5, 5, 5]}
        position={[0, 0, 0]} // 초기 위치
      />
    </>
  );
}

export default MyGLBModel;