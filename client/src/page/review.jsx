import React from "react";
import image from "../assets/bro-tim.png";
import { FaQuoteLeft } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";

const clientsReview = [
  {
    clientName: "Rev . Kevin Blewett",
    reviews:
      "Having to spent hours looking for the best pork resturant i bumbed greenpork and their delicousy taste the best and the best  i have ever tasted with my family and wish to come again . Shalom",
    clientImage: image
  },
  {
    clientName: "Lamaro Estherline",
    reviews:
      "Having to spent hours looking for the best pork resturant i bumbed greenpork and their delicousy taste the best and the best  i have ever tasted with my family and wish to come again . Shalom",
    clientImage: image
  },
  {
    clientName: "Hon. Aber Gifter",
    reviews:
      "Having to spent hours looking for the best pork resturant i bumbed greenpork and their delicousy taste the best and the best  i have ever tasted with my family and wish to come again . Shalom",
    clientImage: image
  }
];
const Review = () => {
  return (
    <div className="bg-white  py-4  place-content-center  max-w-full">
      {/* ----------Customer's Review------ */}
      <div className="place-items-center mb-4">
        <div className="h-2 w-10 bg-[#0edb0e] rounded-full place-items-center"></div>
        <h3 className="text-lg font-medium text-center">
          We care about Our Customers <br /> Experience Too.
        </h3>
      </div>
      <div className="flex container   max-w-full gap-4 justify-between place-content-center items-center">
        {clientsReview.map((Data, index) => (
          <div
            key={index}
            className="bg-gray-50 text-white shadow-md hover:shadow-lg   hover:-translate-y-1 hover:bg-[#0edb0e]/20 transition-all duration-300 ease-initial  rounded-lg container"
          >
            <div className="flex justify-between gap-30">
              <div className="flex items-center  justify-between gap-2">
                <img
                  src={Data.clientImage}
                  className="w-15 p-[3px]  border-[#0edb0e] border-0 rounded-full"
                  alt=""
                />
                <div>
                  <p className="font-bold text-center text-green-800 ">
                    {Data.clientName}
                  </p>
                  <p className="text-sm text-gray-600">recently updated</p>
                </div>
              </div>
              <FaQuoteLeft className="text-green-800 text-5xl" />
            </div>
            <p className="text-black">{Data.reviews}</p>
            <div className="flex container text-yellow-400 font-bold">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </div>
          </div>
        ))}
      </div>

  </div>
  );
};

export default Review;
