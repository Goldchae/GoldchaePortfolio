import React from 'react';
import Background3D from './components/common/3dBackground/Background3d';
//import MainPage from '@/pages/mainPage/MainPage';
import GlobalStyle from '@/components/common/GlobalStyle';
import TechStackPage from '@/pages/techStackPage/TechStackPage';


const App: React.FC = () => {
  return (
    <>
    <GlobalStyle/>
      <Background3D />
      <TechStackPage/>

    </>
  );
};

export default App;