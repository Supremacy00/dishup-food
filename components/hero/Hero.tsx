import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { GiFlowerStar } from "react-icons/gi";
import { GoArrowUpRight } from "react-icons/go";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Category from "./Category";

const Hero = () => {
  return (
    <section className="font-inter text-primary pt-16 pb-20 bg-gradient-to-t from-white  via-[#f5ede0] to-[#f3d5a1]/20 bg-opacity-20 lg:pt-20">
      <div className="mx-auto px-5 lg:flex justify-center items-center gap-10 xl:max-w-[1200px] xxl:gap-20 transition-all duration-300 ease-in-out ">
        <div className="w-full mt-[75px]">
          <div className="mx-auto max-w-[500px] xs:max-w-[680px]">
            <div className="flex justify-center lg:justify-start ">
              <div className="relative flex flex-col -space-y-2.5 text-[33px] font-semibold lg:text-[40px]">
                <h1 className="ml-10">Fresh <span className="text-transparent bg-clip-text bg-hero-pattern bg-cover">DishUp </span>Food</h1>
                <div className="flex">
                  <p className="absolute text-[28px] text-[#90ad41] italic font-normal lg:text-[35px]">
                    with
                  </p>
                  <h1 className="ml-[58px] mt-1.5 lg:ml-[65px]"><span className="text-transparent bg-clip-text bg-hero-pattern2 bg-cover">Great</span> Taste</h1>
                  <Image
                    src="/assets/images/heroicon.png"
                    alt="Hero Icon"
                    width={1000}
                    height={1000}
                    className="w-[70px] h-[70px] -ml-6 mt-1.5 lg:-ml-5 lg:mt-3"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <p className="text-base text-primary  leading-8 mt-1 text-center xl:text-start lg:mt-3 lg:pr-14">
                Savor the succulence of perfectly grilled salmon, adorned with a
                zesty drizzle of fresh lemon and aromatic herbs. Each bite
                promises a symphony of flavors, marrying the smoky essence of
                the grill with the bright, citrusy notes for a seafood delight.
              </p>
              <div className="relative mt-8 px-8 lg:mt-12 xl:px-12">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Find Great Food"
                  className="relative w-full py-4 lg:py-5 pl-12 pr-[75px] border-[1px] placeholder:text-[13px] placeholder:text-[#949393] border-gray-300 shadow-3xl rounded-2xl outline-none"
                />
                <button className="absolute right-12 top-[5px] bg-amber-400 hover:bg-opacity-80 text-primary text-[20px] p-3.5 rounded-full xl:right-16 lg:top-[7px] lg:p-4 transition-colors duration-300 ease-in-out">
                  <IoSearch />
                </button>
              </div>
            </div>
            <div className=" mt-9 mx-auto max-w-[300px] xl:max-w-[350px] sm:mt-12 lg:mt-16">
              <Category />
            </div>
          </div>
        </div>
        <div className="mt-28 mx-auto xs:max-w-[680px] lg:w-full lg:px-0 xl:max-w-[650px]">
          <div className="relative w-full aspect-2/2 overflow-hidden rounded-2xl lg:h-[350px]">
            <Image
              src="/assets/images/hero3.jpg"
              alt="Hero Icon"
              width={1000}
              height={1000}
              className="relative w-full h-full object-cover"
            />
            <div className="w-full h-full absolute z-10 top-0 bg-gradient-to-t from-[#070707]/20"></div>
            <div className="text-white absolute z-20 top-7 left-5 right-5 flex items-center gap-4">
              <div className="text-[22px] bg-black p-2.5 rounded-full">
                <GiFlowerStar />
              </div>
              <div className="flex items-center gap-2 rounded-full bg-[#e3e2e2] bg-opacity-95 py-3 px-5 ">
                <p className="text-primary text-base font-light">
                  Show Top-Rated Foods
                </p>
                <span className="bg-black p-[5px] rounded-full text-[12px]">
                  <GoArrowUpRight />
                </span>
              </div>
            </div>
            <h3 className="absolute bottom-5 left-7 right-7 z-20 leading-7 text-[22px] font-semibold text-white lg:leading-9">
              Flat Lay Table - Full Delicious Food Arrangement - Keep it Casual and Easy!
            </h3>
          </div>
          <div className="w-full py-4 px-7 my-4 bg-black rounded-[15px] flex justify-between items-center gap-2">
            <h3 className="text-[20px] font-semibold text-white">
              3,500 + Ratings
            </h3>
            <span className="text-[14px] text-amber-400 flex items-center flex-wrap gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </span>
          </div>
          <div className="ss:flex items-center gap-3 lg:gap-4">
            <div className="relative w-full h-full aspect-4/3 overflow-hidden rounded-2xl sm:aspect-4/3">
              <Image
                src="/assets/images/hero6.jpg"
                alt="Hero Icon"
                width={1000}
                height={1000}
                className="relative w-full h-full object-cover"
              />
              <div className="w-full h-full absolute z-10 top-0 bg-gradient-to-t from-[#070707]/80"></div>
              <h3 className="absolute bottom-4 left-3 right-3 z-20 leading-6 line-clamp-2 text-base font-medium text-white xs:text-[18px] xs:left-5 xs:right-5">
              Crispy Omelet Topped with Minced Pork.
              </h3>
            </div>
            <div className="mt-4 relative w-full h-full aspect-4/3 overflow-hidden rounded-2xl ss:aspect-4/3 ss:mt-0">
              <Image
                src="/assets/images/hero2.jpg"
                alt="Hero Icon"
                width={1000}
                height={1000}
                className="relative w-full h-full object-cover"
              />
              <div className="w-full h-full absolute z-10 top-0 bg-gradient-to-t from-[#070707]/80"></div>
              <h3 className="absolute bottom-4 left-3 right-3 z-20 leading-6 line-clamp-2 text-base font-medium text-white xs:text-[18px] xs:left-5 xs:right-5">
                High angle table full delicious food.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
