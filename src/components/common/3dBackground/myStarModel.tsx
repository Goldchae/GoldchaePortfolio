import React, { useMemo } from 'react';

function MyStarModel(): JSX.Element {
  // 별 위치 랜덤
  const stars = useMemo(() => {
    const positions: { position: [number, number, number]; size: number; color: string }[] = [];
    const colors = ['white', '#E0F2F7', '#ECCEF5']; // 하양, 파랑, 보라

    for (let i = 0; i < 1000; i++) {
      // 랜덤 색상 및 크기
      const size = Math.random() * 0.05 + 0.001; // 0.01 ~ 0.06 사이크기
      const color = colors[Math.floor(Math.random() * colors.length)]; // 색상 새개 랜덤

      positions.push({
        position: [
          (Math.random() - 0.5) * 50, // X 좌표
          (Math.random() - 0.5) * 50, // Y 좌표
          (Math.random() - 0.5) * 50, // Z 좌표
        ],
        size,
        color,
      });
    }
    return positions;
  }, []);

  return (
    <>
      {stars.map(({ position, size, color }, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[size, 16, 16]} /> {/*	반지름/가로 분할 수/세로 분할 수*/}
          <meshBasicMaterial color={color} />
        </mesh>
      ))}
    </>
  );
}

export default MyStarModel;