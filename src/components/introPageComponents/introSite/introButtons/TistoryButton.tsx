import styled from '@emotion/styled';

const TistoryButton = () => {

  const handleClick = () => {
    window.location.href ='https://junggoldchae-coding.tistory.com';
  };

  return (
    <ButtonContainer onClick={handleClick}/>
  );
};

const tistoryPic = '/assets/introSiteButton/tistoryButton.svg';

const ButtonContainer = styled.button`
  width: 3vw;
  height: 3vw;
  background: url(${tistoryPic}) no-repeat center center;
  background-size: contain;
  border: none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
  
  &:active {
    transform: scale(0.9);
  }
`;

export default TistoryButton;
