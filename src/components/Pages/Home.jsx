import React from "react";
import { Link } from "react-router-dom";
import { VscArrowSmallRight } from "react-icons/vsc";
import OurClients from "../Home/OurClients";
import OurServices from "../Home/OurServices";

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

        {/* our clients  */}
        <div>
          <OurClients />
        </div>

        {/* our services  */}
        <div>
          <OurServices />
        </div>
      </div>

      <div className="w-11/12 mx-auto max-w-screen-2xl">
        <marquee behavior="smooth" direction="horizontal">
          <h1 className="hidden gap-16 py-16 text-6xl font-semibold text-white md:flex">
            <p>Web Design</p> <p>Social Media</p> <p>SEO</p>
            <p>Content Writing</p>
          </h1>
        </marquee>
      </div>
      
    </div>
  );
}
