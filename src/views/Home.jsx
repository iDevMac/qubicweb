import React from 'react'
import NewsBar from './Layout/NewsBar'
import Featured from './news/Featured'


function Home() {
  return (
    <div className='home'>
      <NewsBar/>
      <Featured/>
    </div>
  )
}

export default Home
