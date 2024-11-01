import React from 'react'
import { IoMenuOutline } from "react-icons/io5";
import { FaUserCircle, FaCaretDown, FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className='container mx-auto w-full flex justify-between items-center navbar'>
      <div className='navlink space-x-5 items-center w-70'>
        <a href="#" className='flex justify-center items-center'>Home <FaCaretDown/></a>
        <a href="#" className='flex justify-center items-center'>Home <FaCaretDown/></a>
        <a href="#" className='flex justify-center items-center'>Home <FaCaretDown/></a>
        <a href="#" className='flex justify-center items-center'>Home <FaCaretDown/></a>
        <a href="#" className='flex justify-center items-center'>Home <FaCaretDown/></a>
        <a href="#" className='flex justify-center items-center'>Home <FaCaretDown/></a>
      </div>
      <div className='leftbaricon'>
        <IoMenuOutline/>
      </div>

      <div className='w-30 flex space-x-3 justify-center items-center'>
        <div><FaSearch/> </div>
        <div className=''><FaUserCircle/></div>
        <div className='weather'>Weather</div>
      </div>
    </div>
  )
}

export default Navbar