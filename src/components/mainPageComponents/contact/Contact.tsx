import React from 'react';
import StarFont from '@/components/common/font/StarFont';
import { ButtonsContainer, TitleContainer } from './Contact.styled';
import ContactButtons from '@/components/mainPageComponents/contact/contactButtons/ContactButtons';
const Contact: React.FC = () => {
  return (
    <>
      <TitleContainer>
        <StarFont
          value="Contact"
          fontFamily="StarBold"
          fontSize="1.3vw"/>
      </TitleContainer>
      <ButtonsContainer>
        <ContactButtons/>
      </ButtonsContainer>
    </>
  )
}

export default Contact;