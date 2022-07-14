import React, { useState } from 'react';

import styled from 'styled-components';

import PointLabel from '../PointLabel';

const Wrap = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 10px;
`;

const PopularSearch = () => {
  //TODO : API 요청을 통해 인기검색어 받아오기
  const [list, setList] = useState([]);

  return (
    <Wrap>
      {list.map((v, i) => (
        <PointLabel point={i + 1} label={v} key={i} />
      ))}
    </Wrap>
  );
};

export default PopularSearch;
