import React from "react";

const Featured = () => {
  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-400 pb-20 ">
        <h1 className="text-8xl font-[Neue_Montreal] tracking-tight ">
          Featured Projects{" "}
        </h1>
      </div>
      <div className="px-20">
        <div className="  cards w-full flex gap-10 mt-10">
          <div className="cardcontainer relative realtive w-1/2 h-[75vh]  ">
            <h1 className="absolute font-[MADE Outer Sans Alt] font-bold text-[#cdea68] left-full top-1/2 -translate-x-1/2 text-8xl -translate-y-1/2 z-[9] leading-none tracking-tighter">
              {"FYDE".split('').map((item,index) => <span>{item}</span>)}
               
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="bg"
              />
            </div>
          </div>
          <div className="cardcontainer relative  w-1/2 h-[75vh]  ">
            <h1 className="absolute font-[MADE Outer Sans Alt] font-bold text-[#cdea68] right-full top-1/2 translate-x-1/2 text-8xl -translate-y-1/2 z-[9] leading-none tracking-tighter">
            {"VISE".split('').map((item,index) => <span>{item}</span>)}
              
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="bg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
