import React from 'react';

import Header from './components/Ui/Header/Header';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Add from './pages/Add';
import Detail from './pages/Detail';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import Search from './pages/Search';

import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const AppInner = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<Add />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        {['/search/:query', 'category/:category'].map((path) => (
          <Route key={path} path={path} element={<Search />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppInner;
