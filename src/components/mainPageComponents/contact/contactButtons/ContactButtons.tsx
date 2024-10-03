import React from 'react';
import styled from '@emotion/styled';
import CallButton from '@/components/mainPageComponents/contact/contactButtons/CallButton';
import InstagramButton from '@/components/mainPageComponents/contact/contactButtons/InstagramButton';
import LinkedinButton from '@/components/mainPageComponents/contact/contactButtons/LinkedinButton';
import MailButton from '@/components/mainPageComponents/contact/contactButtons/MailButton';
export const ButtonContainer = styled.div`
    position: absolute;
    
    display: flex;           
    gap: 1vw;               
    justify-content: center; 
    align-items: center;    
`;

const MoveButton: React.FC = () => {

  return (
    <ButtonContainer>
      <CallButton/>
      <MailButton/>
      <InstagramButton/>
      <LinkedinButton/>
    </ButtonContainer>
  );
};

export default MoveButton;