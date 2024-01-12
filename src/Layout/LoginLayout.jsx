import React from 'react';
import Navigationbar from '../NavigationBar/Navigationbar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
  return (
    <div>
      <Navigationbar></Navigationbar>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;