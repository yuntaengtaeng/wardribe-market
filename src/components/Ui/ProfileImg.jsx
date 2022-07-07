import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.size / 16 || '1'}rem;
  height: ${(props) => props.size / 16 || '1'}rem;
  border: 1px solid #c0c0c0;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.5rem;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Default = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  background-color: #c0c0c0;
  width: 100%;
  height: 100%;
`;

const ProfileImg = ({ src, size }) => {
  return (
    <Container size={size}>
      {!!src ? <Img src={src} alt="" /> : <Default />}
    </Container>
  );
};

export default ProfileImg;
