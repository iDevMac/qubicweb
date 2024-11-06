import React from 'react'
import { IoMdClose } from "react-icons/io";
import { FaCaretDown, FaMoon, FaSun } from "react-icons/fa";

function SideBar() {

    const onClose = () => {
        document.querySelector(".sidebar").style.display = "none"
    }

  return (
    <div className='sidebar z-8'>
        <div className='flex justify-end'>
            <IoMdClose onClick={onClose} className='text-2xl text-red-500 m-4 hover:opacity-8 '/>
        </div>
        <div className='w-30'>
            <a href="#" className='flex justify-center items-center'>Home <FaCaretDown/></a>
            <a href="#" className='flex justify-center items-center'>Home <FaCaretDown/></a>
            <a href="#" className='flex justify-center items-center'>Home <FaCaretDown/></a>
            <a href="#" className='flex justify-center items-center'>Home <FaCaretDown/></a>
            <a href="#" className='flex justify-center items-center'>Home <FaCaretDown/></a>
            <a href="#" className='flex justify-center items-center'>Home <FaCaretDown/></a>
        </div>

      <div className='w-30 flex space-x-3 justify-center items-center'>
        <div className='flex justify-center items-center space-x-2'>
          <FaSun/>
          <FaMoon/>
        </div>
      </div>
    </div>
  )
}

export default SideBar