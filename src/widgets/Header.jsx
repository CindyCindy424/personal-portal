import React from 'react'
import cindy from '../assets/cindy.png'

function Header() {
  return (
    <header className='flex justify-between items-center h-20'>
        {/* logo for website */}
        {/* todo: use iphone charactor as logo */}
        <img src={cindy} alt="" className='w-[8vw] mt-[10vh]' /> 
        <nav className='flex items-center'>
            <a href="#">登陆</a>
            <a href="#" className='ml-8 bg-gray-900 px-4 py-2 rounded text-blue-50 flex items-center'>
                注册
            </a>
        </nav>
    </header>
  )
}

export default Header