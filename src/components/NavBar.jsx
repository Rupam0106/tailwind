import React from 'react'

const NavBar = () => {
  return (
   <div className='flex justify-between items-center h-24 max-w-[1240] mx-auto px-24  text-white'>
    <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
    <ul className='flex'>
      <li className='p-4'>Home</li>
      <li className='p-4'>Company</li>
      <li className='p-4'>Resources</li>
      <li className='p-4'>About</li>
      <li className='p-4'>Contact</li>
    </ul>
   </div>
  )
}

export default NavBar