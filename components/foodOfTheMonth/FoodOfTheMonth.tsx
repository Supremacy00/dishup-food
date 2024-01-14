import React from "react";
import { foodOfTheMonthData } from "../data";
import Image from "next/image";
import Link from "next/link";
import { BsSuitHeart } from "react-icons/bs";

const FoodOfTheMonth = () => {
  return (
    <section className="font-inter mx-auto px-5 pt-12 pb-10 xs:py-16 lg:flex justify-center items-center gap-10 xl:max-w-[1200px] xxl:gap-20 transition-all duration-300 ease-in-out">
      <div className="mx-auto max-w-[500px] xs:max-w-[680px] lg:max-w-full">
        <div className="text-primary lg:mx-auto lg:max-w-[550px] lg:text-center">
          <h1 className=" text-[21px] xs:text-[30px] font-semibold mb-2">
            Food Of The Month
          </h1>
          <p className="text-base leading-7">
            Discover the flavor of the month – a culinary delight crafted just
            for you. Indulge in this month's special dish and savor the taste of
            something extraordinary.
          </p>
        </div>
        <article className="grid grid-cols-1 gap-7 mt-10 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 xxl:gap-5 xxl:gap-y-7">
          {foodOfTheMonthData.map((item) => (
            <article key={item.id}>
              <div className="group bg-white shadow-md rounded-t-lg rounded-b-[30px] overflow-hidden">
                <div className="relative w-full h-full aspect-3/2 xs:h-[250px] sm:h-[200px] xxl:h-[180px] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    className="w-full h-full group-hover:scale-110  transition-all duration-300 ease-in-out "
                  />
                  <span className="absolute top-3 right-3 bg-white bg-opacity-80 text-[#FF0000] p-1.5 text-[19px] rounded-full cursor-pointer">
                    <BsSuitHeart />
                  </span>
                </div>
                <div className="px-5 pt-4 pb-7">
                  <h1 className="text-primary text-[17px] font-semibold mb-1.5">
                    {item.title}
                  </h1>
                  <p className="text-[15px] text-primary line-clamp-3 lg:line-clamp-2 leading-6 ">
                    {item.decription}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-[15px]">{`$${item.price}`}</p>
                    <button className="text-[13px] text-primary border-[1px] border-amber-400 hover:bg-primary hover:text-white py-1.5 px-3 rounded-lg transition-colors duration-300 ease-in-out">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </article>
        <div className="flex justify-center mt-10 lg:mt-16">
          <Link href="/dishup/menu">
            <button className="text-[15px] text-white bg-primary hover:bg-amber-400 hover:text-primary hover:shadow-3xl py-3 px-4 rounded-[3px] transition-all duration-300 ease-in-out">
              Explore Our Menu
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FoodOfTheMonth;
