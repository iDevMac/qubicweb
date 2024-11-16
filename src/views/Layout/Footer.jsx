import React from 'react'
import { Link } from 'react-router-dom'
import toplogo2 from "../../assets/img/logo/logo2.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
      <div className='container mx-auto'>
            <div className='flex justify-between items-center top'>
              <div className='top-left'>
                <img src={toplogo2} alt="" />
                <div className='flex justify-center items-center space-x-3 social'>
                  <FaFacebook/>
                  <FaTwitter/>
                  <FaInstagram/>
                  <FaLinkedin/>
                </div>
              </div>
              <div className='flex justify-center items-center top-right'>
                <input type="text" />
                <button>Send</button>
              </div>
            </div>

            <div className='border-t-2 border-dotted'></div>

            <div className='row justify-center items-center middle'>
                <div className='col-md-8'>
                    <div className='row'>
                        <div className='col-md-5'>
                            <Link>sfjbdbkf</Link>
                            <Link>sfjbdbkf</Link>

                            <Link>sfjbdbkf</Link>
                            <Link>sfjbdbkf</Link>
                        </div>
                        <div className='col-md-1 border-r-3 '></div>
                        <div className='col-md-5'>
                            fskfbkd
                            sfjbdbkf
                            
                            dfjbidf
                            dkfbd
                        </div>
                    </div>
                    
                    <div>

                    </div>
                </div>
                {/* <div className='border-r-2 border-dotted'></div> */}
                <div className='col-md-4'>

                </div>
            </div>
            <div className='h-[50px] flex justify-between items-center bottom'>
                <div className=''>© Copyright 2020, All Rights Reserved</div>
                <div></div>
            </div>
      </div>
    </div>
  )
}

export default Footer