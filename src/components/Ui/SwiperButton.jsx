import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LeftSwiper = styled.button`
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  z-index: 10;
  position: absolute;
  left: 0.5rem;
  opacity: 0.4;
  outline: 0;
  border-radius: 50%;
  display: none;
  cursor: pointer;
`;

const RightSwiper = styled.button`
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  z-index: 10;
  position: absolute;
  opacity: 0.4;
  right: 0.5rem;
  outline: 0;
  border-radius: 50%;
  display: none;
  cursor: pointer;
`;

const Wrap = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: fit-content;
  height: fit-content;

  :hover {
    ${LeftSwiper} {
      display: block;
    }

    ${RightSwiper} {
      display: block;
    }
  }
`;

const SwiperButton = ({
  children,
  onLeftClick,
  onRightClick,
  index,
  maxIndex,
}) => {
  return (
    <Wrap>
      {maxIndex !== 0 && index > 0 && (
        <LeftSwiper onClick={onLeftClick}>&lt;</LeftSwiper>
      )}
      {children}
      {maxIndex !== 0 && index !== maxIndex && (
        <RightSwiper onClick={onRightClick}>&gt;</RightSwiper>
      )}
    </Wrap>
  );
};

SwiperButton.propTypes = {
  children: PropTypes.node.isRequired,
  onLeftClick: PropTypes.func,
  onRightClick: PropTypes.func,
  index: PropTypes.number.isRequired,
  maxIndex: PropTypes.number.isRequired,
};

export default SwiperButton;
