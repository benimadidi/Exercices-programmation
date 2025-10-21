import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Featured from './components/Featured'


const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cards />
        <Featured />
      </main>

    </>
  )
}

export default App