import React from 'react';
import Background3D from './components/common/3dBackground/Background3d';
import { Global, css } from '@emotion/react';

const App: React.FC = () => {
  return (
    <>
      {/* Global 스타일 적용 */}
      <Global
        styles={css`
          html,
          body,
          #root {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow-y: scroll; /* 스크롤을 강제로 활성화 */
          }
        `}
      />
      <Background3D />
      <h1 style={{ position: 'relative', zIndex: 1, color: 'white' }}>Goldchae's portfolio</h1>
      <div style={{ height: '3000px' }}>
        {/* 스크롤을 위한 충분한 빈 공간 */}
      </div>
    </>
  );
};

export default App;