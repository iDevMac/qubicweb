import React from 'react'
import toplogo from "../../assets/img/logo.png"
import topbanner from "../../assets/img/topbanner.png"

function TopBar() {
  return (
    <div className='container mx-auto min-h-20 w-full flex justify-between items-center'>
      <div className='flex justify-center align-center min-w-70'>
        <img src={toplogo} alt="Logo" />
      </div>
      <div className='min-w-30'>
        <img src={topbanner} alt="" className='' />
      </div>
    </div>
  )
}

export default TopBar