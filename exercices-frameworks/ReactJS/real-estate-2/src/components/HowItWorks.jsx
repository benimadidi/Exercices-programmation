import React from 'react'
import Title from './Title'
import { howItWorksItems } from '../constants/data'
import { motion } from 'motion/react'
import { fadeInUp, staggerContainer } from '../motion/animation'

const HowItWorks = () => {
  return (
    <section className='section'>
        <motion.div 
            variants={staggerContainer} 
            initial= 'hidden'
            whileInView='show'
            viewport={{once:true}}
            className="container">
                {/* tire */}
                <Title title="Explorer l'expérience Estatein" text='Chez Estatein, nous avons conçu un processus simple pour vous aider à trouver et à acheter la propriété de vos rêves en toute simplicité. Voici un guide étape par étape expliquant le fonctionnement.' />

                {/* wrapper de la carte */}
                <div className="mt-10 grid gap-8 lg:mt-16 lg:grid-cols-3">
                    {howItWorksItems.map((item) => (
                        //carte
                        <motion.div variants={fadeInUp} key={item.id} className='border border-gray-15 p-5 bg-linear-to-br from-purple-500/20 to-20%'>
                            <p className='border-b border-gray-15 pb-3 text-neutral-400'>{item.step}</p>
                            <div className='mt-4'>
                                <h4>{item.title}</h4>
                                <p className='mt-3.5'>{item.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
        </motion.div>

    </section>
  )
}

export default HowItWorks