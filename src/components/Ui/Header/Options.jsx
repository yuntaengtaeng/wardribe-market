import React from 'react';
import styled from 'styled-components';

import { SECONDARY } from '../../../constants/color';

import {
  IoArrowRedoSharp,
  IoChatboxEllipsesSharp,
  IoPerson,
} from 'react-icons/io5';

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
`;

const LineOption = styled(Option)`
  position: relative;
  margin-right: 30px;

  &:after {
    content: '';
    width: 1px;
    height: 10px;
    border-right: 1px solid rgb(204, 204, 204);
    position: absolute;
    top: 8px;
    right: -15px;
  }
`;

const Options = () => {
  return (
    <Wrap>
      <LineOption>
        <IoArrowRedoSharp size={24} color={SECONDARY}></IoArrowRedoSharp>
        판매하기
      </LineOption>
      <LineOption>
        <IoPerson size={24} color={SECONDARY}></IoPerson>내 상점
      </LineOption>
      <Option>
        <IoChatboxEllipsesSharp
          size={24}
          color={SECONDARY}
        ></IoChatboxEllipsesSharp>
        장롱톡
      </Option>
    </Wrap>
  );
};

export default Options;
