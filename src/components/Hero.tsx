import React from "react";
import Rightarrow from "./icon/Rightarrow";
import Image from "next/image";

function Hero() {
  return (
    <section className="hero">
      <div className="py-24">
        <h1 className="text-4xl font-semibold leading-relaxed">
          "Kebersihan itu sebagian dari iman" (HR. Tirmidzi)
        </h1>
        <p className="my-6 text-gray-500">
          Fun Fact: Mengeringkan sepatu di bawah sinar matahari langsung, akan
          membuat warna sepatu cepat pudar
        </p>

        <div className="flex ml-12 text-sm">
          <a href="/order">
            <button
              type="button"
              className="flex uppercase text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Order Sekarang
              <Rightarrow />
            </button>
          </a>
        </div>
      </div>

      <div className="relative ml-11">
        <Image
          src="/Logomrclean.jpg"
          layout="fill"
          objectFit="contain"
          alt="mrcleanlogo"
        />
      </div>
    </section>
  );
}

export default Hero;
