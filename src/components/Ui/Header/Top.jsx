import React from 'react';
import styled from 'styled-components';
import { BLACK } from '../../../constants/color';
import ProfileImg from '../ProfileImg';

import { KAKAO_AUTH_URL } from '../../../constants/oAuth';

import { useSelector } from 'react-redux';

const CustomLineCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const Login = styled.a`
  color: ${BLACK};
  text-decoration: none;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Logout = styled.span`
  margin-left: 0.4rem;
  color: ${BLACK};
  font-weight: 300;
`;

const Top = () => {
  const { nickName, accessToken, profileImgURL } = useSelector(
    (state) => state.user
  );

  const isLoggiend = !!accessToken;

  return (
    <CustomLineCard>
      {isLoggiend ? (
        <>
          <ProfileInfo>
            <ProfileImg size={28} src={profileImgURL} />
            <div>{nickName}</div>
          </ProfileInfo>
          <Logout>로그아웃</Logout>
        </>
      ) : (
        <Login href={KAKAO_AUTH_URL}>카카오 로그인</Login>
      )}
    </CustomLineCard>
  );
};

export default Top;
