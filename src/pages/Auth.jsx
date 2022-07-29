import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import userSlice from '../slices/user';

import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { REST_API_KEY, REDIRECT_URI } from '../constants/oAuth';
import { objectToQueryString } from '../common';
import { PRIMARY } from '../constants/color';

import axios from 'axios';

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Guide = styled.h3`
  color: ${PRIMARY};
  font-weight: bold;
  font-size: 2rem;
`;

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const requestKakaoLogin = async () => {
      const code = searchParams.get('code');

      const obj = {
        grant_type: 'authorization_code',
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code: code,
        client_secret: process.env.REACT_APP_KAKAO_SECRET,
      };

      const query = objectToQueryString(obj);

      try {
        const {
          data: { access_token: accessToken },
        } = await axios.post('https://kauth.kakao.com/oauth/token', query);

        const {
          data: { refreshToken, ...rest },
        } = await axios.post(`/auth/kakao/login`, {
          accessToken,
        });

        localStorage.setItem('refreshToken', refreshToken);
        dispatch(userSlice.actions.setUser(rest));

        navigate('/');
      } catch (error) {}
    };

    requestKakaoLogin();
  }, [dispatch, navigate, searchParams]);

  return (
    <Wrap>
      <Guide>카카오 로그인 처리 중 입니다.</Guide>
    </Wrap>
  );
};

export default Auth;
