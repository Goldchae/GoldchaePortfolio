import React from 'react';
import styled from '@emotion/styled';
import GithubButton from '@/components/introPageComponents/introSite/introButtons/GithubButton';
import TistoryButton from '@/components/introPageComponents/introSite/introButtons/TistoryButton';
import SolvedButton from '@/components/introPageComponents/introSite/introButtons/SolvedButton';
export const ButtonContainer = styled.div`
    position: absolute;
    
    display: flex;           
    gap: 1vw;               
    justify-content: center; 
    align-items: center;    
`;

const IntroSite: React.FC = () => {

  return (
    <ButtonContainer>
      <GithubButton/>
      <TistoryButton/>
      <SolvedButton/>
    </ButtonContainer>
  );
};

export default IntroSite;