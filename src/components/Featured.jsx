import React from "react";

const Featured = () => {
  return (
    <div className="w-full pt-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-400 pb-20 ">
        <h1 className="text-8xl font-[Neue_Montreal] tracking-tight ">
          Featured Projects{" "}
        </h1>
      </div>
      <div className="px-20">
        <div className="  cards w-full flex gap-5 mt-10">
          <div className="cardcontainer relative realtive w-1/2 h-[80vh]  ">
            <h1 className=" text-xl font-regular mb-7 "> <div className="inline-block rounded-full h-3 w-3 bg-zinc-900 "></div> FYDE</h1>
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
            <div className="buttons flex gap-5 mt-7">
          {["AUDIT","COPYWRITING","SALES DECK","SLIDES DESIGN"].map((item,index)=>{
                return <button className="px-5 py-2 border-[1px] border-zinc-500 font-medium text-zinc-600  text-lg uppercase rounded-full">{item}</button>
          })}
          </div>
          </div>
          <div className="cardcontainer relative  w-1/2 h-[80vh]  ">
          <h1 className=" text-xl font-regular mb-7 "> <div className="inline-block rounded-full h-3 w-3 bg-zinc-900 "></div> VISE</h1>
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
            <div className="buttons2 flex gap-5 mt-7">
          {["AGENCY","COMPANY PRESENTATION"].map((item,index)=>{
                return <button className="px-5 py-2 border-[1px] border-zinc-500 font-medium text-zinc-600  text-lg uppercase rounded-full">{item}</button>
          })}
          </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------------------------- */}
      <div className="px-20 mt-[10vw]">
        <div className="  cards w-full flex gap-5 mt-10">
          <div className="cardcontainer relative realtive w-1/2 h-[80vh]  ">
            <h1 className=" text-xl font-regular mb-7 "> <div className="inline-block rounded-full h-3 w-3 bg-zinc-900 "></div> TRAWA</h1>
            <h1 className="absolute font-[MADE Outer Sans Alt] font-bold text-[#cdea68] left-full top-1/2 -translate-x-1/2 text-8xl -translate-y-1/2 z-[9] leading-none tracking-tighter">
              {"TRAWA".split('').map((item,index) => <span>{item}</span>)}
               
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="bg"
              />
            </div>
            <div className="buttons flex gap-5 mt-7">
          {["BRAND IDENTITY","DESIGN RESEARCH","INVESTOR DECK"].map((item,index)=>{
                return <button className="px-5 py-2 border-[1px] border-zinc-500 font-medium text-zinc-600  text-lg uppercase rounded-full">{item}</button>
          })}
          </div>
          </div>
          <div className="cardcontainer relative  w-1/2 h-[80vh]  ">
          <h1 className=" text-xl font-regular mb-7 "> <div className="inline-block rounded-full h-3 w-3 bg-zinc-900 "></div> PREMIUM BLEND</h1>
            <h1 className="absolute font-[MADE Outer Sans Alt] font-bold text-[#cdea68] right-full top-1/2 translate-x-1/2 text-8xl -translate-y-1/2 z-[9] leading-none tracking-tighter">
            {"PREMIUM".split('').map((item,index) => <span>{item}</span>)}
              
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="bg"
              />
            </div>
            <div className="buttons2 flex gap-5 mt-7">
          {["BRANDED TEMPLATE"].map((item,index)=>{
                return <button className="px-5 py-2 border-[1px] border-zinc-500 font-medium text-zinc-600  text-lg uppercase rounded-full">{item}</button>
          })}
          </div>
          </div>
        </div>
      </div>
      <div className="bigbutton mt-[10vw] flex items-center justify-center ">
      <div className=" flex  items-center justify-center gap-9 px-5 py-2 border-[1px] w-[17vw] h-[7vh] border-zinc-900 bg-zinc-900 font-medium text-zinc-100  text-lg uppercase rounded-full"> VIEW ALL CASE STUDIES 
      <div className="inline-block rounded-full h-3 w-3 bg-zinc-100 "></div>
       </div>
    
      </div>
    </div>
  );
};

export default Featured;
