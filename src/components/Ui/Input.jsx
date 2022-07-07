import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BLACK, WHITE } from '../../constants/color';

const StyledInput = styled.input`
  display: inline-block;
  width: 100%;
  padding: 0.25rem 0.75rem;
  color: ${BLACK};
  font-size: 0.875rem;
  background-color: ${WHITE};
  border: 1px solid #cccccc;
  border-radius: 0.25rem;
  box-sizing: border-box;
  outline: none;
  height: 2rem;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #cccccc;
  }

  :-ms-input-placeholder {
    color: #cccccc;
  }
`;

const Input = ({ ...props }) => {
  return <StyledInput {...props}></StyledInput>;
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password', 'tel', 'number']),
};

export default Input;
