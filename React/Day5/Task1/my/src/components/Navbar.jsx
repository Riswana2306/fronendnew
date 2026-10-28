import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <>
    <div className='bg-emerald-300 p-4 flex justify-between'>
      <div className='ml-4 bg-amber-50 p-1.5 rounded-2xl text-center'>
        Logo
      </div>
      <div className='flex gap-8 mr-10'>
        <Link className='ml-4 bg-amber-50 p-1.5 rounded-2xl text-center' to='/'>Home</Link>
        <Link className='ml-4 bg-amber-50 p-1.5 rounded-2xl text-center' to='/about'>About</Link>
         <Link className='ml-4 bg-amber-50 p-1.5 rounded-2xl text-center' to='/render'>Rendering</Link>

      </div>
    </div>
    
    </>
  )
}

export default Navbar
