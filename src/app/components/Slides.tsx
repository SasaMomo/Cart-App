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
    <div className="outline-none border-none relative">
      <div
        className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%]
         space-y-2 lg:space-y-4 bg-[#ffffffa4] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none"
      >
        <h2 className="text-pri text-[24px] lg:text-[28px]">{title}</h2>
        <h3 className="text-sec text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">
          {desc}
        </h3>
        <p className="text-[24px] text-gray-500">
          começando aqui{" "}
          <b className="text-[20px] md:text-[24px] lg:text-[30px]">{price}</b>
          .00
        </p>
        <div className="bg-pri text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-sec">
          Compre Agora
        </div>
      </div>
      <Image
        className="w-full md-h-auto min-h-[350px] rounded-xl mx-auto object-cover object-right md:object-left-botom"
        src={img}
        alt="Slide"
        width={1200}
        height={400}
      />
    </div>
  );
};

export default Slides;
