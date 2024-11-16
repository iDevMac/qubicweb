import React from 'react'
import { MdChat } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

function ChatForum() {

    const openChat = () => {
        const chatBtn = document.querySelector(".chat-btn")
        const chatFrame = document.querySelector(".chat-frame")
   
        if (chatFrame.style.display == "none") {
           chatFrame.style.display = "block"
           chatBtn.style.display = "none"
        }else{
           chatFrame.style.display = "none"
           chatBtn.style.display = "flex"
        }
     }
   
     const onMinimize = () => {
       const chatBody = document.querySelector(".chat-body")
       const chatFrame = document.querySelector(".chat-frame")
       const chatAction = document.querySelector(".chat-action")
       
       if (chatFrame.classList.contains("minimize")) {
        //  if (chatFrame.getBoundingClientRect().height >= "100px") {
            chatAction.style.display = "flex"
        //  }
         chatBody.classList.remove("minimize-body")
         chatFrame.classList.remove("minimize")
       }else{
         chatAction.style.display = "none"
         chatFrame.classList.add("minimize")
         chatBody.classList.add("minimize-body")
       }
     }

  return (
    <div className='chat-forum'>
        <div className='flex justify-center items-center text-2xl chat-btn'>
          <button onClick={openChat} className=''>
              <MdChat className='text-white'/>
          </button>

          <div className='notify-1'>
              1
          </div>
        </div>
        
        <div className='chat-frame'>
          <div className='card card-header'>
          <div className='notify-2'>
              1
          </div>
            <div className='flex justify-between items-center '>
              <div className='text-gray-500'>Discussion Forum</div>
              <div className='space-x-2'>
                <button onClick={onMinimize} className='text-gray-500 text-2xl'>-</button>
                <button onClick={openChat} className='text-red-600 text-xl'><IoCloseSharp/></button>
              </div>
            </div>
          </div>
          <div className='chat-card'>
            <div className='chat-body text-gray-700'>
                <div className='chat-items-1'>
                    <div className='chat-body-top mb-1 space-x-28'>
                        <div className='chat-profile space-x-1'>
                            <FaUserCircle className='text-xl'/>
                            <span className='text-gray-500'>Prince</span>
                        </div>
                        <div className='chat-time text-gray-500'>Time</div>
                    </div>
                    <div className='chat-text'>
                    It is a long established fact that a reader.
                    </div>
                </div>
                <div className='chat-items-2'>
                    <div className='chat-body-top mb-1 space-x-28'>
                        <div className='chat-profile space-x-1'>
                            <FaUserCircle className='text-xl'/>
                            <span className='text-gray-300'>You</span>
                        </div>
                        <div className='chat-time text-gray-300'>Time</div>
                    </div>
                    <div className='chat-text'>
                        It is a long established fact that a reader.
                    </div>
                </div>
            </div>
            <div className='chat-action'>
                <input type="text" />
                <button><IoIosSend/></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ChatForum