import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import { PRIMARY, SECONDARY } from '../../constants/color';

const maxScore = 5;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;
`;

const Rating = ({ type, score, size, getScoreHandler, style }) => {
  const [currentScore, setCurrentScore] = useState(score);
  const star = [...Array(maxScore)].map((v, index) => (
    <AiFillStar
      key={index}
      size={size}
      color={index + 1 <= currentScore ? `${PRIMARY}` : `${SECONDARY}`}
      style={{ margin: '0 0.2rem' }}
      onClick={
        type === 'score'
          ? () => {
              setCurrentScore(index + 1);
            }
          : null
      }
    ></AiFillStar>
  ));

  useEffect(() => {
    getScoreHandler(currentScore);
  }, [currentScore, getScoreHandler]);

  return <Wrap style={style}>{star}</Wrap>;
};

Rating.propTypes = {
  type: PropTypes.oneOf(['score', 'view']),
  score: PropTypes.number,
  size: PropTypes.number,
  getScoreHandler: PropTypes.func,
};

Rating.defaultProps = {
  type: 'score',
  score: 0,
  size: 24,
};

export default Rating;
