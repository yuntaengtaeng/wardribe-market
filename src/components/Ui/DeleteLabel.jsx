import React from 'react';
import styled from 'styled-components';
import { VscChromeClose } from 'react-icons/vsc';

const Wrap = styled.span`
  display: flex;
  align-items: center;
`;

const Label = styled.span`
  margin-right: 0.4rem;
`;

const DeleteLabel = ({ label, onDeleteHandler, iconSize = 16 }) => {
  return (
    <Wrap>
      <Label>{label}</Label>
      <VscChromeClose size={iconSize} onClick={onDeleteHandler} />
    </Wrap>
  );
};

export default DeleteLabel;
