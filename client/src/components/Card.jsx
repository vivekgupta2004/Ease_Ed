import React from 'react'

const Card = () => {
  return (
    <div className=' relative h-[70vh] w-1/3 rounded-lg border overflow-hidden'>
        <img src="/a-little-astronaut.png" alt="" className='h-full' />
        <h1 className='absolute bottom-28 left-8 text-3xl text-black'>Little Astro</h1>
        <p className='absolute bottom-12 text-sm left-8 text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque consequuntur dolores expedita,Lorem ipsum dolor sit amet consectetur, </p>
    </div>
  )
}

export default Card