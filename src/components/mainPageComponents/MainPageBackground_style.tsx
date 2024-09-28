import styled from '@emotion/styled';

export const BackgroundContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: auto;
    min-width: 500px;
    aspect-ratio: 1300 / 780; /* 이미지의 원래 비율 유지 */
    background: url('/assets/mainback.svg') no-repeat center top;
    background-size: contain;
    z-index: 0;
    margin: 0;
    padding: 0;
`;

export const CenteredFirstTextContainer = styled.div`
    position: absolute;
    top: 38%;
    left: 45%;
    transform: translate(-50%, -50%);
    text-align: center;
`
export const CenteredSecondTextContainer = styled.div`
    position: absolute;
    top: 47%;
    left:41.5%;
    transform: translate(-50%, -50%);
    text-align: center;
`


export const UnderTextContainer = styled.div`
    position: absolute;
    bottom : 13%;
    left: 53%;
    text-align: center;
`
export const UnderShineLineContainer = styled.div`
    position: absolute;
    bottom : 7vw;
    right: 0;
    z-index: 10;

`

export const TopShineLineContainer = styled.div`
    position: absolute;
    Top : 3%;
    left: 0;
`
export const IntroduceContainer = styled.div`
    position: absolute;
    width: 15%;
    height: 25%;
    Top : 34%;
    left: 4.5%;
`
export const ContactContainer = styled.div`
    position: absolute;
    width: 15%;
    height: 10%;
    Top : 65%;
    left: 4.5%;
`
export const ButtonSetContainer = styled.div`
    position: absolute;
    width: 42%;
    height: 10%;
    Top : 3.5%;
    right: 6.5%;
`