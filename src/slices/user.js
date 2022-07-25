import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nickName: '',
  accessToken: '',
  profileImgURL: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.nickname = action.payload.nickname;
      state.accessToken = action.payload.accessToken;
      state.profileImgURL = action.payload.profileImgURL;
    },
    initUser() {
      return {
        ...initialState,
      };
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
  },
});

export default userSlice;
