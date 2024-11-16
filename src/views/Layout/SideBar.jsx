import React from 'react'
import { IoMdClose } from "react-icons/io";
import { FaCaretDown, FaMoon, FaSun } from "react-icons/fa";

function SideBar() {

    const onClose = () => {
        document.querySelector(".sidelink").style.display = "none"
        document.querySelector(".sideicon").style.display = "none"
        document.querySelector(".sidebar").classList.add("sidebar-minimize")
    }

  return (
    <div className='sidebar z-8'>
        <div className='flex justify-end'>
            <IoMdClose onClick={onClose} className='text-2xl text-red-500 m-2 hover:opacity-8 '/>
        </div>
        <div className='w-30 sidelink'>
          <a href="#" className='flex justify-center items-center text-decoration-none'>Home <FaCaretDown/></a>
          <a href="#" className='flex justify-center items-center text-decoration-none'>Agregator <FaCaretDown/></a>
          <a href="#" className='flex justify-center items-center text-decoration-none'>Blog <FaCaretDown/></a>
        </div>
      <div className='sidedivider border-b-2 w-90 my-4'></div>
      <div className='w-30 flex space-x-3 justify-center items-center sideicon'>
        <div className='flex justify-center items-center space-x-2 text-gray-600'>
          <FaSun/>
          <FaMoon/>
        </div>
      </div>
    </div>
  )
}

export default SideBar