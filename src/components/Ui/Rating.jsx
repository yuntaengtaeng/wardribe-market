import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import { PRIMARY, LIGHT_GRAY } from '../../constants/color';

const MAX_SCORE = 5;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;
`;

const Rating = ({ type, score, size, style, onScoreHandler }) => {
  return (
    <Wrap style={style}>
      {[...Array(MAX_SCORE)].map((v, index) => (
        <AiFillStar
          key={index}
          size={size}
          color={index + 1 <= score ? `${PRIMARY}` : `${LIGHT_GRAY}`}
          style={{ margin: '0 0.2rem' }}
          onClick={
            type === 'score'
              ? () => {
                  onScoreHandler(index + 1);
                }
              : null
          }
        ></AiFillStar>
      ))}
    </Wrap>
  );
};

Rating.propTypes = {
  type: PropTypes.oneOf(['score', 'view']),
  score: PropTypes.number,
  size: PropTypes.number,
  onScoreHandler: PropTypes.func,
};

Rating.defaultProps = {
  type: 'score',
  score: 0,
  size: 24,
};

export default Rating;
