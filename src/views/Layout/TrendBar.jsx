import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

function TrendBar() {
  return (
    <div className='trendbar border-b-2 border-dotted border-b-gray-700'>
        <div className='container mx-auto flex justify-between'>
            <div className='trendbar-left flex justify-between'>
                <div className='trending px-3 py-2 text-center'>
                    Trending
                </div>
                <div className=''>
                    
                </div>
            </div>
            <div className='trendbar-right flex justify-center items-center'>
                <div className=''>Thur. Oct 31, 2024</div>
                    {/* divider */}
                <div className='border-r-2 h-6 mx-3 border-gray-600'></div>

                <div className='flex space-x-2 justify-between pr-2'>
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