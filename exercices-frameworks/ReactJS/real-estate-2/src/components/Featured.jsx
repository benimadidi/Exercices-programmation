import React from 'react'
import Title from './Title'
import { featuredItems } from '../constants/data'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react'
import { motion } from 'motion/react'
import { fadeIn, staggerContainer } from '../motion/animation'

const Featured = () => {
  return (
    <section className='section'>
        <motion.div 
            variants={staggerContainer} 
            initial= 'hidden'
            whileInView='show'
            viewport={{once:true}}
            className='container'>
                {/* titre */}
                <Title title="Propriétés à la une" text="Découvrez notre sélection de propriétés à la une. Chaque annonce offre un aperçu des maisons et des investissements exceptionnels disponibles sur Estatein. Cliquez sur « Voir les détails » pour plus d'informations." link="Voir toutes les propriétés"/>
                {/* wrapper de la carte */}
                <motion.div variants={fadeIn}>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        autoplay ={{
                            delay: 2000
                        }}
                        spaceBetween={30}
                        navigation={{
                            nextEl: ".next-btn",
                            prevEl: ".prev-btn"
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 1.5
                            },
                            1200: {
                                slidesPerView: 2.5
                            }

                        }}
                        className="mt-10 lg:mt-16">
                            {featuredItems.map((item) => (
                                //carte
                                <SwiperSlide key={item.id} className='border border-gray-15 p-6 rounded-xl'>
                                {/* image  */}
                                <div>
                                        <img src={item.img} alt={item.title} width={354} height={255} className='w-full h-full object-cover' />
                                </div>

                                {/* contenu */}
                                <div className="mt-3.5">
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                        <div className="flex items-center flex-wrap gap-1.5  my-5
                                        ">
                                            {item.icons.map((item, index) => (
                                                //box
                                                <div key={index} className='ring ring-gray-15 rounded-[28px] flex gap-1.5 p-3 bg-gray-10'>
                                                    <span>
                                                        <img src={item.icon}  width={20} height={20} />
                                                    </span>
                                                    <p className='text-sm'>{item.label}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* prix et button */}
                                        <div className="flex justify-between items-center flex-wrap gap-6">
                                            <p className='grid gap-1 font-semibold'>Prix <span className='text-white'>{item.price} $</span></p>

                                            <button className='secondary-btn'>Voir toutes les propriétés</button>
                                        </div>
                                </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </motion.div>

                {/* buttons de navigation  */}
                <motion.div variants={fadeIn} className='flex items-center mt-10
                gap-5'>
                    <button className='prev-btn w-12 h-12 ring ring-gray-20 flex items-center justify-center rounded-full hover:bg-gray-10 transition active:bg-gray-15'>
                        <RiArrowLeftLine size={30}/>
                    </button>
                    <button className='next-btn w-12 h-12 ring ring-gray-20 flex items-center justify-center rounded-full hover:bg-gray-10 transition active:bg-gray-15 aspect-square'>
                        <RiArrowRightLine size={30}/>
                    </button>
                </motion.div>
        </motion.div>
    </section>
  )
}

export default Featured