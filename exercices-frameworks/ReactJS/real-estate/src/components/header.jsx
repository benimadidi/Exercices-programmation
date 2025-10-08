import React from 'react'
import Navbar from './navbar.jsx'

const bgImage = {
    backgroundImage: "url('/header_img.png')"
}
const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center  w-full overflow-hidden' style={bgImage} id='Header'>
        <Navbar />
        <div className='container text-center mx-auto py-4 px-6 md:px20 lg:32 text-white'>
            <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explorez les maisons de vos rêves</h2>
            <div className='space-x-6 mt-16'>
                <a href="#Projects" className='border border-white px-8 py-3 rounded'>Projets</a>
                <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded'>Nous contacter</a>
            </div>
        </div>
    </div>
  )
}

export default Header