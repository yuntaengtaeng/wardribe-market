import React from 'react';
import styled from 'styled-components';

import ProfileImg from './ProfileImg';

const Container = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
`;

const Left = styled.div`
  margin-right: 1rem;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const ChatItem = ({ src, userName, chatHistory, time }) => {
  return (
    <Container>
      <Left>
        <ProfileImg src={src} size={60}></ProfileImg>
      </Left>
      <Right>
        <p>
          {userName}
          <br></br>
          {chatHistory}
        </p>
        <p>{time}</p>
      </Right>
    </Container>
  );
};

export default ChatItem;
