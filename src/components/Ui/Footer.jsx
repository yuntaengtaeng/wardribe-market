import React from 'react';
import { Wrap } from './Block';
import styled from 'styled-components';

const CustomBlock = styled(Wrap)`
  left: 0;
  height: 4rem;
  position: fixed;
  bottom: 0;
  box-shadow: 0 -4px 3px rgba(0, 0, 0, 0.12), 0 4px 3px rgba(0, 0, 0, 0.24);
`;

const Footer = ({ children }) => {
  return <CustomBlock>{children}</CustomBlock>;
};

export default Footer;
