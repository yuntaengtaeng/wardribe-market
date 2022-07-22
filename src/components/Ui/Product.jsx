import React from 'react';
import styled from 'styled-components';

import { WHITE, BLACK, LIGHT_GRAY } from '../../constants/color';

import { Link } from 'react-router-dom';

import { LineCardContainer } from './Card/LineCard';

import { IoLocationSharp } from 'react-icons/io5';

const BottomGrayColor = '#666666';

const CustomLineCard = styled(LineCardContainer)`
  width: 12.5rem;
  background-color: ${WHITE};
  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }
`;

const CustomLink = styled(Link)`
  text-decoration: none;
`;

const Top = styled.div`
  width: 100%;
  height: 12.5rem;
`;

const ProductImg = styled.img`
  vertical-align: bottom;
  border-style: none;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Middle = styled.div`
  height: 5rem;
  padding: 1rem 0.625rem;
  color: ${BLACK};
`;

const ProductName = styled.div`
  font-size: 0.875rem;
  padding-bottom: 1.25rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const MiddleBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.25rem;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const TimeStamp = styled.div`
  font-size: 0.75rem;
  color: rgb(136, 136, 136);
`;

const Bottom = styled.div`
  height: 2.5rem;
  border-top: 1px solid ${LIGHT_GRAY};
  font-size: 0.75rem;
  padding: 0.75rem 0.75rem 0.75rem 0.75rem;
  color: ${BottomGrayColor};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
`;

const Product = ({ id, src, productName, price, timeStamp, address }) => {
  return (
    <CustomLineCard>
      <CustomLink to={`/detail/${id}`}>
        <Top>
          <ProductImg src={src} />
        </Top>
        <Middle>
          <ProductName>{productName}</ProductName>
          <MiddleBottom>
            <Price>{price}</Price>
            <TimeStamp>{timeStamp}</TimeStamp>
          </MiddleBottom>
        </Middle>
        <Bottom>
          <IoLocationSharp size={16} color={BottomGrayColor}></IoLocationSharp>
          {address}
        </Bottom>
      </CustomLink>
    </CustomLineCard>
  );
};

export default Product;
