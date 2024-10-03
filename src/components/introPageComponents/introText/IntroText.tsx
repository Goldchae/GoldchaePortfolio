import React from 'react';
import { TitleTextContainer, BoduTextContainer,Bodu2TextContainer, Bodu3TextContainer } from './IntroText.styled';
import StarFont from '@/components/common/font/StarFont';

const IntroText: React.FC = () => {
  return (
    <>
          <TitleTextContainer>
            <StarFont
              value="HI THERE!"
              fontFamily="StarBold"
              fontSize = "3.5vw"
              color="#ffffff"
            />
          </TitleTextContainer>

        <BoduTextContainer>
        <StarFont
          value="현재 이화여자대학교 컴퓨터공학과 22학번, 3학년 휴학 중인 정은채입니다!"
          fontFamily="StarLight"
          fontSize = "1.3vw"
          color="#ffffff"
        />
      </BoduTextContainer>
      <Bodu2TextContainer>
        <StarFont
          value="협업과 화합을 통한 성장을 중요하게 여겨 지속적으로 다양한 단체에서 리더를 맡으며 다양한 사람들과 시너지를 내고 있습니다."
          fontFamily="StarLight"
          fontSize = "1.3vw"
          color="#ffffff"
        />
      </Bodu2TextContainer>
      <Bodu3TextContainer>
        <StarFont
          value="Frontend, Backend, AI, DevOps 등에 관심을 가지고 있으며 T자형 인재가 되고자 노력합니다."
          fontFamily="StarLight"
          fontSize = "1.3vw"
          color="#ffffff"
        />
      </Bodu3TextContainer>
    </>
  );
};

export default IntroText;