import React from 'react'
import Header from './components/header'
import About from './components/about'
import Projects from './components/projects'
import Testimonials from './components/testimonials'
import Contact from './components/contact'

const App = () => {
  return (

    <div className='w-full overflow-hidden'>
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </div>

  )
}

export default App