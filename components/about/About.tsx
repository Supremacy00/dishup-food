import React from "react";
import { aboutData } from "../data";
import Image from "next/image";
import { GiCampCookingPot } from "react-icons/gi";
import { FcSmartphoneTablet } from "react-icons/fc";

const About = () => {
  return (
    <section className="font-inter mx-auto px-5 pt-8 pb-10 xs:py-16 lg:flex justify-center items-center gap-10 xl:max-w-[1200px] xxl:gap-20 transition-all duration-300 ease-in-out">
      <div className="mx-auto max-w-[500px] xs:max-w-[680px] lg:max-w-full">
        <div className="lg:flex items-center gap-16 xl:gap-28 xxl:gap-36">
          <div className="grid grid-cols-2 gap-x-5 gap-y-3.5 xxl:gap-5">
            {aboutData.map((item, index) => (
              <div key={index} className="w-full aspect-4/4 overflow-hidden rounded-xl lg:aspect-180/300 xxl:aspect-300/300">
                <Image
                  src={item.img}
                  alt="About Image"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="mt-12 text-primary lg:mt-0">
            <h3>About Us</h3>
            <h1 className="text-[21px] xs:text-[30px] font-semibold mb-2">
              Why We Are The Best
            </h1>
            <p className="text-base leading-8">
              Quis autem vel eum iure reprehenderit qui in evoluptate velit esse
              qua nihil molestiae consequatur, vel illum qui dolorem eum fugiat
              quvoluptas nulla pariatureaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <div className="mt-10">
              <div className="flex gap-5 ">
                <span className=" text-amber-600 text-[35px] px-3 h-12 bg-amber-300 rounded-lg bg-opacity-15 flex justify-center lg:h-14">
                  <GiCampCookingPot className="mt-1.5 lg:mt-[10px]" />
                </span>
                <span className="text-primary">
                  <h3 className="text-[17px] font-semibold">Buffet Service</h3>
                  <p className="text-[15px] mt-[3px] leading-6">
                    Qariatureaque ipsa quae a illo inventore veritatis et quasi
                    architecto
                  </p>
                </span>
              </div>
              <div className="flex gap-5 mt-8">
                <span className=" text-amber-400 text-[35px] px-3 h-12 bg-amber-300 rounded-lg bg-opacity-15 flex justify-center lg:h-14">
                  <FcSmartphoneTablet className="mt-1.5 lg:mt-[10px]" />
                </span>
                <span className="text-primary">
                  <h3 className="text-[17px] font-semibold">Online Booking</h3>
                  <p className="text-[15px] mt-[3px] leading-6">
                    Qariatureaque ipsa quae a illo inventore veritatis et quasi
                    architecto
                  </p>
                </span>
              </div>
            </div>
            <button className="mt-12 py-3 px-6 bg-primary text-white rounded-[3px] text-[15px] hover:bg-amber-400 hover:text-primary hover:shadow-3xl transition-all duration-300 ease-in-out">About Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
