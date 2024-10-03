import React from 'react';
import IntroText from '@/components/introPageComponents/introText/IntroText';
import { IntroPageContainer, IntroSiteContainer } from './IntroPage.styled';
import IntroSite from '@/components/introPageComponents/introSite/IntroSite';

const IntroPage = () => {
  return (
    <IntroPageContainer>
      <IntroSiteContainer>
        <IntroSite/>
      </IntroSiteContainer>
      <IntroText />
    </IntroPageContainer>
  )
}

export default IntroPage;