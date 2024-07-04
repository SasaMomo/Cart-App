import Image from "next/image";
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function MobHeader() {
  return (
    <div className="corder-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center">
        <div className="w-20 h-20 pb-4 sm:pb-0">
          <Image
            src="https://i.imgur.com/lrtfT4q.png"
            alt="logo"
            width={80}
            height={80}
          />
        </div>
        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            className="border-gray-200 border p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="Procure por produtos"
          />
          <BsSearch
            className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
            size={22}
          />
        </div>
        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
          <BiUser />

          <div className="relative">
            <FiHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
          <div className="relative">
            <HiOutlineShoppingBag />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}