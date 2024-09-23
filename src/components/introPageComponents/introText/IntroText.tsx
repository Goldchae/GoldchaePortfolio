import React from 'react';
import { TitleTextContainer, BoduTextContainer } from './IntroText.styled';
import StarFont from '@/components/common/font/StarFont';

const IntroText: React.FC = () => {
  return (
    <>
          <TitleTextContainer>
            <StarFont
              value="HI THERE!"
              fontFamily="StarBold"
              fontSize = "2.6vw"
              color="#ffffff"
            />
          </TitleTextContainer>

        <BoduTextContainer>
        <StarFont
          value="현재 이화여자대학교 컴퓨터공학과 22학번, 3학년 휴학 중인 정은채입니다! "
          fontFamily="StarLight"
          fontSize = "1.5vw"
          color="#ffffff"
        />
      </BoduTextContainer>
    </>
  );
};

export default IntroText;