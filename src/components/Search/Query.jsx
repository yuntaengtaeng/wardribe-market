import React from 'react';
import PointLabel from '../Ui/PointLabel';

const Query = ({ query }) => {
  return (
    <div>
      <PointLabel point={query} label="의 검색결과" size={1.3} />
    </div>
  );
};

export default Query;
