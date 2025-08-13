import React from 'react';
import Header from '../Layouts/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const RootLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout;