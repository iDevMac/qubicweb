import React from 'react'
import { Outlet } from 'react-router'
import TopBar from '../views/Layout/TopBar'
import TrendBar from '../views/Layout/TrendBar'
import Navbar from '../views/Layout/Navbar'
import SideBar from '../views/Layout/SideBar'


function GuestLayout() {

  return (
    <div className='Guesttopwrapper'>
        <div className='drop-shadow-sm'>
          <TrendBar/>
          <TopBar/>
          <Navbar/>
        </div>
        <SideBar/>

        {/* The body content */}
        <Outlet/>
    </div>
  )
}

export default GuestLayout
