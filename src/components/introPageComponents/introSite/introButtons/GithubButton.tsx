import styled from '@emotion/styled';

const GithubButton = () => {

  const handleClick = () => {
    window.location.href ='https://github.com/Goldchae';
  };

  return (
    <ButtonContainer onClick={handleClick}/>
  );
};

const githubPic ='/assets/introSiteButton/githubButton.svg';

const ButtonContainer = styled.button`
  width: 3vw;
  height: 3vw;
  background: url(${githubPic}) no-repeat center center;
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

export default GithubButton;
