import React from 'react'
import { Outlet } from 'react-router'
import TopBar from '../views/Layout/TopBar'
import TrendBar from '../views/Layout/TrendBar'
import Navbar from '../views/Layout/Navbar'
import { MdChat } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { FaWindowMinimize, Faclose } from "react-icons/fa";
import SideBar from '../views/Layout/SideBar'


function GuestLayout() {

  const openChat = () => {
     const chatBtn = document.querySelector(".chat-btn")
     const chatBody = document.querySelector(".chat-body")

     if (chatBody.style.display == "none") {
        chatBody.style.display = "block"
        chatBtn.style.display = "none"
     }else{
        chatBody.style.display = "none"
        chatBtn.style.display = "flex"
     }
  }

  const onMinimize = () => {
    const chatBody = document.querySelector(".chat-body")
    if (chatBody.classList.contains("minimize")) {
      chatBody.classList.remove("minimize")
    }else{
      chatBody.classList.add("minimize")
    }
  }

  return (
    <div className='Guesttopwrapper'>
        <div className='drop-shadow-sm'>
          <TrendBar/>
          <TopBar/>
          <Navbar/>
        </div>

          <Outlet/>
            <div className='chat-forum'>
                <button onClick={openChat} className='flex justify-center items-center chat-btn text-2xl'>
                    <MdChat/>
                </button>

                <div className='chat-body'>
                  <div className='card card-header'>
                    <div className='flex justify-between items-center '>
                      <div className='text-gray-500'>Discussion Forum</div>
                      <div className='space-x-2'>
                        <button onClick={onMinimize} className='text-gray-500 text-2xl'>-</button>
                        <button onClick={openChat} className='text-red-600 text-xl'><IoCloseSharp/></button>
                      </div>
                    </div>
                  </div>
                  <div className=''>

                  </div>
                </div>
            </div>
    </div>
  )
}

export default GuestLayout
