import React from 'react';
import styled from 'styled-components';
import { LIGHT_GRAY } from '../../../constants/color';

export const LineCardContainer = styled.div`
  width: fit-content;
  border-radius: 4px;
  border: 1px solid ${LIGHT_GRAY};
`;

const LineCard = ({ children, ...props }) => {
  return <LineCardContainer {...props}>{children}</LineCardContainer>;
};

export default LineCard;
