import React from 'react';
import styled from 'styled-components';
import { LIGHT_GRAY } from '../../constants/color';

const StyledHr = styled.hr`
  background-color: ${LIGHT_GRAY};
  height: ${({ height }) => height};
  border: 0;
`;

const Line = ({ height = '1px' }) => {
  return <StyledHr height={height} />;
};

export default Line;
