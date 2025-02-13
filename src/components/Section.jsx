import React from 'react';

function Section({ model, backgroundImg, backgroundVideo, price, description, leftBtn, rightBtn }) {
  return (
    <section className="relative w-[99vw] h-[100vh] flex flex-col justify-between items-center overflow-hidden">
      {backgroundVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={`/videos/${backgroundVideo}`} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute top-0 left-0 w-[100vw] h-full bg-cover object-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url("/img/${backgroundImg}")` }}
        />
      )}

      <div className="relative font-[universalSans] text-white font-medium mt-[17vh] items-center flex flex-col gap-2">
        <h1 className="xl:text-7xl text-5xl">{model}</h1>
        {price && <p className="xl:text-[40px] text-[20px] underline underline-offset-4">{price}</p>}
        <p className={`${price ? "xl:text-xl text-base" : "xl:text-3xl text-xl"} ${model === 'Solar Panels' ? "underline underline-offset-8" : ""}`}>
          {description}
        </p>
      </div>

      <div className="relative z-10 font-[universalSans]">
        <button className={`px-6 py-2 xl:w-[27vh] w-[18vh] mb-20 cursor-pointer text-white rounded-md font-medium ${model === 'CyberTrukk' ? 'bg-[#171a20] text-[#a2a3a5] rounded-b-none' : 'bg-[#3e6ae1] rounded-md'}`}>
          {leftBtn}
        </button>
        {rightBtn && (
          <button className={`bg-white px-6 py-2 cursor-pointer  xl:w-[27vh] w-[18vh] ml-4 font-medium  ${model === 'CyberTrukk' ? 'bg-[#171a20] text-[#a2a3a5] rounded-b-none' : 'bg-white rounded-md'}`}>
            {rightBtn}
          </button>
        )}
      </div>
    </section>
  );
}

export default Section;
