import React from "react";
import Image from "next/image";

interface Props {
  country: string;
  city: string;
  price: string;
  numOfDays: number;
  imageSrc: string;
  decoreSrc: string;
}

function Card(props: Props) {
  return (
    <div className="flex flex-row">
      <div className="relative rounded-3xl cursor-pointer flex justify-center items-center flex-col pl-24">
        <Image
          className="rounded-s-none h-[457px] w-[315px]"
          width={1000}
          height={0}
          src={props.imageSrc}
          alt="rome"
        />
        <div className="bg-white w-full relative bottom-32 h-36 shadow-2xl rounded-b-3xl">
          <div className="flex justify-between items-center gap-11 px-6 pt-8">
            <div className="text-lg" style={{ color: "#5E6282" }}>
              {props.city}{" "}
              <span>
                <span>{props.country}</span>
              </span>
            </div>
            <div className="text-lg" style={{ color: "#5E6282" }}>
              ${props.price}k
            </div>
          </div>
          <div className="text-base m-6" style={{ color: "#5E6282" }}>
            {" "}
            <span>
              <Image
                className="inline"
                width={20}
                height={20}
                src={"/navigation 1.png"}
                alt="navigation"
              />{" "}
              {props.numOfDays} Days Trip
            </span>
          </div>
        </div>
      </div>
      {props.decoreSrc ? (
        <Image
          className="relative right-8 -z-50 inline"
          src={props.decoreSrc}
          width={100}
          height={100}
          alt="decore"
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Card;
