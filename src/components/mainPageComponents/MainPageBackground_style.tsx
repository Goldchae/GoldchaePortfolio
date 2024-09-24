import styled from '@emotion/styled';

export const BackgroundContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: auto;
    min-width: 500px;
    aspect-ratio: 1300 / 740; /* 이미지의 원래 비율 유지 */
    background: url('/assets/mainback.svg') no-repeat center top;
    background-size: contain;
    z-index: 0;
    margin: 0;
    padding: 0;
`;

export const CenteredFirstTextContainer = styled.div`
    position: absolute;
    top: 40%;
    left: 45%;
    transform: translate(-50%, -50%);
    text-align: center;
`
export const CenteredSecondTextContainer = styled.div`
    position: absolute;
    top: 50%;
    left:40.5%;
    transform: translate(-50%, -50%);
    text-align: center;
`

export const UnderTextContainer = styled.div`
    position: absolute;
    bottom : 8%;
    left: 53%;
    text-align: center;
`
export const UnderShineLineContainer = styled.div`
    position: absolute;
    bottom : 7%;
    right: 0;
`

export const TopShineLineContainer = styled.div`
    position: absolute;
    Top : 3%;
    left: 0;
`
export const IntroduceContainer = styled.div`
    position: absolute;
    Top : 30%;
    left: 4%;
`