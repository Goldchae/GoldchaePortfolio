import styled from '@emotion/styled';
import mainBackground from '../../assets/mainback.svg';

// 배경 컨테이너 스타일
export const BackgroundContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: auto;
    min-width: 500px;
    aspect-ratio: 1300 / 740; /* 이미지의 원래 비율 유지 */
    background: url(${mainBackground}) no-repeat center top;
    background-size: contain;
    z-index: 0;
    margin: 0;
    padding: 0;
`;

export const CenteredTextContainer = styled.div`
    position: absolute;
    top: 40%;
    left: 45%;
    transform: translate(-50%, -50%);
    text-align: center; /* 텍스트를 중앙 정렬 */
    font-size: clamp(16px, 2vw + 1rem, 100px); /* 최소 16px, 최대 48px로 크기 조절 */
`