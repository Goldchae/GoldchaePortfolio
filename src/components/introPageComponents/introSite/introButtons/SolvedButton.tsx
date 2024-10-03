import styled from '@emotion/styled';

const SolvedButton = () => {

  const handleClick = () => {
    window.location.href ='https://solved.ac/profile/celina324';
  };

  return (
    <ButtonContainer onClick={handleClick}/>
  );
};

const solvedPic = '/assets/introSiteButton/solvedButton.svg';

const ButtonContainer = styled.button`
  width: 3vw;
  height: 3vw;
  background: url(${solvedPic}) no-repeat center center;
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

export default SolvedButton;
