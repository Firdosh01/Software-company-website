import React from "react";
import { Link } from "react-router-dom";
import { VscArrowSmallRight } from "react-icons/vsc";

export default function Home() {
  return (
    <div>
      <div className="relative w-11/12 max-w-screen-xl px-1 mx-auto md:px-10">
        <div className="relative py-12 text-white home">
          <span className="font-semibold ml-7 left-arrow">
            DIGITAL MARKETING AGENCY
          </span>
          <h1 className="py-5 text-4xl md:text-5xl font-semibold lg:leading-[100px] lg:text-7xl">
            Creative digital agency to scale-up your biz
          </h1>
          <p className="py-5 text-xl font-medium md:leading-[50px] md:text-2xl">
            To enable businesses to grow by using our effective digital
            marketing services and people to be satisfied by finding
            convenience, fun and value in our Creativity.
          </p>
          <Link to="contact">
            <div className="py-8 text-center md:text-left">
              <button className="py-5 text-white bg-[#FD0F00] px-14 flex gap-2 items-center">
                Let's Get Connected <VscArrowSmallRight className="text-xl " />
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
