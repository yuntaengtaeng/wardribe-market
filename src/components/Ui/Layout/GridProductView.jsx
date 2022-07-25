import React from 'react';
import styled from 'styled-components';
import Product from '../Product';

const Grid = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-Fill, minmax(13rem, 1fr));
  row-gap: 1rem;
`;

const GridProductView = ({ products }) => {
  return (
    <Grid>
      {products.map((v) => (
        <Product />
      ))}
    </Grid>
  );
};

export default GridProductView;
