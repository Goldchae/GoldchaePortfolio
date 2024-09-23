import React from 'react';
import StarFont from '@/components/common/font/StarFont';
import {NameContainer,
  EnglishNameContainer,
  BirthContainer,
  SchoolContainer,
  MajorContainer,
  CourseContainer,
  LocationContainer,
  YearContainer} from '@/components/mainPageBackground/introduce/Introduce.styled'
const Introduce: React.FC = () => {
  return (
    <>
      <NameContainer>
        <StarFont
          value="Jung Eun Chae"
          fontFamily="StarBold"
          fontSize="1.3vw"/>
      </NameContainer>

      <EnglishNameContainer>
        <StarFont
          value="celina.Jung"
          fontFamily="SpaceRegular"
          fontSize="0.9vw"/>
      </EnglishNameContainer>

      <BirthContainer>
        <StarFont
          value="2003/03/24"
          fontFamily="SpaceRegular"
          fontSize="0.8vw"/>
      </BirthContainer>

      <SchoolContainer>
        <StarFont
          value="Ewha Womens university"
          fontFamily="StarLight"
          fontSize="0.9vw"/>
      </SchoolContainer>

      <MajorContainer>
        <StarFont
          value="Computer science & engineering"
          fontFamily="SpaceRegular"
          fontSize="0.8vw"/>
      </MajorContainer>

      <CourseContainer>
        <StarFont
          value="undergraduate"
          fontFamily="SpaceRegular"
          fontSize="0.8vw"/>
      </CourseContainer>

      <LocationContainer>
        <StarFont
          value="Seoul,Korea"
          fontFamily="SpaceRegular"
          fontSize="0.8vw"/>
      </LocationContainer>

      <YearContainer>
        <StarFont
          value="2022-2026"
          fontFamily="SpaceRegular"
          fontSize="0.8vw"/>
      </YearContainer>
    </>
  )
}

export default Introduce;