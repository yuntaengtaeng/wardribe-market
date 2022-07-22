import React from 'react';
import styled from 'styled-components';

import Product from '../Ui/Product';

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  margin-top: 3.5rem;
`;

const RecommendedList = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-Fill, minmax(13rem, 1fr));
  row-gap: 1rem;
`;

const RecommendedProducts = () => {
  //TODO 추천 상품 API 요청

  return (
    <div>
      <Title>오늘의 상품 추천</Title>
      <RecommendedList>{/* Product 컴포넌트 사용  */}</RecommendedList>
    </div>
  );
};

export default RecommendedProducts;
