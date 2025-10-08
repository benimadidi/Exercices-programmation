
import React from 'react'
import { assets } from '../assets/assets.js'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="" />
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Acceuil</a>
                <a href="#About" className='cursor-pointer hover:text-gray-400'>A propos</a>
                <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projets</a>
                <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Avis</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>S'inscrire</button>
            <img src={assets.menu_icon} className='md:hidden w-7' alt="" />
        </div>
        {/*--------------- Mobile Menu -----------------*/}
        <div>
            <ul>
                <a href=""></a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar