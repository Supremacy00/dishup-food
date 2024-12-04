import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdLunchDining } from "react-icons/md";

const Login = () => {
  return (
    <>
      <section className="mx-auto px-5 md:mx-auto md:max-w-[1200px] md:my-8">
        <Link href="/">
          <div className="flex justify-start items-center flex-wrap gap-2 mt-11">
            <div className="relative bg-amber-400 p-1.5 rounded-[40%]">
              <MdLunchDining className="text-[30px] text-primary" />
            </div>
            <h3 className="text-[20px] text-primary font-sans font-semibold">
              Dish
              <span className="text-amber-400 orang">U</span>p
            </h3>
          </div>
        </Link>
      </section>
      <form className="flex justify-center items-center font-roboto mt-16 px-5 ">
        <div className="w-full max-w-[370px]">
          <div>
            <div className="text-center max-w-[300px] mx-auto">
              <h1 className="text-[25px] font-bold ">Log In or Sign Up</h1>
              <p className="text-[14px] font-light mt-2">
                Join millions of others in ordering the best meal you can ever
                get.
              </p>
            </div>
            <div className="mt-8">
              <button className="w-full flex items-center justify-center px-2 flex-wrap whitespace-nowrap overflow-hidden border border-slate-500 rounded-xl py-2.5 gap-2 text-[14px] font-light">
                <Image
                  src="/icons/Google svg.png"
                  alt=""
                  width={20}
                  height={20}
                />
                Continue with Google
              </button>
              <button className="w-full flex items-center justify-center px-2 flex-wrap whitespace-nowrap overflow-hidden border border-slate-500 rounded-xl py-2.5 gap-2 mt-5 text-[14px] font-light">
                <Image
                  src="/icons/Facebook svg.png"
                  alt=""
                  width={20}
                  height={20}
                />
                Continue with Facebook
              </button>
            </div>
            <div className="mt-5">
              <div className="flex items-center mb-6">
                <div className="border-t border-gray-400 w-full"></div>
                <span className="mx-2 text-gray-500 font-light">or</span>
                <div className="border-t border-gray-400 w-full"></div>
              </div>

              <div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[12px] font-light mt-3"
                  >
                    Name
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full border py-2.5 rounded-xl mt-2 text-[14px] px-3 font-light"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-[12px] font-light mt-3"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="email"
                    id="password"
                    className="w-full border border-gray-300 py-2.5 rounded-xl mt-2 text-[14px] font-light px-3"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
            </div>
            <button className="flex justify-center mx-auto mt-7 bg-primary text-white w-full py-3 rounded-full font-medium text-sm">
              Log In
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
