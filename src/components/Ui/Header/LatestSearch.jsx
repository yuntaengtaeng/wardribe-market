import React, { useCallback } from 'react';

import { IoSearchCircleOutline } from 'react-icons/io5';

import styled from 'styled-components';

import DeleteLabel from '../DeleteLabel';

const GrdiView = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 10px;
  height: 100%;
`;

const EmptyView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Guide = styled.p`
  color: #888888;
`;

const LatestSearch = ({ latestList, setLatestList }) => {
  const onDeleteHandler = useCallback(
    (text) => {
      const latest = [...latestList];
      setLatestList(latest.filter((v) => v !== text));
    },
    [latestList, setLatestList]
  );

  return (
    <>
      {latestList.length ? (
        <GrdiView>
          {latestList.map((v, i) => (
            <DeleteLabel
              key={i}
              label={v}
              onDeleteHandler={onDeleteHandler.bind(this, v)}
            />
          ))}
        </GrdiView>
      ) : (
        <EmptyView>
          <IoSearchCircleOutline size={50} color="#888888" />
          <Guide>최근 검색어가 없습니다.</Guide>
        </EmptyView>
      )}
    </>
  );
};

export default LatestSearch;
