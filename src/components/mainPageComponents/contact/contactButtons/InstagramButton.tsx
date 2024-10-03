import styled from '@emotion/styled';

const InstagramButton = () => {

  const handleClick = () => {
    window.location.href ='https://www.instagram.com/junggoldchae?igsh=MWl2d3dnZ2RoMnJ6Mg%3D%3D&utm_source=qrf';
  };

  return (
    <ButtonContainer onClick={handleClick}/>
  );
};

const instagramPic = '/assets/contactButton/instagramButton.svg';

const ButtonContainer = styled.button`
  width: 2.5vw;
  height: 2.5vw;
  background: url(${instagramPic}) no-repeat center center;
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

export default InstagramButton;
