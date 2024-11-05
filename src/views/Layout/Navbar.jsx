import React, { useEffect, useState } from 'react'
import { IoMenuOutline } from "react-icons/io5";
import { WiDegrees } from "react-icons/wi";
import { FaCloudRain } from "react-icons/fa6";
import { IoMdPartlySunny } from "react-icons/io";
import { FaUserCircle, FaCaretDown, FaSearch, FaMoon, FaSun } from "react-icons/fa";
import SideBar from './SideBar';
import axiosClient from '../../axios-client';

function Navbar() {
  const [error, setError] = useState(null)
  const [weatherData, setWeatherData] = useState(null)
  const options = {method : "GET", headers: {accept: "application/json"}}

  useEffect(() => {
    fetch(`https://api.tomorrow.io/v4/weather/forecast?location=Lagos&&apikey=${process.env.REACT_APP_WEATHER_SECRET_KEY}`, options)
    .then(response => response.json())
    .then(data => {
      setWeatherData(data)
      // console.log(data);
      
    })
    .catch(err => {
      setError(err)
      console.log(err);
      
    })
  }, [])

  const turnOnDay = () => {
    const rootBG = document.querySelector("#root")
    // rootBG.background.style = "white"
    rootBG.style.color = "black";
    rootBG.style.background = "white";
    console.log(rootBG);
    
  }

  const onOpen = () => {
    document.querySelector(".sidebar").style.display = "block"
    
  }

  return (
    <div className='container mx-auto w-full flex justify-between items-center navbar'>
      <div className='navlink space-x-5 items-center w-70'>
        <a href="#" className='flex justify-center items-center'>Home <FaCaretDown/></a>
        <a href="#" className='flex justify-center items-center'>Home <FaCaretDown/></a>
        <a href="#" className='flex justify-center items-center'>Home <FaCaretDown/></a>
        <a href="#" className='flex justify-center items-center'>Home <FaCaretDown/></a>
        <a href="#" className='flex justify-center items-center'>Home <FaCaretDown/></a>
        <a href="#" className='flex justify-center items-center'>Home <FaCaretDown/></a>
      </div>
      <div className='leftbaricon'>
        <IoMenuOutline onClick={onOpen}/>
      </div>
      <SideBar/>
      <div className='w-30 flex space-x-3 justify-center items-center'>
        <div className='flex justify-center items-center space-x-2'>
          {/* <FaSun onClick={turnOnDay}/>
          <FaMoon/> */}
        </div>
        <div><FaSearch/> </div>
        <div className=''><FaUserCircle/></div>
            {/* divider */}
            <div className='border-r-2 h-6 mx-3 border-gray-600'></div>
        <div className='flex justify-center items-center space-x-1'>
          <div>English</div>
          <FaCaretDown/>
        </div>
            {/* divider */}
            <div className='border-r-2 h-6 mx-3 border-gray-600'></div>
        <div className='weather'>
          {
            weatherData
            &&
            <div className='flex justify-center items-center'>
              <div className='text-3xl'>{weatherData?.timelines.daily[0].values.temperatureMax >= 20 ? <IoMdPartlySunny/> : <FaCloudRain/>}</div>
              <div className='ml-3'>
                <div className='flex justify-center'>{weatherData?.timelines.daily[0].values.temperatureMax}<WiDegrees className='celcius'/>C</div>
                <div className='text-sm text-gray-500'>{weatherData?.location?.name}</div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar