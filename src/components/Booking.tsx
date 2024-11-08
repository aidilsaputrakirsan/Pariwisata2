import Image from "next/image";
import React from "react";

function Booking() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-around items-center px-10 gap-10 overflow-hidden pb-10">
        <div className="w-[450px]">
          <div className="flex justify-center items-center lg:items-start flex-col pb-10">
            <h3 className="text-lg font-semibold" style={{ color: "#5E6282" }}>
              Easy and Fast
            </h3>
            <h1
              className="text-2xl lg:text-5xl font-bold lg:text-wrap text-nowrap"
              style={{ color: "#14183E" }}
            >
              Book Your Next Trip In 3 Easy Steps
            </h1>
          </div>
          <div className="flex flex-col justify-center items-start gap-10">
            <div className="flex flex-row justify-center items-center">
              <div className="pr-6">
                <Image
                  width={40}
                  height={40}
                  src={"/Group 7.png"}
                  alt="destination"
                />
              </div>
              <div className="lg:w-72">
                <h2
                  className="text-base font-bold"
                  style={{ color: "#5E6282" }}
                >
                  Choose Destination
                </h2>
                <p
                  className="text-base font-light text-wrap tracking-normal leading-4"
                  style={{ color: "#5E6282" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <div className="pr-6">
                <Image
                  width={40}
                  height={40}
                  src={"/Group 12.png"}
                  alt="destination"
                />
              </div>
              <div className="lg:w-72">
                <h2
                  className="text-base font-bold"
                  style={{ color: "#5E6282" }}
                >
                  Make Payment
                </h2>
                <p
                  className="text-base font-light text-wrap tracking-normal leading-4"
                  style={{ color: "#5E6282" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <div className="pr-6">
                <Image
                  width={40}
                  height={40}
                  src={"/Group 11.png"}
                  alt="destination"
                />
              </div>
              <div className="lg:w-72">
                <h2
                  className="text-base font-bold"
                  style={{ color: "#5E6282" }}
                >
                  Reach Airport on Selected Date
                </h2>
                <p
                  className="text-base font-light text-wrap tracking-normal leading-4"
                  style={{ color: "#5E6282" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-96 w-96 shadow-2xl rounded-3xl">
          <div className="px-6 pt-6 rounded-3xl">
            <Image
              width={400}
              height={100}
              src={"/Rectangle 17.jpg"}
              alt="trip"
            />
          </div>
          <div className="p-6">
            <h2 className="text-lg font-medium" style={{ color: "#080809" }}>
              Trip To Greece
            </h2>
            <div className="text-base pt-2" style={{ color: "#84829A" }}>
              14-29 June | by Robbin joseph
            </div>
            <div className="flex justify-start items-center flex-row gap-3 pt-2">
              <Image
                className="active:w-7 cursor-pointer"
                width={30}
                height={30}
                src={"/LEAF.png"}
                alt="leaf"
              />
              <Image
                className="active:w-7 cursor-pointer"
                width={30}
                height={30}
                src={"/map icon.png"}
                alt="map"
              />
              <Image
                className="active:w-7 cursor-pointer"
                width={30}
                height={30}
                src={"/send.png"}
                alt="send"
              />
            </div>
            <div className="flex justify-between items-center flex-row pt-6">
              <div className="flex justify-center items-center flex-row gap-2">
                <Image
                  width={20}
                  height={20}
                  src={"/building 1.png"}
                  alt="building"
                />
                <h4 className="text-base" style={{ color: "#84829A" }}>
                  24 people going
                </h4>
              </div>
              <label className="cursor-pointer flex items-center">
                {/* Hidden checkbox for toggle state */}
                <input type="checkbox" className="hidden peer" />

                {/* Heart Image with Tailwind classes */}
                <Image
                  className="w-5 h-5 transition-colors duration-300 peer-checked:hidden"
                  width={20}
                  height={20}
                  src="/heart.png"
                  alt="heart"
                />

                {/* Red Heart Icon as filled version when checked */}
                <span className="text-gray-500 text-xl transition-colors duration-300 hidden peer-checked:inline">
                  ❤️
                </span>
              </label>
            </div>
          </div>
          <div className="relative left-28 lg:left-52 bottom-44 h-32 w-72 shadow-2xl rounded-2xl bg-white">
            <div className="p-4 flex justify-center items-start gap-4">
              <Image className="pt-2" width={50} height={50} src={"/Mask.png"} alt="mask" />
              <div className="pt-2">
                <h3 className="text-sm" style={{ color: "#84829A" }}>
                  Ongoing
                </h3>
                <h2 className="text-lg" style={{ color: "#080809" }}>
                  Trip to rome
                </h2>
                <div className="text-sm py-2" style={{ color: "#8A79DF" }}>
                  40%
                  <span className="text-sm" style={{ color: "#080809" }}>
                    completed
                  </span>
                </div>
                <Image
                  width={200}
                  height={4}
                  src={"/loading.png"}
                  alt="loading"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
