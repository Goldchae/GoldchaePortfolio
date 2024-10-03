import React from 'react';
import {
  BackgroundContainer,
  CenteredSecondTextContainer,
  UnderShineLineContainer,
  CenteredFirstTextContainer,
  UnderTextContainer,
  TopShineLineContainer, IntroduceContainer,MyPhotoContainer
} from './MainPageBackground_style';
import { css } from '@emotion/react';
import StarFont from '@/components/common/font/StarFont';
import ShineLine from '@/components/common/shineLine/ShineLine';
import Introduce from '@/components/mainPageComponents/introduce/Introduce';
import MyPhoto from '@/components/mainPageComponents/myPhoto/MyPhoto';

interface MainPageBackgroundProps {
  children?: React.ReactNode;
}

const MainPageBackground: React.FC<MainPageBackgroundProps> = ({ children }) => {
  return (
    <BackgroundContainer>
      {children}  // children을 컴포넌트 내에서 사용
      <CenteredFirstTextContainer>
        <StarFont
          value="JUNG EUN CHAE"
          fontFamily="StarBold"
          fontSize="clamp(10px, 4vw, 1000px)"
          color="transparent"
          style={css`
              -webkit-text-stroke: 2px #ffffff;
          `}
        />
      </CenteredFirstTextContainer>
      <CenteredSecondTextContainer>
        <StarFont
          value="PORTFOLIO"
          fontFamily="StarBold"
          fontSize="clamp(10px, 4vw, 1000px)"
          color="transparent"
          style={css`
              -webkit-text-stroke: 2px #ffffff;
          `}
        />
      </CenteredSecondTextContainer>
      <IntroduceContainer>
        <Introduce />
      </IntroduceContainer>
      <UnderTextContainer>
        <StarFont
          value="이 포트폴리오 웹사이트는 프론트엔드/클라우드/인공지능 공부 겸 진행되는 1인 프로젝트입니다!"
          fontFamily="SpaceRegular"
          fontSize="clamp(1px, 1.3vw, 1000px)"
          color="#c0c0c0"
        />
      </UnderTextContainer>
      <UnderShineLineContainer>
        <ShineLine width="55vw" height="0.5px" color="#ffffff" />
      </UnderShineLineContainer>
      <TopShineLineContainer>
        <ShineLine width="49vw" height="1px" color="#ffffff" />
      </TopShineLineContainer>
      <MyPhotoContainer>
        <MyPhoto/>
      </MyPhotoContainer>
    </BackgroundContainer>
  );
};

export default MainPageBackground;
