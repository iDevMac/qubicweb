import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

function TrendBar() {
  return (
    <div className='border-b-2 border-dotted border-b-gray-700'>
        <div className='container mx-auto flex justify-between'>
            <div className='trendbar-left flex justify-between'>
                <div className='trending px-3 py-2 text-center'>
                    Trending
                </div>
                <div className=''>
                    
                </div>
            </div>
            <div className='trendbar-right flex justify-center items-center'>
                <div className='mr-2'>Thur, Oct 31, 2024</div>
                    <hr/>
                <div className='flex justify-between pr-2'>
                    <FaFacebook />
                    <FaTwitter />
                    <FaYoutube />
                    <FaInstagram />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrendBar