import React from "react";
import { Services } from "../common/constent";
import { VscArrowSmallRight } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default function OurServices() {
  return (
    <div className="py-5">
      <div>
        <h1 className="py-5 pt-20 text-4xl text-center md:text-5xl text-services">
          Our Services
        </h1>
      </div>
      
      <div className="relative grid grid-cols-1 gap-3 py-5 md:grid-cols-3 gap-y-8">
        {Services.map(({ img, heading }) => (
          <div className="relative">
            <div className="Img-container">
              <img
                src={img}
                alt="serviceImage"
                className="select-none Service-Img"
                loading="lazy"
              />
            </div>
            <div className="mt-2">
              <span className="text-xl font-medium text-white duration-300 hover:text-red-600 ">
                {heading}
              </span>
              <Link to="services">
                <p className="flex items-center gap-2 text-red-600 duration-300 hover:text-white">
                  View more <VscArrowSmallRight />
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
