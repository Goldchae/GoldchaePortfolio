import React from 'react';
import { CoolButtonContainer } from './CoolButton.styled';

interface CoolButtonProps {
  onClick: () => void;
  label: string;
}

const CoolButton: React.FC<CoolButtonProps> = ({ onClick, label }) => {
  return (
    <CoolButtonContainer onClick={onClick}>
      {label}
    </CoolButtonContainer>
  );
};

export default CoolButton;