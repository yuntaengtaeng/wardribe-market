import React from 'react';
import styled from 'styled-components';

import { LIGHT_GRAY } from '../constants/color';

import CategoryList from '../components/Main/CategoryList';
import RecommendedProducts from '../components/Main/RecommendedProducts';

const BackGround = styled.section`
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 7.5rem;
  background-color: ${LIGHT_GRAY};
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const Main = () => {
  return (
    <BackGround>
      <Container>
        <CategoryList />
        <RecommendedProducts />
      </Container>
    </BackGround>
  );
};

export default Main;
