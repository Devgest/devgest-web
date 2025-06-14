import React from 'react'

function NavBar() {
  return (
    <div className='flex items-center fixed bg-white/70  w-[80%] place-content-between shadow-2xl/10 rounded-full px-2 py-4 top-4 backdrop-blur-[1.5px] border border-white/30'>
        <div className='flex items-center ml-5'>
            <img src="/logo.svg" alt="logo" className='h-10 p-0.5 align-middle'/>
            <div className='font-bold'>
            DevGest
            </div>
        </div>
        <button className='bg-white text-black rounded-full border-gray-300 shadow-md border px-7 py-2 w-max text-[16px] hover:bg-gray-200'>
            Sign Up
        </button>
    </div>
  )
}

export default NavBar