import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  font-size: ${(props) => props.size / 16 || '1'}rem;
  display: inline-flex;
  align-items: center;
`;

const StyledCheckBox = styled.input`
  margin-right: 0.5rem;
  width: ${(props) => props.size / 16 || '1'}rem;
  height: ${(props) => props.size / 16 || '1'}rem;
`;

const CheckBox = ({ handler, label, size, ...props }) => {
  return (
    <Label size={size}>
      <StyledCheckBox
        type="checkbox"
        value={label}
        size={size}
        {...props}
      ></StyledCheckBox>
      {label}
    </Label>
  );
};

export default CheckBox;
