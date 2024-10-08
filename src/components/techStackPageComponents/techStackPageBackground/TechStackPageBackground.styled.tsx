import styled from '@emotion/styled';

export const TechBackgroundContainer = styled.div`
    position: relative;
    width: 100vw;
    height: auto;
    min-width: 500px;
    aspect-ratio: 1310 / 860;
    background: url('/assets/stackBackground.svg') no-repeat center top;
    background-size: contain;
    z-index: 0;
    margin: 0;
    padding: 0;
`;

export const TitleBoxContainer = styled.div`
    top : 8%;
    left: -1%;
    position: absolute;
    width: 45vw;
    height: auto;
    aspect-ratio: 800 / 120; 
    background: url('/assets/title.svg') no-repeat center top;
    background-size: contain;
    z-index: 1;
    margin: 0;
    padding: 0;
    
`;

export const TitleTextContainer = styled.div`
    position: absolute;
    top: 28%;
    left: 15%;
`

export const RotatedTitleContainer = styled.div`
    transform: rotate(-90deg);  /* 컴포넌트를 90도 회전 */
    position: absolute;
    top: 45.5%;
    left: -8%;
`;
