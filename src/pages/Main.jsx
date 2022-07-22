import React from 'react';
import styled from 'styled-components';

import { LIGHT_GRAY } from '../constants/color';

import CategoryList from '../components/Main/CategoryList';

const BackGround = styled.section`
  box-sizing: border-box;
  width: 100vw;
  padding: 0rem 15vw;
  margin: 0 auto;
  min-height: 100vh;
  background-color: ${LIGHT_GRAY};
  display: flex;
  flex-direction: column;
`;

const Main = () => {
  return (
    <BackGround>
      <CategoryList />
    </BackGround>
  );
};

export default Main;
