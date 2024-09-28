import React from 'react';
import StarFont from '@/components/common/font/StarFont';
import {TitleContainer} from './Contact.styled'
const Contact: React.FC = () => {
  return (
    <>
      <TitleContainer>
        <StarFont
          value="Contact"
          fontFamily="StarBold"
          fontSize="1.3vw"/>
      </TitleContainer>
    </>
  )
}

export default Contact;