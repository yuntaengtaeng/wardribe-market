import React from 'react';

import { Wrap } from '../Block';
import styled from 'styled-components';

import Top from './Top';
import Title from './Title';
import Search from './Search';
import Options from './Options';

import useLocalStorage from '../../../hooks/useLocalStorage';

const CustomBlock = styled(Wrap)`
  display: flex;
  flex-direction: column;
  align-items: initial;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 1rem;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  const [latestList, setLatestList] = useLocalStorage('latest', []);

  return (
    <CustomBlock>
      <Top />
      <Title />
      <Bottom>
        <Search latestList={latestList} setLatestList={setLatestList} />
        <Options />
      </Bottom>
    </CustomBlock>
  );
};

export default Header;
