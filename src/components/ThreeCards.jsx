import React from "react";

const ThreeCards = () => {
  return (
    <div className="w-full h-screen flex items-center px-32 -mt-[5vw] gap-5">
      <div className="cardcontainer  h-[50vh] w-1/2">
        <div className="card relative rounded-2xl w-full h-full bg-[#004d43] flex items-center justify-center ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="ochio"
          />
          <button className="absolute px-5 py-3 border-2 rounded-full left-10 bottom-10 text-[#cdea68] ">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
        <div className="card relative  rounded-2xl flex items-center justify-center w-1/2 h-full bg-[#192826] ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="ochio"
          />
          <button className="absolute px-5 py-3 border-2 rounded-full left-10 bottom-10 text-zinc-300 ">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative  rounded-2xl flex items-center justify-center w-1/2 h-full bg-[#192826] ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="ochio"
          />
          <button className="absolute px-5 py-3 border-2 rounded-full left-10 bottom-10 text-zinc-300">
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreeCards;
