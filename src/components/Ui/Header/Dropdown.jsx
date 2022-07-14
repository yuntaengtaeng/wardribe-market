import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { LineCardContainer } from '../Card/LineCard';
import TabMenu from '../TabMenu';
import PopularSearch from './PopularSearch';
import LatestSearch from './LatestSearch';

const LineCard = styled(LineCardContainer)`
  position: absolute;
  top: 48px;
  left: 0px;
  width: 100%;
  background: rgb(255, 255, 255);
  z-index: 10;
  padding: 1rem;
`;

const Content = styled.div`
  height: 360px;
  overflow: hidden;
`;

const Dropdown = ({ latestList, setLatestList }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onChangeTabIndex = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  return (
    <LineCard>
      <TabMenu
        selectedIndex={selectedIndex}
        menu={['최근검색어', '인기검색어']}
        onMenuClickHandler={onChangeTabIndex}
      />
      <Content>
        {selectedIndex === 0 ? (
          <LatestSearch latestList={latestList} setLatestList={setLatestList} />
        ) : (
          <PopularSearch />
        )}
      </Content>
    </LineCard>
  );
};

export default Dropdown;
