import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-zinc-800'>
        <h1 className='font-["Neue_Montreal"] text-[3.75vw] leading-[4.5vw] tracking-tight '>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
          <div className='w-1/2'>
            <h1 className='text-7xl'> Our approach:</h1>
            <button className='flex uppercase gap-10 items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white'>Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
          </div>
            <img  className='w-1/2 h-[70vh] rounded-3xl 'src="about.jpg" alt="Image" />
        </div>
    </div>
  )
}

export default About