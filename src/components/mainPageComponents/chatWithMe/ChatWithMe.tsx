import React, { useState } from 'react';
import { ChatContainer, Input, Button } from './ChatWithMe.style';

const ChatWithMe = () => {
  const [inputValue, setInputValue] = useState(''); // 입력 값을 상태로 관리

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 엔터 키
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  const handleClick = () => {
    alert('챗봇 기능 미구현');
    setInputValue('');
  };

  return (
    <ChatContainer>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="chat with me"
      />
      <Button onClick={handleClick}>
      </Button>
    </ChatContainer>
  );
};

export default ChatWithMe;
