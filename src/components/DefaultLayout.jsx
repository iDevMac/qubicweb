import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useStateContext } from '../context/ContextProvider'
import TrendBar from '../views/Layout/TrendBar'
import TopBar from '../views/Layout/TopBar'

function DefaultLayout() {
    const {token} = useStateContext()

    if (!token) {
        return <Navigate to="/signin"/>
    }

  return (
    <div class="">
        <TrendBar/>
        <TopBar/>
        <Outlet/>
    </div>
  )
}

export default DefaultLayout
