import React from 'react';
import styled from 'styled-components';

import ProfileImg from './ProfileImg';
import OutLineButton from './Button/OutLineButton';

const Container = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
`;

const Left = styled.div`
  margin-right: 1rem;
`;

const Right = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
`;

const RightTop = styled.div`
  margin-bottom: 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RightTopInfo = styled.div`
  display: flex;
  margin-bottom: 0.625rem;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;

const StyledOutLineButton = styled(OutLineButton)`
  margin: 0.625rem 0rem;
  width: max-content;
`;

const TransactionDate = styled.p`
  color: #cccccc;
`;

const RightBottom = styled.div`
  margin: 1rem 0rem;
  white-space: pre-wrap;
  line-height: 1.5;
`;

const ReviewItem = ({
  src,
  userName,
  transactionDate,
  rating,
  productName,
  review,
}) => {
  return (
    <Container>
      <Left>
        <ProfileImg src={src} size={60}></ProfileImg>
      </Left>
      <Right>
        <RightTop>
          <RightTopInfo>
            <p>{userName}</p>
            <TransactionDate>{transactionDate}</TransactionDate>
          </RightTopInfo>
          {/* TODO : Rating 컴포넌트 완성 시 추가 */}
        </RightTop>
        <StyledOutLineButton>{productName}</StyledOutLineButton>
        <RightBottom>{review}</RightBottom>
      </Right>
    </Container>
  );
};

export default ReviewItem;
