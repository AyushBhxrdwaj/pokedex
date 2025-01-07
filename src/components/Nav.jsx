import React from 'react'

const nav = () => {
  return (
    <div className='h-28 w-full bg-red-600 flex p-5 gap-10 justify-between items-center'>
        <img src="src\assets\poke.png" alt="pokemon logo"  className='h-14'/>
        <h1 className='text-xl text-white font-bold mr-5'>Let's find PokeMon</h1>
    </div>
  )
}

export default nav