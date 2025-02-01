import React from 'react'
import AppHeader from './components/Appheader'

const Applayout = () => {
  return (
    <div>
        <AppHeader/>

        <Outlet/>

    </div>
  )
}

export default Applayout

