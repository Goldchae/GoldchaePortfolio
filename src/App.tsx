import React from 'react';
import Background3D from './components/common/3dBackground/Background3d';
import MainPage from '@/pages/mainPage/MainPage';
import GlobalStyle from '@/components/common/GlobalStyle';


const App: React.FC = () => {
  return (
    <>
<GlobalStyle/>
      <Background3D />
      <MainPage/>

    </>
  );
};

export default App;