import React from 'react'
import Header from './components/header'
import About from './components/about'
import Projects from './components/projects'
import Testimonials from './components/testimonials'
import Contact from './components/contact'
import Footer from './components/footer'

const App = () => {
  return (

    <div className='w-full overflow-hidden'>
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>

  )
}

export default App