import styled from '@emotion/styled';

const coolBlackButton = '/assets/coolBlackButton.svg';

export const CoolButtonContainer = styled.button`
    width: 13.5vw;
    height: 6vW;
    background: url(${coolBlackButton}) no-repeat center center;
    background-size: contain;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 1.3vw;
    font-family: 'SpaceRegular', sans-serif;
    padding-right: 20px;

    &:hover {
        opacity: 0.8;  
    }

    &:active {
        transform: scale(0.9);  
    }
`;