import React from 'react'
import Header from './Standing/Header'
import Main from './Standing/Main'

function Standing() {
  return (
    <div className='col-span-2 flex flex-col gap-4'>
      <Header />
      <Main />
    </div>
  )
}

export default Standing