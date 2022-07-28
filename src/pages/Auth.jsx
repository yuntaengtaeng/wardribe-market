import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PRIMARY } from '../constants/color';
import { useSearchParams } from 'react-router-dom';

import { REST_API_KEY, REDIRECT_URI } from '../constants/oAuth';
import { objectToQueryString } from '../common';

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
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    const requestKakaoLogin = async () => {
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

        //TODO : API 요청 후 서버에서 준 리스폰스 값을 redux에 user에 넣어야함
      } catch (error) {
        alert('카카오 로그인 실패 다시 시도해주세요.');
      }
    };
  }, [code]);

  return (
    <Wrap>
      <Guide>카카오 로그인 처리 중 입니다.</Guide>
    </Wrap>
  );
};

export default Auth;
