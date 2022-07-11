import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.span`
  font-size: ${(props) => props.size / 16 || '1'}rem;
`;

const TextLength = ({ maxLength, textLength, size }) => {
  return (
    <Label size={size}>
      {textLength > maxLength ? maxLength : textLength}/{maxLength}
    </Label>
  );
};

TextLength.propTypes = {
  maxLength: PropTypes.number.isRequired,
  textLength: PropTypes.number.isRequired,
};

export default TextLength;
