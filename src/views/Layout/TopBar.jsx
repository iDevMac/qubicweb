import React from 'react'
import toplogo from "../../assets/img/logo.png"
import topbanner from "../../assets/img/topbanner.png"

function TopBar() {
  return (
    <div className='container mx-auto w-full justify-between items-center topbar border'>
      <div className='flex justify-center align-center min-w-60 topbarlogo'>
        <img src={toplogo} alt="Logo" />
      </div>
      <div className='topbarbanner'>
        <img src={topbanner} alt="" className='w-full' />
      </div>
    </div>
  )
}

export default TopBar