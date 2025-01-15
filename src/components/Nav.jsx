import React from 'react'
import logo from '../assets/poke.png'
const nav = () => {
  return (
    <div className='h-28 w-full bg-red-600 flex p-5 gap-10 justify-between items-center'>
        <img src={logo} alt="pokemon logo"  className='h-14'/>
        <h1 className='text-xl text-white font-bold mr-5'>Let's find PokeMon</h1>
    </div>
  )
}

export default nav