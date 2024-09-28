import React from 'react';
import {
  BackgroundContainer,
  CenteredSecondTextContainer,
  UnderShineLineContainer,
  CenteredFirstTextContainer,
  UnderTextContainer,
  TopShineLineContainer, IntroduceContainer, ContactContainer, ButtonSetContainer,
} from './MainPageBackground_style';
import { css } from '@emotion/react';
import StarFont from '@/components/common/font/StarFont';
import ShineLine from '@/components/common/shineLine/ShineLine';
import Introduce from '@/components/mainPageComponents/introduce/Introduce';
import Contact from '@/components/mainPageComponents/contact/Contact';
import MoveButton from '@/components/mainPageComponents/moveButton/MoveButton';

const MainPageBackground: React.FC = () => {
  return (
    <BackgroundContainer>
      <CenteredFirstTextContainer>
        <StarFont
          value="JUNG EUN CHAE"
          fontFamily="StarBold"
          fontSize="clamp(10px, 4vw , 1000px)"
          color="transparent"
          style={css`
              -webkit-text-stroke: 2px #ffffff;
          `}
        />
      </CenteredFirstTextContainer>
      <CenteredSecondTextContainer>
        <StarFont
          value="PROTFOLIO"
          fontFamily="StarBold"
          fontSize="clamp(10px, 4vw , 1000px)"
          color="transparent"
          style={css`
              -webkit-text-stroke: 2px #ffffff;
          `}
        />
      </CenteredSecondTextContainer>
      <ButtonSetContainer>z-index: 10;
        <MoveButton/>
      </ButtonSetContainer>
<IntroduceContainer>
      <Introduce/>
</IntroduceContainer>
      <ContactContainer>
        <Contact/>
      </ContactContainer>
      <UnderTextContainer>
        <StarFont
          value="이 포트폴리오 웹사이트는 프론트엔드/클라우드/인공지능 공부 겸 진행되는 1인 프로젝트입니다!"
          fontFamily="SpaceRegular"
          fontSize="clamp(1px, 1.4vw , 1000px)"
          color="#c0c0c0"
          style={css`
          `}
        />
      </UnderTextContainer>
      <UnderShineLineContainer>
        <ShineLine width="55vw" height="0.5px" color="#ffffff"  />
      </UnderShineLineContainer>
      <TopShineLineContainer>
        <ShineLine width="49vw" height="1px" color="#ffffff"  />
      </TopShineLineContainer>
    </BackgroundContainer>
  );
};

export default MainPageBackground;