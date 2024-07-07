import Image from "next/image";
import React from "react";

interface propsType {
  img: string;
  title: string;
  desc: string;
  price: string;
}

const Slides: React.FC<propsType> = ({ img, title, desc, price }) => {
  return (
    <div className="outline-none border-none relative text-center">
      <div
        className="absolute left-[5px] sm:left-[28px] md:left-[40px] max-w-[250px] sm:max-w-[300px] top-[50%] -translate-y-[50%]
         space-y-2  bg-[#ffffffa4] p-4 rounded-lg"
      >
        <h2 className="text-sec text-[24px] lg:text-[26px] font-bold">
          {title}
        </h2>
        <h3 className="text-sec text-[22px] md:text-[26px] lg:text-[40px] font-bold leading-[1.2]">
          {desc}
        </h3>
        <p className="text-[20px] text-black">
          A partir de 
          <b className="text-[20px] md:text-[20px] lg:text-[26px]">{price}</b>
          <span className="text-[20px]">,00</span>
        </p>
        <div className="bg-pri text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-sec">
          Compre Agora
        </div>
      </div>
      <Image
        className="w-full md:h-auto min-h-[250px] rounded-xl mx-auto object-right md:object-left-bottom"
        src={img}
        alt="Slide"
        width={1200}
        height={400}
      />
    </div>
  );
};

export default Slides;
