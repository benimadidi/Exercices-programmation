import React from 'react'
import Header from './components/header'
import About from './components/about'
import Projects from './components/projects'

const App = () => {
  return (

    <div className='w-full overflow-hidden'>
      <Header />
      <About />
      <Projects />
    </div>

  )
}

export default App