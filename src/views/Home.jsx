import React from 'react'
import NewsBar from './Layout/NewsBar'
import Featured from './news/Featured'
import ForumChat from './chat/ForumChat'


function Home() {
  return (
    <div className='home'>
      <NewsBar/>
      <Featured/>
    </div>
  )
}

export default Home
