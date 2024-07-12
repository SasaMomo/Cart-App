import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function BottomHeader() {
  return (
    <div className="fixed bottom-0 z-[4] w-full ">
      <div className="flex lg:hidden gap-4 mx-auto text-gray-800 bg-gray-400 rounded-ss-md rounded-se-md  p-2 items-center max-w-[600px] justify-around text-[32px]">
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
  );
}
