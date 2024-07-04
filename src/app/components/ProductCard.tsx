import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: number;
}

const ProductCard: React.FC<propsType> = ({
  img,
  title,
  desc,
  rating,
  price,
}) => {
  const RatingPoints = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="sm:flex flex-col px-4 border border-gray-200 rounded-xl max-w-[400px] max-h-[450px] sm:max-h-[480px] sm:min-h-[480px] justify-around">
      <div className="">
        <Image
          className="w-[300px] h-[300px] mt-4"
          src={img}
          width={300}
          height={300}
          alt={title}
        />
      </div>
      <div className="space-y-2 py-2 text-center">
        <h2 className="text-pri font-medium uppercase">{title}</h2>
        <p className="text-gray-500 ">{desc}</p>
        <div className="w-[200px] mx-auto px-2 flex justify-around">
          {RatingPoints(rating)}
        </div>
        <div className="flex justify-around">
          <div className="font-bold flex gap-4">
            R$ {price}.00{" "}
            <del className="text-gray-500 font-normal">R$ {price * 1.2}.00</del>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
