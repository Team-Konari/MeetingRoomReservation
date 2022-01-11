import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/accounts/Login';
import Signup from 'pages/accounts/Signup';

const Root = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/accounts/login" element={<Login />} />
      <Route path="/accounts/signup" element={<Signup />} />
    </Routes>
  );
};

export default Root;
