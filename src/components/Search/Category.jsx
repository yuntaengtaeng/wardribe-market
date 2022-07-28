import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import Button, { BUTTON_THEME } from '../Ui/Button/Button';
import OutLineButton from '../Ui/Button/OutLineButton';

import axios from 'axios';

const CategoryName = styled.h2`
  font-size: 1.5rem;
  margin-top: 3.5rem;
  margin-bottom: 1.5rem;
`;

const MiddleCategoryContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  > * {
    margin-right: 0.6rem;
  }
`;

const Category = ({
  id,
  onSelectMiddleCategoryHandler,
  selectedMiddleCategoryId,
}) => {
  console.log(selectedMiddleCategoryId);

  const [categoryData, setCategoryData] = useState([]);
  const [middleCategoryData, setMiddleCategoryData] = useState([]);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    if (categoryData.length) {
      const { name } = categoryData.find(
        ({ id: categoryId }) => id === categoryId
      );
      setCategoryName(name);
    }
  }, [id, categoryData]);

  useEffect(() => {
    const requestCategory = async () => {
      try {
        const {
          data: { mainCategroyList },
        } = await axios.get('/category/main');

        setCategoryData(mainCategroyList);
      } catch (error) {
        alert('카테고리를 불러오지 못 했습니다.');
      }
    };

    requestCategory();
  }, []);

  useEffect(() => {
    const requestMiddleCategory = async () => {
      try {
        const {
          data: { middleCategoryList },
        } = await axios.get(`/category/middle?id=${id}`);
        setMiddleCategoryData(middleCategoryList);
      } catch (error) {
        alert('카테고리를 불러오지 못 했습니다.');
      }
    };

    if (!!id) {
      requestMiddleCategory();
    }
  }, [id]);

  const onClickHandler = useCallback(
    (id, name) => {
      onSelectMiddleCategoryHandler({
        ...(selectedMiddleCategoryId !== id && {
          id,
          name,
        }),
      });
    },
    [onSelectMiddleCategoryHandler, selectedMiddleCategoryId]
  );

  return (
    <div>
      <CategoryName>{categoryName}</CategoryName>
      <MiddleCategoryContainer>
        {middleCategoryData.map(({ id, name }) => {
          const props = {
            key: id,
            onClick: onClickHandler.bind(this, id, name),
          };

          const button =
            id === selectedMiddleCategoryId ? (
              <Button {...props} theme={BUTTON_THEME.SECONDARY}>
                {name}
              </Button>
            ) : (
              <OutLineButton {...props}>{name}</OutLineButton>
            );

          return button;
        })}
      </MiddleCategoryContainer>
    </div>
  );
};

export default Category;
