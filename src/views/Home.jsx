import React from 'react'
import NewsBar from './Layout/NewsBar'
import Featured from './news/Featured'
import CyberSecurity from './news/CyberSecurity'
import DevOps from './news/DevOps'
import BlockChain from './news/BlockChain'
import AI from './news/AI'
import Software from './news/Software'
import DataAnalysis from './news/DataAnalysis'
import Footer from './Layout/Footer'
import ChatForum from './chat/ChatForum'
import Trending from './news/Trending'
import Videos from './news/Videos'


function Home() {
  return (
    <div className='home'>
      <NewsBar/>
      <Featured/>
      <div className='container mx-auto news'>
        <div className='row'>
          <CyberSecurity/>
          <DevOps/>
          <BlockChain/>
          <AI/>
          <Software/>
          <DataAnalysis/>
        </div>
      </div>
      <Trending/>
      <Videos/>
      <ChatForum/>
      <Footer/>
    </div>
  )
}

export default Home
