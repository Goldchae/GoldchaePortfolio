import React from 'react';
import { PhotoContainer, Image } from './MyPhoto.styled';

const myPhotodi = '/assets/mainPage/myphoto.png';

const MyPhoto = () => {
  return (
    <PhotoContainer>
      <Image src={myPhotodi} alt='My Photo' />
    </PhotoContainer>
  );
}

export default MyPhoto;
