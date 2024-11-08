import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";

function Hero() {
  return (
    <div className="relative overflow-hidden lg:h-screen">
      <Navbar />
      <Image
        className="absolute -right-28 -top-52 -z-10 w-[500px] md:w-[600px] lg:w-[766px] xl:w-[766px]"
        width={766}
        height={823}
        src={"/Decore.png"}
        alt="decor"
        loading="lazy"
      />
      <Image
        className="absolute right-2 xl:right-28 top-16 w-[350px] sm:w-[400px] md:w-[500px] lg:w-[684px]"
        width={684}
        height={664}
        src={"/Image.png"}
        alt="decor"
        loading="lazy"
      />
      <div className="w-6/12 px-6 lg:px-20 xl:px-32 pt-24 pb-10">
        <h3
          className="text-sm sm:text-lg md:text-xl font-bold pb-6 text-nowrap"
          style={{ color: "#DF6951" }}
        >
          BEST DESTINATIONS AROUND THE WORLD
        </h3>
        <h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-wrap font-bold pb-6"
          style={{ color: "#181E4B" }}
        >
          Travel, enjoy and live a new and full life
        </h1>
        <p className="text-xl pb-6" style={{ color: "#5E6282" }}>
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex justify-between items-center w-64 h-14">
          <button
            className="p-4 rounded-md active:p-[18px]"
            style={{ backgroundColor: "#F1A501" }}
          >
            <Link className="text-nowrap" href={"/findmore"}>
              Find out more
            </Link>
          </button>
          <button
            className="p-4 pl-10 rounded-md h-fit flex justify-center items-center text-nowrap"
            style={{ width: "200px", color: "#686D77" }}
          >
            <Image
              className="h-ful active:w-20 active:h-20"
              src="/Play button.svg"
              alt="Play button"
              width={140}
              height={140}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            Play Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
