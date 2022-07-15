import React from 'react';

import Header from './components/Ui/Header/Header';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Add from './pages/Add';
import Detail from './pages/Detail';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import Search from './pages/Search';

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
          <Route path={path} element={<Search />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppInner;
