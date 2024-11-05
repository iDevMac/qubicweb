import React from 'react'
import { MdChat } from "react-icons/md";

function ForumChat() {
  return (
    <div className='chat-forum'>
        <button className='absolute chat-btn shadow-lg'>
            <MdChat/>
        </button>

        <div className='chat-body'>

        </div>
    </div>
  )
}

export default ForumChat