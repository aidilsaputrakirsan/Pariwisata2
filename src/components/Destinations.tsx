import React from "react";
import Card from "./DestinationCard";
function Destinations() {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center items-center flex-col pb-10">
          <h3 className="text-lg font-semibold" style={{ color: "#5E6282" }}>
            Top Selling
          </h3>
          <h1 className="text-5xl font-bold" style={{ color: "#14183E" }}>
            Top Destinations
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center flex-row flex-wrap">
        <Card
          country="Italy"
          city="Rome,"
          price="5.42"
          numOfDays={10}
          imageSrc="/Rome.png"
        />
        <Card
          country="UK"
          city="London,"
          price="4.2"
          numOfDays={12}
          imageSrc="/London.png"
        />

        <Card
          country="Full Europe"
          city=""
          price="15"
          numOfDays={28}
          imageSrc="/Europe.png"
        />
      </div>
    </>
  );
}

export default Destinations;
