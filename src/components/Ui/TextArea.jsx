import React from 'react';
import styled from 'styled-components';
import { BLACK, WHITE } from '../../constants/color';

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 0.25rem 0.75rem;
  color: ${BLACK};
  font-size: 0.875rem;
  background-color: ${WHITE};
  border: 1px solid #cccccc;
  border-radius: 0.25rem;
  box-sizing: border-box;
  outline: none;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #cccccc;
  }

  :-ms-input-placeholder {
    color: #cccccc;
  }
`;

const TextArea = ({ value, ...props }) => {
  return <StyledTextArea {...props}>{value}</StyledTextArea>;
};

export default TextArea;
