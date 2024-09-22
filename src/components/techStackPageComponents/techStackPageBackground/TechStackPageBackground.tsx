import React from 'react';
import { TechBackgroundContainer, TitleTextContainer,TitleBoxContainer } from '@/components/techStackPageComponents/techStackPageBackground/TechStackPageBackground.styled';
import { css } from '@emotion/react';
import StarFont from '@/components/common/font/StarFont';

const TechStackPageBackground: React.FC = () => {
  return (
    <TechBackgroundContainer>
      <TitleBoxContainer>
      <TitleTextContainer>
        <StarFont
          value="STUDYING : TECH STACK"
          fontFamily="StarBold"

          color="#ffffff"
          style={css`
            font-weight: bold;
              font-size: 3vw ;
          `}
        />
      </TitleTextContainer>
        </TitleBoxContainer>
    </TechBackgroundContainer>
  );
};

export default TechStackPageBackground;