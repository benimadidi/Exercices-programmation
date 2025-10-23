import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Featured from './components/Featured'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'


const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cards />
        <Featured />
        <HowItWorks />
        <Testimonials />
        <CallToAction />
      </main>

    </>
  )
}

export default App