import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import ThreeCards from './components/ThreeCards'
import Footer from './components/Footer'
import EyesTwo from './components/EyesTwo'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen  text-black '>
    <Navbar/>  
    <Hero/>
    <Marquee/>
    <About/>
    <Eyes />
    <Featured/>
    <ThreeCards/>
    <EyesTwo/>
    <Footer/>
    </div>
  )
}

export default App