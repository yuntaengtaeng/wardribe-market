import React from 'react';
import styled from 'styled-components';
import { WHITE } from '../../constants/color';

export const Wrap = styled.div`
  width: 100vw;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: ${WHITE};
`;

const Block = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

export default Block;
