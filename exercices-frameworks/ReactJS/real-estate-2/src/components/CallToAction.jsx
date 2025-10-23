import React from 'react'

const CallToAction = () => {
  return (
    <section className='mt-16 py-16 border-y border-gray-15 relative'>
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.3fr] items-center" >
            {/* contenu */}
            <div>
                <h2>Démarrez votre aventure immobilière dès aujourd'hui</h2>
                <p className='mt-5'>La propriété de vos rêves est à portée de clic. Que vous recherchiez une nouvelle maison, un investissement stratégique ou des conseils d'experts en immobilier, Estatein est là pour vous accompagner à chaque étape. Faites le premier pas vers vos objectifs immobiliers et explorez nos biens disponibles ou contactez notre équipe pour un accompagnement personnalisé.</p>
            </div>

            {/* button */}
            <button className="secondary-btn max-w-max ml-auto">Explorer les biens</button>
        </div>

        {/* bg image */}
        <div className="absolute bottom-0 left-0 -z-10">
            <img src="/images/shape-2.svg" alt="" width={474} height={258} />
        </div>
    </section>
  )
}

export default CallToAction