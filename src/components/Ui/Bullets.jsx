import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PRIMARY, LIGHT_GRAY } from '../../constants/color';
import { FaCircle } from 'react-icons/fa';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;
`;

const Bullets = ({ maxIndex, index, size, style }) => {
  const Bullet = [...Array(maxIndex)].map((v, i) => (
    <FaCircle
      key={i}
      size={size}
      color={i === index - 1 ? `${PRIMARY}` : `${LIGHT_GRAY}`}
      style={{ margin: '0 0.2rem' }}
    ></FaCircle>
  ));
  return <Wrap style={style}>{Bullet}</Wrap>;
};

Bullets.propTypes = {
  index: PropTypes.number.isRequired,
  maxIndex: PropTypes.number.isRequired,
  size: PropTypes.number,
};

Bullets.defaultProps = {
  size: 24,
};

export default Bullets;
