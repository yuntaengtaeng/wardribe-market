import React from 'react';
import styled from 'styled-components';
import { PRIMARY } from '../../constants/color';

const Wrap = styled.span`
  display: flex;
  align-items: center;
`;

const Point = styled.span`
  color: ${PRIMARY};
  font-weight: 700;
  margin-right: 0.4rem;
  font-size: ${({ size }) => `${size}rem`};
`;

const Label = styled.span`
  font-size: ${({ size }) => `${size}rem`};
`;

const PointLabel = ({ point, label, size = 1 }) => {
  return (
    <Wrap>
      <Point size={size}>{point}</Point>
      <Label size={size - 0.2}>{label}</Label>
    </Wrap>
  );
};

export default PointLabel;
