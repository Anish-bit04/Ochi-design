import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'

const App = () => {
  return (
    <div className='w-full h-screen  text-black '>
    <Navbar/>  
    <Hero/>
    <Marquee/>
    </div>
  )
}

export default App