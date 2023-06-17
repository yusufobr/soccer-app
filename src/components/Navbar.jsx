import React from 'react'
import logo from '../assets/image.png'

function Navbar() {
  return (
    <div className='container rounded-xl mt-4 mx-auto px-3 h-12 flex items-center bg-blue-600 drop-shadow-md'>
      <img width={130} src={logo} alt="sofascore" />
    </div>
  )
}

export default Navbar