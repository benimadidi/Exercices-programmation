import React from 'react'
import { heroStats } from '../constants/data'
import { RiArrowRightUpLongLine } from '@remixicon/react'


const Hero = () => {
  return (
    <section className='max-lg:py-20'>
        <div className='container grid gap-14 lg:grid-cols-2'>
            {/* Contenu */}
            <div className="flex flex-col justify-center md:py-12">
                <h1 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Découvrez la propriété de vos rêves avec Estatein</h1>
                <p className='max-w-[640px] my-[16px_32px]'>
                    Votre quête de la propriété idéale commence ici. Explorez nos annonces pour trouver la maison qui correspond à vos rêves.
                </p>

                {/* wrapper du button */}
                <div className="flex gap-3.5 flex-wrap">
                    <button className="primary-btn">En savoir plus</button>
                    <button className="secondary-btn">Parcourir les propriétés</button>
                </div>

                {/* statistiques wrapper */}
                <div className="grid gap-3 mt-10 lg:mt-12 grid-cols-2 sm:grid-cols-3">
                    {heroStats.map((item) => (
                        //Carte
                        <div key={item.id} className={`border border-gray-15 bg-gray-10 px-5 py-3.5 rounded-xl text-center lg:text-left ${item.id === 3 ? 'max-sm:col-span-2' : ''}`}>
                            <h3 className="text-white font-semibold text-3xl"> 
                                {item.value}
                                {item.id === 2 ? 'k' : ''}
                            </h3>
                            <p>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* banniere */}
            <figure className='relative'>
                <img src="/images/hero-banner.png" alt="" width={690} height={622} className='w-full h-full object-cover'/>

                {/* texte animé */}
                <div className="absolute max-lg:-bottom-16 max-lg:left-1/2 max-lg:-translate-x-1/2 lg:top-10 lg:-left-16 bg-gray-08 rounded-full p-2.5 aspect-square ring ring-gray-15">
                    <div className='relative'>
                        <img src="images/text-shape.svg" alt="" width={106} height={106} className='text-shape' />

                        <button className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-10 w-14 h-14 flex items-center justify-center ring ring-gray-15 rounded-full hover:text-white transition'>
                            <RiArrowRightUpLongLine size={24}/>
                        </button>
                    </div>
                </div>
            </figure>
        </div>
    </section>
  )
}

export default Hero