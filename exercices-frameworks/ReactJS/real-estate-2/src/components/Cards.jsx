import React from 'react'
import { CardsItems } from '../constants/data'
import { RiArrowRightUpLine } from '@remixicon/react'
import { motion } from 'motion/react'
import { fadeInUp, staggerContainer } from '../motion/animation'

const Cards = () => {
  return (
    <section id='about'>
        <motion.div
            variants={staggerContainer} 
            initial= 'hidden'
            whileInView='show'
            viewport={{once:true}} 
            className="container grid gap-2.5 border-y border-gray-15 py-3 rounded-2xl lg:grid-cols-4 grid-cols-2 lg:mt-5">
                {CardsItems.map((item) => (
                    //Carte
                    <motion.div variants={fadeInUp} className='bg-gray-10 ring ring-gray-15 rounded-xl px-3.5 py-4' key={item.id}>
                        <span className='flex justify-self-end mb-1.5 hover:text-white transition cursor-pointer'>
                            <RiArrowRightUpLine size={24}/>
                        </span>
                        <div className='max-w-max mx-auto'>
                            <img src={item.icon} alt={item.label} width={48} height={48} />
                        </div>

                        <p className='text-white text-center font-semibold mt-3.5'>{item.label}</p>
                    </motion.div>
                ))}
        </motion.div>
    </section>
  )
}

export default Cards