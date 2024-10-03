import styled from '@emotion/styled';

export const ChatContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #000;
  border: 2px solid #fff;
  border-radius: 60px;
  padding: 8px 16px;
  width: 34vw;
    height: 4vw;
`;

export const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.5vw;
  outline: none;
    font-family: SpaceRegular,serif;
    text-align: center;


    &::placeholder {
    color: #ccc;
  }
`;

export const Button = styled.button`
    width: 4vw;
    height: 4vw;
    background-color: #000;
    border: 2px solid #fff;
    border-radius: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;

    &:hover {
        opacity: 0.5;
    }

    &:before {
        content: '◆';  
        color: #fff;
        font-size: 1.3vw;
        position: absolute; 

        left: 50%; 
        top:53%; 
        transform: translate(-50%, -53%);

    }
`;