import React from 'react'
import { motion } from 'motion/react'
import { fadeIn, fadeInUp, staggerContainer } from '../motion/animation'

const CallToAction = () => {
  return (
    <motion.section
      variants={staggerContainer} 
      initial= 'hidden'
      whileInView='show'
      viewport={{once:true}} 
      className='mt-16 py-16 border-y border-gray-15 relative'>
          <div 
            className="container grid gap-10 lg:grid-cols-[1fr_0.3fr] items-center" >
                {/* contenu */}
                <div>
                    <motion.h2 variants={fadeInUp}>Démarrez votre aventure immobilière dès aujourd'hui</motion.h2>
                    <motion.p variants={fadeInUp} className='mt-5'>La propriété de vos rêves est à portée de clic. Que vous recherchiez une nouvelle maison, un investissement stratégique ou des conseils d'experts en immobilier, Estatein est là pour vous accompagner à chaque étape. Faites le premier pas vers vos objectifs immobiliers et explorez nos biens disponibles ou contactez notre équipe pour un accompagnement personnalisé.</motion.p>
                </div>

                {/* button */}
                <motion.button variants={fadeInUp} className="secondary-btn max-w-max ml-auto">Explorer les biens</motion.button>
          </div>

          {/* bg image */}
          <motion.div variants={fadeIn} className="absolute bottom-0 left-0 -z-10">
              <img src="/images/shape-2.svg" alt="" width={474} height={258} />
          </motion.div>
    </motion.section>
  )
}

export default CallToAction