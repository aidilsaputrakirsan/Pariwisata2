import React from "react";

interface Props {
  comments: string;
  author: string;
  city: string;
}

function Card(props: Props) {
  return (
    <div className="w-96 h-40 bg-white shadow-xl rounded-md mb-4 animate-move-up delay-0">
      <p
        className="text-base font-extralight pt-4 px-6"
        style={{ color: "#5E6282" }}
      >
        {props.comments}
      </p>
      <h3
        className="text-lg font-semibold px-6 pt-4"
        style={{ color: "#5E6282" }}
      >
        {props.author}
      </h3>
      <p className="text-sm font-extralight px-6" style={{ color: "#5E6282" }}>
        {props.city}
      </p>
    </div>
  );
}

export default Card;
