import Image from "next/image";
import React from "react";
import Card from "./TestimonialsCard";

function Testimonials() {
  return (
    <div className="flex flex-row justify-around items-center">
      <div className="w-[450px]">
        <div className="flex justify-center items-start flex-col pb-10">
          <h3 className="text-lg font-semibold" style={{ color: "#5E6282" }}>
            Testimonials
          </h3>
          <h1
            className="text-5xl font-bold text-wrap"
            style={{ color: "#14183E" }}
          >
            What people say about Us.
          </h1>
        </div>
      </div>
      <div>
        <Image
          className="relative right-10"
          width={50}
          height={50}
          src={"/Image1.png"}
          alt="image"
        />
        <div className="relative w-[450px] h-80 overflow-hidden">
          <Card
            comments="“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”"
            author="Mike taylor"
            city="Lahore, Pakistan"
          />
          <Card
            comments="“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”"
            author="Chris Thomas"
            city="CEO of Red Button"
          />
          <Card
            comments="“An invaluable addition to our team, always bringing insight and clarity.”"
            author="Samantha Green"
            city="Head of Marketing, BlueSky Innovations"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
