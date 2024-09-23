import React from 'react';
import { TechBackgroundContainer, TitleTextContainer,TitleBoxContainer, RotatedTitleContainer } from '@/components/techStackPageComponents/techStackPageBackground/TechStackPageBackground.styled';
import { css } from '@emotion/react';
import StarFont from '@/components/common/font/StarFont';

const TechStackPageBackground: React.FC = () => {
  return (
    <TechBackgroundContainer>
      <TitleBoxContainer>
      <TitleTextContainer>
        <StarFont
          value="STUDYING : TECH STACK"
          fontFamily="StarLight"
          fontSize = "2.6vw"
          color="#ffffff"
        />
      </TitleTextContainer>
        </TitleBoxContainer>

      <RotatedTitleContainer>
        <StarFont
          value="FRONTEND"
          fontFamily="StarBold"
          fontSize = "7vw"
          color="transparent"
          style={css`
              -webkit-text-stroke: 1px #ffffff;
              text-stroke: 1px #ffffff; /
          `}
        />
      </RotatedTitleContainer>
    </TechBackgroundContainer>
  );
};

export default TechStackPageBackground;