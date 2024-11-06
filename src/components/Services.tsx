import React from "react";
import Card from "./ServiceCard";

function Services() {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center items-center flex-col pb-10">
          <h3 className="text-lg font-semibold" style={{ color: "#5E6282" }}>
            CATEGORY
          </h3>
          <h1 className="text-5xl font-bold" style={{ color: "#14183E" }}>
            We Offer Best Services
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center flex-row gap-20 flex-wrap">
        <Card
          category="Calculated Weather"
          description="Built Wicket longer admire do barton vanity itself do in it."
          imageSrc="/Group 48.png"
          imageSize={80}
        />
        <Card
          category="Best Flights"
          description="Engrossed listening. Park gate sell they west hard for the."
          imageSrc="/Group 51.png"
          imageSize={100}
        />
        <Card
          category="Local Events"
          description="Barton vanity itself do in it. Preferd to men it engrossed listening. "
          imageSrc="/Group 50.png"
          imageSize={60}
        />
        <Card
          category="Customization"
          description="We deliver outsourced aviation services for military customers"
          imageSrc="/Group 49.png"
          imageSize={65}
        />
      </div>
    </>
  );
}

export default Services;
