import React from 'react';
import styled from 'styled-components';

import { SECONDARY } from '../../../constants/color';

import Icon from './Icon';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.h2`
  color: ${SECONDARY};
`;

const Title = () => {
  return (
    <Container>
      <Icon />
      <Text>장롱마켓</Text>
    </Container>
  );
};

export default Title;
