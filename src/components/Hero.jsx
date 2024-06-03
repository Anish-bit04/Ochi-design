import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div data-scroll data-scroll-speed='-0.3' className="w-full h-screen bg-zinc-100 pt-1">
      <div className="hero mt-40 px-20 font-[MADE Outer Sans Alt] text-zinc-800 ">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((elem, i) => {
          return (
            <div className="masker overflow-hidden ">
              <div className="w-fit flex items-center">
                {i === 1 && (
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "6.5vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1],duration:1 }}
                    
                    className="w-[7vw] h-[4.75vw] mr-[1vw] mt-[0.85vw] rounded-md bg-cover bg-center bg-[url('/hero-img.jpg')]  "
                  ></motion.div>
                )}
                <h1 key={i} className="h-full flex items-center font-bold uppercase text-[6.5vw] leading-[7vw] tracking-tighter">
                  {elem}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className=" font-['Neue_Montreal'] border-t border-zinc-500  mt-[7.5vw] flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p key={index} className=" text-xl font-normal tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-500 font-medium text-zinc-600  text-lg uppercase rounded-full">
            {" "}
            start the project{" "}
          </div>
          <div className="w-10 h-10 border-[1px] border-zinc-500 flex items-center justify-center rounded-full ">
            <span className="rotate-[45deg] ">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
