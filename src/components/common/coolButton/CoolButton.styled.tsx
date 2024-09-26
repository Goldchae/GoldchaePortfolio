import styled from '@emotion/styled';

const coolBlackButton = '/assets/coolBlackButton.svg';

export const CoolButtonContainer = styled.button`
    width: 180px;
    height: 75px;
    background: url(${coolBlackButton}) no-repeat center center;
    background-size: contain;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 16px;
    font-family: 'SpaceRegular', sans-serif;
    padding-right: 20px;

    &:hover {
        opacity: 0.8;  
    }

    &:active {
        transform: scale(0.9);  
    }
`;