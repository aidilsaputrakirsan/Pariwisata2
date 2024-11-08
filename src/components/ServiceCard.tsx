import React from "react";
import Image from "next/image";

interface Props {
  category: string;
  description: string;
  imageSrc: string;
  imageSize: number;
}

function Card(props: Props) {
  return (
    <div className="group -mb-16">
      <div className="relative h-54 md:h-72 w-60 p-6 rounded-3xl hover:shadow-2xl cursor-pointer flex justify-center items-center flex-col gap-4 bg-white">
        <Image
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          width={props.imageSize}
          height={props.imageSize}
          src={props.imageSrc}
          alt="calculated weather"
        />

        <h2 className="text-xl font-semibold" style={{ color: "#1E1D4C" }}>
          {props.category}
        </h2>
        <p
          className="text-base font-medium text-center"
          style={{ color: "#5E6282" }}
        >
          {props.description}
        </p>
      </div>

      <Image
        width={100}
        height={100}
        src={"/Rectangle 157.png"}
        alt="rect"
        className="relative -top-[70px] -left-8 -z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
      />
    </div>
  );
}

export default Card;
