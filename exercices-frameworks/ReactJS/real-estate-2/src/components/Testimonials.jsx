import React from 'react'
import Title from './Title'
import { testimonialsItems } from '../constants/data'
import { RiArrowLeftLine, RiArrowRightLine, RiStarFill } from '@remixicon/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

const Testimonials = () => {
  return (
    <section className='section'>
        <div className="container">
            {/* titre */}
            <Title title='Témoignages de nos clients' text='Découvrez les témoignages de réussite et les témoignages sincères de nos clients. Découvrez pourquoi ils ont choisi Estatein pour leurs besoins immobiliers. ' />

            {/* wrapper de la carte */}
            <Swiper 
                modules={[Navigation, Autoplay]}
                loop= {true}
                spaceBetween={30}
                navigation= {{
                    nextEl: ".next-btn",
                    prevEl: ".prev-btn"
                }}
                className='mt-10 lg:mt-4'>
                    {testimonialsItems.map((item) => (
                        //carte
                        <SwiperSlide key={item.id} className='border border-gray-15 p-6 rounded-lg lg:p-10
                        '>
                            {/* etoiles */}
                            <div className='flex gap-1.5 items-center text-amber-500'>
                                <RiStarFill className='ring ring-gray-15 rounded-full' size={24} />
                                <RiStarFill className='ring ring-gray-15 rounded-full' size={24} />
                                <RiStarFill className='ring ring-gray-15 rounded-full' size={24} />
                                <RiStarFill className='ring ring-gray-15 rounded-full' size={24} />
                                <RiStarFill className='ring ring-gray-15 rounded-full' size={24} />
                            </div>

                            {/* contenu de la carte */}
                            <div className='my-4'>
                                <h4>{item.title}</h4>
                                <p className='text-base'>{item.text}</p>
                            </div>

                            {/* info de l'auteur */}
                            <div >
                                <p className='font-semibold text-white'>{item.name}</p>
                                <p>{item.residential}</p>
                            </div>
                        </SwiperSlide>

                    ))}
            </Swiper>

                        {/* buttons de navigation  */}
            <div className='flex items-center mt-10
             gap-5'>
                <button className='prev-btn w-12 h-12 ring ring-gray-20 flex items-center justify-center rounded-full hover:bg-gray-10 transition active:bg-gray-15'>
                    <RiArrowLeftLine size={30}/>
                </button>
                <button className='next-btn w-12 h-12 ring ring-gray-20 flex items-center justify-center rounded-full hover:bg-gray-10 transition active:bg-gray-15 aspect-square'>
                    <RiArrowRightLine size={30}/>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials