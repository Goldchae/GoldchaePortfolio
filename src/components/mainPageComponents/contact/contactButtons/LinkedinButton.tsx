import styled from '@emotion/styled';

const LinkedinButton = () => {

  const handleClick = () => {
    window.location.href = 'https://www.linkedin.com/in/은채-정-b9038126a/';
  };

  return (
    <ButtonContainer onClick={handleClick}/>
  );
};

const linkedinPic = '/assets/contactButton/linkedinButton.svg';

const ButtonContainer = styled.button`
width: 2.5vw;
height: 2.5vw;
background: url(${linkedinPic}) no-repeat center center;
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

export default LinkedinButton;