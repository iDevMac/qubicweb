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
            <input type="text" placeholder='News Letter' />
            <button>Send</button>
          </div> 

        </div>

        <div className='border-t-2 border-dotted'></div>

        <div className='row justify-center items-center middle my-3'>
            <div className='col-md-7 border-r-2 border-dotted border-gray-400 '>
                <div className='row justify-between middle-left'>
                    <div className='col-md-5 border-r-2 border-dotted border-gray-400'> 
                        <div className='row '>
                          <div className='col-md-5 space-y-3'>
                            <div><Link>sfjbdbkf</Link></div>
                            <div><Link>sfjbdbkf</Link></div>
                            <div><Link>sfjbdbkf</Link></div>
                            <div><Link>sfjbdbkf</Link></div>
                          </div>

                          <div className='col-md-5 space-y-3'>
                            <div><Link>sfjbdbkf</Link></div>
                            <div><Link>sfjbdbkf</Link></div>
                            <div><Link>sfjbdbkf</Link></div>
                            <div><Link>sfjbdbkf</Link></div>
                          </div>
                        </div>
                    </div>

                    <div className='col-md-5'>
                        <div className='row'>
                          <div className='col-md-5 space-y-3'>
                            <div><Link>sfjbdbkf</Link></div>
                            <div><Link>sfjbdbkf</Link></div>
                            <div><Link>sfjbdbkf</Link></div>
                            <div><Link>sfjbdbkf</Link></div>
                          </div>

                          <div className='col-md-5 space-y-3'>
                            <div><Link>sfjbdbkf</Link></div>
                            <div><Link>sfjbdbkf</Link></div>
                            <div><Link>sfjbdbkf</Link></div>
                            <div><Link>sfjbdbkf</Link></div>
                          </div>
                        </div>
                    </div>
                 </div>
            </div>
            {/* <div className='col-sm-1 '></div> */}
            <div className='col-md-4 middle-right'>
              <h5>Suggest News</h5>
              <div className='flex justify-center items-center suggest'>
                <input type="text" />
                <button>Suggest</button>
              </div>
            </div>
        </div>
      </div>
      <div className='h-[50px] flex justify-between items-center bottom px-5 text-gray-400'>
          <div className=''>© Copyright 2020, All Rights Reserved</div>
          <div></div>
      </div>
    </div>
  )
}

export default Footer