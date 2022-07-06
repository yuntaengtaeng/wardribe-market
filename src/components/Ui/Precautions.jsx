import React from 'react';
import styled from 'styled-components';
import { VscInfo } from 'react-icons/vsc';
import { LIGHT_GRAY } from '../../constants/color';

const Wrap = styled.div`
  background-color: ${LIGHT_GRAY};
  box-sizing: border-box;
  padding: 1rem;
`;

const Precautions = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

export default Precautions;
