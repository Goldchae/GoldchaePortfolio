import React from 'react';
import Background3D from './components/common/3dBackground/Background3d';
import MainPage from '@/pages/mainPage/MainPage';
import GlobalStyle from '@/components/common/GlobalStyle';
import TechStackPage from '@/pages/techStackPage/TechStackPage';
import { PageContainer,  EachPageContainer } from './App.styled';
import IntroPage from '@/pages/introPage/IntroPage';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Background3D />

      <PageContainer>
        <EachPageContainer>
          <MainPage />
        </EachPageContainer>

        <EachPageContainer>
          <IntroPage/>
        </EachPageContainer>
        
        <EachPageContainer>
          <TechStackPage />
        </EachPageContainer>

      </PageContainer>
    </>
  );
};

export default App;