import React from 'react'
import { Outlet } from 'react-router'
import TopBar from '../views/Layout/TopBar'
import TrendBar from '../views/Layout/TrendBar'
import Navbar from '../views/Layout/Navbar'


function GuestLayout() {
  return (
    <div className='Guesttopwrapper'>
        <div className='h-30 drop-shadow-sm'>
          <TrendBar/>
            <TopBar/>
          <Navbar/>
        </div>

          <Outlet/>
        
    </div>
  )
}

export default GuestLayout
