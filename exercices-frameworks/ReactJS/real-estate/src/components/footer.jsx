import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt="" />
                <p className='text-gray-400 mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor magni cupiditate voluptas quas et, commodi dicta atque, deserunt repudiandae suscipit aut?</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Entreprise</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#Header" className='hover:text-white'>Acceuil</a>
                    <a href="#About" className='hover:text-white'>À propos</a>
                    <a href="#Contact" className='hover:text-white'>Contactez-nous</a>
                    <a href="#" className='hover:text-white'>Politique de Confidentialité</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='text-white text-lg font-bold mb-4'>Abonnez-vous à notre lettre d’information</h3>
                <p className='text-gray-400 mb-4 max-w-80'>Les dernières nouvelles, articles et ressources, envoyés dans votre boîte de réception chaque semaine.</p>
                <div className='flex gap-2 '>
                    <input type="email" placeholder='Votre adresse email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />
                    <button className='py-2 px-4 rounded bg-blue-500 text-white'>S'abonner</button>
                </div>
            </div>
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
            Copyright {new Date().getFullYear()} &copy; Estate. Tous droits réservés.
        </div>
    </div>
  )
}

export default Footer