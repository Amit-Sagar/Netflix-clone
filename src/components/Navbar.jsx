import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-red-600 text-2xl font-bold cursor-pointer'>NETFLIX</h1>
        <div>
        <button className='text-white pr-4'>Sign In</button>
        <button className='bg-red-600 text-white rounded cursor-pointer txt-4xl px-3 py-1'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar