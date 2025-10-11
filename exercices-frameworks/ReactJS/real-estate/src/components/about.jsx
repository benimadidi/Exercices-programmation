import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>À propos de <span className='underline underline-offset-4 font-light decoration-1'>Notre Marque</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Passionné par L'immobilier, Dédié à Votre Vision</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg' />
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600 '>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>10+</p>
                        <p>Années d'excellence</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>12+</p>
                        <p>Projets Terminés</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>20+</p>
                        <p>M m² Livré</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>25+</p>
                        <p>Projets en Cours</p>
                    </div>
                </div>
                <p className='my-10 max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ex et illum earum repellendus. Eaque sapiente eum odio expedita sit possimus, cum iusto ullam dicta, quam amet tempore illum quo.</p>
                <button className='bg-blue-600 text-white px-8 py-2 rounded'>En savoir plus</button>
            </div>
        </div>
    </div>
  )
}

export default About