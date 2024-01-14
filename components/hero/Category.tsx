import React from "react";
import { heroData } from "../data";
import Image from "next/image";

const Category = () => {
  return (
    <section className="grid grid-cols-3 gap-4 ">
        {heroData.map((item) => (
          <article key={item.id} className={`${item.styling ? "bg-amber-400 text-primary" : "bg-primary text-amber-400"} rounded-2xl p-1.5 shadow-3xl`}>
            <div className="bg-white p-2 rounded-full">
              <Image
                src={item.img}
                alt="Hero Icon"
                width={1000}
                height={1000}
                className=" aspect-4/4"
              />
            </div>
            <h3 className="text-center mt-3 font-semibold ">{item.title}</h3>
            <span className="flex justify-center items-center gap-1 mt-1 mb-3">
              <span className="text-xs">{item.star}</span>
              <p className={`${item.styling ? "text-primary" : "text-white"} text-sm`}>{item.rating}</p>
            </span>
          </article>
        ))}
    </section>
  );
};

export default Category;
