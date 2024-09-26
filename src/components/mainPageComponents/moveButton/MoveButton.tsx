import React from 'react';
import CoolButton from '../../common/coolButton/CoolButton';
import { ButtonContainer } from '@/components/mainPageComponents/moveButton/MoveButton.style';

const MoveButton: React.FC = () => {
  const handleClick = () => {
    console.log('해당 페이지 이동!');
  };

  return (
    <ButtonContainer>
      <CoolButton onClick={handleClick} label="Studing" />
      <CoolButton onClick={handleClick} label="Activity" />
      <CoolButton onClick={handleClick} label="Project" />
    </ButtonContainer>
  );
};

export default MoveButton;