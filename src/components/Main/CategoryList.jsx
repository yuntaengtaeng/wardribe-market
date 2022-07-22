import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ShadowCardContainer } from '../Ui/Card/ShadowCard';
import CategoryItem from './CategoryItem';

import { WHITE } from '../../constants/color';

const Title = styled.h2`
  font-size: 1.5rem;
  margin-top: 3.5rem;
  margin-bottom: 1.5rem;
`;

const StyledShadowCard = styled(ShadowCardContainer)`
  background-color: ${WHITE};
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-Fill, minmax(8rem, 1fr));
  row-gap: 1rem;
`;

const CategoryList = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const requestCategory = async () => {
      try {
        const {
          data: { mainCategroyList },
        } = await axios.get('/category/main');

        setCategoryData(mainCategroyList);
      } catch (error) {
        alert('카테고리를 불러오지 못 했습니다.');
      }
    };

    requestCategory();
  }, []);

  return (
    <div>
      <Title>카테고리</Title>
      <StyledShadowCard>
        {categoryData.map(({ id, name }) => (
          <CategoryItem id={id} name={name} key={id} />
        ))}
      </StyledShadowCard>
    </div>
  );
};

export default CategoryList;
