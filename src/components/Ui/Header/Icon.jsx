import React from 'react';
import styled from 'styled-components';
import { SECONDARY } from '../../../constants/color';

const IconWrap = styled.i`
  display: flex;
  align-items: center;

  > svg {
    fill: ${SECONDARY};
  }
`;

const Icon = () => {
  return (
    <IconWrap>
      <svg
        viewBox="0 0 100 100"
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M80,9H20V86h7v6H38V86H62v6H73V86h7ZM36,90H29V86h7Zm35,0H64V86h7Zm7-6H22V11H78ZM75,14H25V81H75ZM27,16H49V79H27ZM73,79H51V16H73ZM43.14,41.67a4.17,4.17,0,1,0,4.17,4.17A4.17,4.17,0,0,0,43.14,41.67Zm0,6.33a2.17,2.17,0,1,1,2.17-2.17A2.17,2.17,0,0,1,43.14,48Zm13.47,2a4.17,4.17,0,1,0-4.17-4.17A4.17,4.17,0,0,0,56.61,50Zm0-6.33a2.17,2.17,0,1,1-2.17,2.17A2.17,2.17,0,0,1,56.61,43.67Z" />
      </svg>
    </IconWrap>
  );
};

export default Icon;
