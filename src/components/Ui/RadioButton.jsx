import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  font-size: ${(props) => props.size / 16 || '1'}rem;
  display: inline-flex;
  align-items: center;
`;

const Radio = styled.input`
  margin-right: 0.5rem;
  width: ${(props) => props.size / 16 || '1'}rem;
  height: ${(props) => props.size / 16 || '1'}rem;
`;

const RadioButton = ({ handler, groupName, label, size, ...props }) => {
  return (
    <Label size={size}>
      <Radio
        type="radio"
        name={groupName}
        value={label}
        onChange={handler}
        size={size}
        {...props}
      ></Radio>
      {label}
    </Label>
  );
};

export default RadioButton;
