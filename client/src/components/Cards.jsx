import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full flex flex-col gap-10 items-center justify-center mt-5 md:flex-row '>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default Cards