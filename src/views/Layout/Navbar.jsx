import React from 'react'
import { FaUserCircle, FaCaretDown } from "react-icons/fa";

function NavBar() {
  return (
    <div className='container mx-auto w-full flex justify-between items-center min-h-20'>
      <div className='navlink flex space-x-5 items-center w-70'>
        <a href="#" className='flex justify-center items-center'>Home <FaCaretDown/></a>
      </div>
      <div className='w-30 flex justify-center align-center'>
        <div className=''><FaUserCircle/></div>
        <div>Weather</div>
      </div>
    </div>
  )
}

export default NavBar