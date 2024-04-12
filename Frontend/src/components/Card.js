import React from "react";
import design1 from "../assets/images/design1.png";
import design2 from "../assets/images/design2.png";
import design3 from "../assets/images/design3.png";

function Avatar({ title, description, imageUrl }) {
  return (
    <div className="flex  justify-center  items-center mt-16">
      <div className=" flex flex-col  items-center border border-gray-300 w-64 h-64 mx-6 my-6 rounded-3xl ">
        <div className=" w-52">
          {" "}
          <img src={imageUrl} alt="" className="w-48" />
          <p className="text-center mt-4 font-extrabold">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="flex flex-row justify-center ">
      <Avatar
        imageUrl={design1}
        title={"I'm a designer looking to share my work"}
      />
      <Avatar imageUrl={design2} title={"I'm looking to hire a designer"} />
      <Avatar imageUrl={design3} title={"I'm looking for design inspiration"} />
    </div>
  );
}
