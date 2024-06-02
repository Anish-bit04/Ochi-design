import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-100 pt-1'>
        <div className="hero mt-40 px-20 font-[MADE Outer Sans Alt] ">
        { ["WE CREATE", "EYE-OPENING","PRESENTATIONS"].map((elem,i)=>{
          return <div className="masker overflow-hidden ">
            <div className='w-fit flex items-center'>
              {i === 1 && (<div className='w-[7vw] h-[4.75vw] mr-[1vw] mt-[0.85vw] rounded-md bg-red-500  '></div>)}
           <h1 className='h-full flex items-center font-bold uppercase text-[6.5vw] leading-[7vw] tracking-tighter'>{elem}</h1> 
           </div>
          </div>
        })}
            
        </div>
        
        <div className=" font-[Neue_Montreal] border-t border-zinc-500  mt-32 flex justify-between items-center py-5 px-20">
          {["For public and private companies","From the first pitch to IPO"].map((item,index)=> (
          <p className=' text-xl font-normal tracking-tight leading-none'>{item}</p>
          ))}
          <div className="start flex items-center gap-5">
            <div className="px-5 py-2 border-[1px] border-zinc-500 font-light  text-md uppercase rounded-full"> start the project   </div>
              <div className="w-10 h-10 border-[1px] border-zinc-500 flex items-center justify-center rounded-full "> 
              <span className='rotate-[45deg] '><FaArrowUpLong/></span>
               </div>
          
          </div>
        </div>
    </div>
  )
}

export default Hero