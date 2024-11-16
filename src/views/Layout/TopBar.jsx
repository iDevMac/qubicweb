import React from 'react'
import toplogo1 from "../../assets/img/logo/logo1.png"
import toplogo2 from "../../assets/img/logo/logo2.png"
import topbanner from "../../assets/img/topbanner.png"

function TopBar() {
  return (
    <div className='container mx-auto w-full justify-between items-center topbar'>
      <div className='flex justify-center align-center topbarlogo'>
        <img src={toplogo1} alt="Logo" />
        <img src={toplogo2} alt="Logo" hidden />
      </div>
      <div className='topbarbanner'>
        <img src={topbanner} alt="" className='w-full' />
      </div>
    </div>
  )
}

export default TopBar