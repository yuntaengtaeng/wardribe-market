import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { BLACK } from '../../constants/color';

const CustomLink = styled(Link)`
  text-decoration: none;
`;

const CategoryItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CategoryImg = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
`;

const CategoryName = styled.p`
  margin-top: 0.75rem;
  color: ${BLACK};
  font-size: 1.125rem;
`;

const CategoryItem = ({ id, name }) => {
  return (
    <CustomLink to={`/category/${id}`}>
      <CategoryItemWrap>
        <CategoryImg
          alt={name}
          src={`${process.env.PUBLIC_URL}/asset/main/${id}.png`}
        />
        <CategoryName>{name}</CategoryName>
      </CategoryItemWrap>
    </CustomLink>
  );
};

export default CategoryItem;
