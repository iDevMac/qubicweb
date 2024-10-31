import React from 'react'
import { Outlet } from 'react-router'
import TopBar from '../views/Layout/TopBar'
import TrendBar from '../views/Layout/TrendBar'
import Navbar from '../views/Layout/Navbar'
import NavBar from '../views/Layout/Navbar'

function GuestLayout() {
  return (
    <div className=''>
        <div className='h-50 border-b-2'>
          <TrendBar/>
            <TopBar/>
          <NavBar/>
        </div>

        <div className=''>
          <Outlet/>
        </div>
        
    </div>
  )
}

export default GuestLayout
