import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { WHITE } from '../../../constants/color';

import { LineCardContainer } from '../Card/LineCard';

export const ModalOverlayCotainer = styled(LineCardContainer)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background: ${WHITE};
  overflow: 'hidden';
  ${({ width }) => `width: ${width};`}
  ${({ height }) => `height: ${height};`}
`;

const ModalOverlay = ({ children, width, height }) => {
  return (
    <ModalOverlayCotainer width={width} height={height}>
      {children}
    </ModalOverlayCotainer>
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalOverlay;
