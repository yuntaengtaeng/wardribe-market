import React from 'react';

import LightGrayView from '../components/Ui/Layout/LightGrayView';
import CategoryList from '../components/Main/CategoryList';
import RecommendedProducts from '../components/Main/RecommendedProducts';

const Main = () => {
  return (
    <LightGrayView>
      <CategoryList />
      <RecommendedProducts />
    </LightGrayView>
  );
};

export default Main;
