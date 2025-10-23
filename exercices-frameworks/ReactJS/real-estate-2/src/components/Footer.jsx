import { RiMailLine, RiSendPlaneFill } from '@remixicon/react'
import React from 'react'
import { footerItems, socialIcons } from '../constants/data'
import { motion } from 'motion/react'
import { fadeIn, fadeInUp, staggerContainer } from '../motion/animation'

const Footer = () => {
  return (
    <footer className='pt-20'>
        <motion.div 
            variants={staggerContainer} 
            initial= 'hidden'
            whileInView='show'
            viewport={{once:true}} 
            className="container grid gap-8 lg:gap-24">
                {/* footer top */}
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-[1.5fr_0.7fr_0.7fr_0.7fr] lg:grid-cols-[1.5fr_0.7fr_0.7fr_0.7fr_0.5fr_0.7fr] lg:gap-12">
                    {/* footer marque */}
                    <motion.div variants={fadeInUp}>
                        {/* logo */}
                        <div>
                            <img src="/images/logo.png" alt="" width={114} height={34} />
                        </div>

                        {/* input */}
                        <div className="flex items-center gap-1.5 max-w-[305px] w-full relative mt-6">
                            <span className='absolute top-1/2 left-4 -translate-y-1/2'> 
                                <RiMailLine />
                            </span>
                            <input type="email" placeholder='Saisissez votre Email' className='w-full h-full p-5 outline-none border border-gray-15 rounded-lg focus:border-purple-700 indent-8' />

                            <button className="absolute top-1/2 right-4 -translate-y-1/2 hover:text-purple-600 transition">
                                <RiSendPlaneFill />
                            </button>
                        </div>
                    </motion.div>

                    {/* footer liste */}
                    {footerItems.map((item) => (
                        <motion.div variants={fadeInUp} key={item.id} >
                            <p className='font-semibold text-white mb-2'>{item.title}</p>
                            <ul className='space-y-1.5'>
                                {item.links.map((link, index) => (
                                    <li key={index}>
                                        <a href="#" className='hover:underline hover:text-white transition'>{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* footer bottom */}
                <div className='flex flex-wrap justify-between items-center pt-6 border-t border-gray-20 pb-12'>
                    <div>
                        <motion.p variants={fadeInUp}>&copy; {new Date().getFullYear()} Estatein. Tous droits réservés</motion.p>
                        <motion.a variants={fadeInUp} href="#" className='hover:underline hover:text-white transition'>Termes et conditions</motion.a>
                    </div>

                    <motion.div variants={fadeIn} className='flex items-center gap-2 flex-wrap'>
                        {socialIcons.map((item, index) => (
                            <a href="#"  key={index} className='w-12 h-12 bg-gray-10 flex items-center justify-center rounded-full hover:bg-gray-20 transition'>
                                {<item.icon />}
                            </a>
                        ))}
                    </motion.div>
                </div>
        </motion.div>
    </footer>
  )
}

export default Footer