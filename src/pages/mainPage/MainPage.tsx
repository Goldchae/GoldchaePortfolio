import MainPageBackground from '@/components/mainPageComponents/MainPageBackground';
import React from 'react';
import { ContactContainer,ButtonSetContainer,ChatWithMeContainer } from '@/pages/mainPage/MainPage.styled';
import Contact from '@/components/mainPageComponents/contact/Contact';
import MoveButton from '@/components/mainPageComponents/moveButton/MoveButton';
import ChatWithMe from '@/components/mainPageComponents/chatWithMe/ChatWithMe';

const MainPage = () => {
  return (
        <MainPageBackground>
          <ContactContainer>
            <Contact/>
          </ContactContainer>


          <ButtonSetContainer>
            <MoveButton/>
          </ButtonSetContainer>

          <ChatWithMeContainer>
          <ChatWithMe/>
          </ChatWithMeContainer>
        </MainPageBackground>
  )
}

export default MainPage;