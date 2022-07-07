import React from 'react';
import styled from 'styled-components';

export const ShadowCardContainer = styled.div`
  width: fit-content;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const ShadowCard = ({ children, ...props }) => {
  return <ShadowCardContainer {...props}>{children}</ShadowCardContainer>;
};

export default ShadowCard;
