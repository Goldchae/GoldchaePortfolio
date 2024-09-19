import React from 'react';
import { BackgroundContainer, CenteredTextContainer } from './MainPageBackground_style';
import { css } from '@emotion/react';
import StarFont from '@/components/common/font/StarFont';

const MainPageBackground: React.FC = () => {
  return (
    <BackgroundContainer>
      <CenteredTextContainer>
        <StarFont
          value="JUNG EUN CHAE"
          fontFamily="StarBold"
          fontSize =
          color="#ffffff"
          style={css`
            font-weight: bold;
              font-size: clamp(16px, 4vw + 1rem, 1000px);
          `}
        />
      </CenteredTextContainer>
    </BackgroundContainer>
  );
};

export default MainPageBackground;