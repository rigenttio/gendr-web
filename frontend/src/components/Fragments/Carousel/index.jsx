// import React from "react";

// const Carousel = (props) => {
//   const { children, image, name, label, curr } = props;
//   return (
//     <div className="py-[105px] px-16 bg-white rounded-[83px] shadow-card flex gap-12 transition-transform ease-out duration-500 " style={{ transform: `translateX(-${curr * 100}%})` }}>
//       <img src={image} alt="" className="min-w-[212px] h-[212px] object-cover top-0 rounded-3xl" />
//       <div className="flex flex-col justify-between ">
//         <p className="font-medium text-base  min-w-[772px]">{children}</p>
//         <div className="flex flex-col gap-2">
//           <h2 className="font-bold text-base">{name}</h2>
//           <h3 className="font-normal text-sm">{label}</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React from "react";

const Carousel = ({ slides, curr, prev, next }) => {
  return (
    <div className="relative overflow-hidden flex">
      <div className="flex gap-0" style={{ transform: `translateX(-${curr * 100}%)`, transition: "transform 0.5s ease" }}>
        {slides.map((slide, index) => (
          <div key={index} className="flex justify-center items-center h-full min-w-full max-w-full">
            <div className="py-[105px] px-16 bg-white rounded-[83px] shadow-card flex ">
              <img src={slide.image} alt="" className="min-w-[212px] h-[212px] object-cover top-0 rounded-3xl" />
              <div className="flex flex-col justify-between">
                <p className="font-medium text-base">{slide.deskripsi}</p>
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-base">{slide.name}</h2>
                  <h3 className="font-normal text-sm">{slide.label}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute flex justify-between w-full">
        <button onClick={prev} className="px-3 py-2 bg-primary rounded-full flex items-center justify-center hover:bg-[#ac1f86]">
          <img src="/assets/icon/slide-left.svg" alt="" />
        </button>
        <button onClick={next} className="px-3 py-2 bg-primary rounded-full flex items-center justify-center hover:bg-[#ac1f86]">
          <img src="/assets/icon/slide-right.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
