import React from "react";

function FirstLastSection({
  model,
  backgroundImg,
  backgroundVideo,
  price,
  description,
  leftBtn,
  rightBtn,
}) {
  return (
    <div className="relative w-[99vw] h-[100vh] flex flex-col justify-between items-center overflow-hidden">
      {model === "Model Y" && (
        <>
          <div
            className="absolute top-0 left-0 w-[100vw] h-full bg-cover object-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: `url("/img/${backgroundImg}")` }}
          />
          <div className="relative font-[universalSans] text-white font-medium mt-[17vh] items-center flex flex-col gap-4">
            <h1 className="xl:text-7xl text-5xl">{model}</h1>
            <div className="">
              {price && (
                <p className="xl:text-[40px] text-[20px] underline underline-offset-4">
                  {price}
                </p>
              )}
              <p
                className={`${price ? "xl:text-xl text-base" : "text-3xl"} ${
                  model === "Solar Panels" ? "underline underline-offset-8" : ""
                }`}
              >
                {description}
              </p>
            </div>
            <div className="relative z-10 font-[universalSans]">
              <button
                className={`px-6 py-2 xl:w-[27vh] w-[18vh] mt-1 cursor-pointer text-white rounded-md font-medium bg-[#3e6ae1]`}
              >
                {leftBtn}
              </button>
              {rightBtn && (
                <button
                  className={`bg-white px-6 py-2 cursor-pointer xl:w-[27vh] w-[18vh] ml-4 font-medium text-[#171a20] rounded-md`}
                >
                  {rightBtn}
                </button>
              )}
            </div>
          </div>
        </>
      )}
      {model === "We Are Tesla" && (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src={`/videos/${backgroundVideo}`} type="video/mp4" />
          </video>
          <div className="relative font-[universalSans] text-white font-medium top-[80%] xl:top-[55%] xl:right-[41%]  items-center flex flex-col ">
            <h1 className="text-[40px]">{model}</h1>
            <div className="relative z-10 font-[universalSans]">
              <button
                className={`px-6 py-2 w-[22vh] mt-6 cursor-pointer bg-white text-[#171a20] rounded-md font-medium`}
              >
                {leftBtn}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default FirstLastSection;
