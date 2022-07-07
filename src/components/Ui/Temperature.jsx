import React from 'react';
import styled from 'styled-components';
import { LIGHT_GRAY } from '../../constants/color';

const thinking = (value) => {
  if (value <= 25) {
    return '#186EC0';
  } else if (value <= 50) {
    return '#37B24D';
  } else if (value <= 75) {
    return '#FFAD13';
  } else if (value <= 99) {
    return '#F76707';
  } else {
    return '#FF0000';
  }
};

const StyledProfress = styled.progress`
  appearance: none;
  margin-right: 0.5rem;

  ::-webkit-progress-bar {
    background-color: ${LIGHT_GRAY};
    border-radius: 1rem;
    overflow: hidden;
  }

  ::-webkit-progress-value {
    background-color: ${({ value }) => thinking(value)};
  }
`;

const Temperature = ({ value }) => {
  return (
    <div>
      <StyledProfress value={value} max="100"></StyledProfress>
      <span>{value} °C</span>
    </div>
  );
};

export default Temperature;
