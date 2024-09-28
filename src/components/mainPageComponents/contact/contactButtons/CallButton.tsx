import styled from '@emotion/styled';

const CallButton = () => {

  const handleClick = () => {
    alert("원래 전화번호 넣나?")
  };

  return (
    <ButtonContainer onClick={handleClick}/>
  );
};

const callPic = '/assets/contactButton/callButton.svg';

const ButtonContainer = styled.button`
width: 2.5vw;
height: 2.5vw;
background: url(${callPic}) no-repeat center center;
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

export default CallButton;