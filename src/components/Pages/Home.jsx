import React from "react";
import { Link } from "react-router-dom";
import { VscArrowSmallRight } from "react-icons/vsc";
import OurClients from "../Home/OurClients";
import OurServices from "../Home/OurServices";
import Testmonials from "../Home/Testmonials";
import { HiOutlinePaperAirplane } from "react-icons/hi2";

export default function Home() {
  return (
    <div>
      <div className="relative w-11/12 max-w-screen-xl px-1 mx-auto md:px-10">
        <div className="relative py-12 text-white ">
          <div className="fadeInDown ml-7">
            <span className="font-semibold left-arrow">
              DIGITAL MARKETING AGENCY
            </span>
          </div>
          <div className="fadeInUp">
          <h1 className="py-5 text-4xl md:text-5xl font-semibold lg:leading-[100px] lg:text-7xl">
            Creative digital agency to scale-up your biz
          </h1>
          <p className="py-5 text-xl font-medium md:leading-[50px] md:text-2xl">
            To enable businesses to grow by using our effective digital
            marketing services and people to be satisfied by finding
            convenience, fun and value in our Creativity.
          </p> 
          </div>
            <div className="block py-8 text-center md:text-left w-fit ">
          <Link to="contact">
              <button className="py-5 text-white bg-[#FD0F00] px-14 flex gap-2 items-center ">
                Let's Get Connected <VscArrowSmallRight className="text-xl " />
              </button>
          </Link>
            </div>
        </div>

        {/* our clients  */}
        <section>
          <OurClients />
        </section>

        {/* our services  */}
        <section>
          <OurServices />
        </section>
      </div>

      <div className="w-11/12 mx-auto max-w-screen-2xl">
        <marquee behavior="smooth" direction="horizontal">
          <h1 className="hidden gap-16 py-16 text-6xl font-semibold text-white md:flex">
            <p>Web Design</p> <p>Social Media</p> <p>SEO</p>
            <p>Content Writing</p>
          </h1>
        </marquee>
      </div>

      <Testmonials />

      <div className="relative w-11/12 max-w-screen-xl px-1 mx-auto">
        <div className="py-16 text-center ">
          <h1 className="py-5 text-2xl font-semibold text-center text-white md:text-4xl">
            Let's work together! Send us a message
          </h1>
          <div>
          <span className="md:text-4xl text-center font-semibold hover:text-white text-[#FD0F00] duration-300 text-xl cursor-pointer flex justify-center items-center">
          <a href="mailto:mdfirdosha37@gmail.com" className="flex gap-2"><div className="-rotate-45 "><HiOutlinePaperAirplane /></div> info@firdosh.com</a>
          </span>
          </div>
        </div>
      </div>
    </div>
  );
}
