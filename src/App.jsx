import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import ThreeCards from './components/ThreeCards'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full h-screen  text-black '>
    <Navbar/>  
    <Hero/>
    <Marquee/>
    <About/>
    <Eyes />
    <Featured/>
    <ThreeCards/>
    <Footer/>
    </div>
  )
}

export default App