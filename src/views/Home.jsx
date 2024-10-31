import React from 'react'

function Home() {
  return (
    <div className='bg-white'>
      <div class="grid grid-cols-4 gap-4">
        <div>01</div>

        <div>05</div>
        <div class="grid grid-cols-subgrid gap-4 col-span-3">
            <div class="col-start-2">06</div>
        </div>
        </div>
    </div>
  )
}

export default Home
