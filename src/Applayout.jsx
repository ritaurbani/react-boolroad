import React from 'react';
import AppHeader from './components/Appheader';
import { Outlet } from 'react-router-dom';

const Applayout = () => {
  return (
    <div>
        <AppHeader/>

        <Outlet/>

    </div>
  )
}

export default Applayout

