import styled from '@emotion/styled';

const MailButton = () => {

  const handleClick = () => {
    alert("celina03240ewhain.net(후에 메일 연결)")
  };

  return (
    <ButtonContainer onClick={handleClick}/>
  );
};

const mailPic = '/assets/contactButton/mailButton.svg';

const ButtonContainer = styled.button`
width: 2.5vw;
height: 2.5vw;
background: url(${mailPic}) no-repeat center center;
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

export default MailButton;