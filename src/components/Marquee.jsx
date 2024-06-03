import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='0.1' className='w-full py-[7.5vw] rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className="text border-t-[1px] border-b-[1px] border-zinc-300 flex overflow-hidden whitespace-nowrap pr-10 ">
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ repeat:Infinity, ease:"linear",duration:5}} className='text-[24vw] leading-none font-[MADE Outer Sans Alt] uppercase -mt-[4vw] -mb-[1.4vw] font-bold text-white'>we are ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ repeat:Infinity, ease:"linear",duration:5}} className='text-[24vw] leading-none font-[MADE Outer Sans Alt] uppercase -mt-[4vw] -mb-[1.4vw] font-bold text-white'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee