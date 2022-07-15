import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PRIMARY, WHITE } from '../../constants/color';

const Bubble = styled.div`
  width: fit-content;
  max-width: 15rem;
  height: fit-content;
  position: relative;
  border-radius: 0.5rem;
  padding: 0.5rem;
  word-break: break-all;
  ${({ isMe }) =>
    isMe
      ? `
    background: ${PRIMARY};
    margin-left:auto;
    margin-right:1rem;
  `
      : `
    background: ${WHITE};
    margin-left:1rem;
    margin-right:auto;
  `}

  :after {
    content: '';
    position: absolute;
    margin-top: -0.5rem;
    top: 50%;
    width: 0;
    height: 0;
    border: 0.5rem solid transparent;
    ${({ isMe }) =>
      isMe
        ? `right: 0;
    border-left-color: ${PRIMARY};
    border-right: 0;
    margin-right: -0.5rem;
    `
        : `left: 0;
    border-right-color: ${WHITE};
    border-left: 0;
    margin-left: -0.5rem;`}
  }
`;

const SpeechBubble = ({ isMe, message, style }) => {
  return (
    <Bubble isMe={isMe} style={style}>
      {message}
    </Bubble>
  );
};

SpeechBubble.propTypes = {
  isMe: PropTypes.bool.isRequired,
};

export default SpeechBubble;
