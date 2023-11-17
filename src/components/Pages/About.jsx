import React, { useEffect, useState } from "react";
import ImageOne from "../../assets/34.jpg";
import { VscArrowSmallRight } from "react-icons/vsc";
import { AboutCard } from "../common/constent";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div className="relative w-11/12 max-w-screen-xl px-1 mx-auto text-white md:px-10">
        <div className="relative flex flex-col items-center justify-between gap-5 py-10 md:flex-row">
          <div className="md:w-[50%] relative">
            <span className=" ml-7 about-arrow text-[#FD0F00]">ABOUT US</span>
            <h1 className="text-3xl lg:text-6xl md:text-4xl">
              We help you build your online identity
            </h1>
            <p className="py-5 text-sm font-medium ">
              Hence, we understand your requirements and Infuse our interaction
              with innovative concepts around strategy, technology and creative
              design. By adopting this Wow and How approach, we turn your
              distinct needs into digital reality.
            </p>
            <div className="py-8 text-center md:text-left">
              <button className="py-2 text-white hover:bg-white hover:text-black duration-300 bg-[#FD0F00] px-10 flex gap-2 items-center">
                Get Connected <VscArrowSmallRight className="text-xl " />
              </button>
            </div>
          </div>
          <div className="md:w-[50%]">
            <img
              src={ImageOne}
              alt=""
              className="h-[650px] w-full object-cover bg-center"
            />
          </div>
        </div>

        <div className="py-10">
          <div className="relative flex flex-col">
            <span className=" ml-7 about-arrow text-[#FD0F00]">WHO WE ARE</span>
            <p className="py-5 text-sm font-medium">
              Founded on April 2017, Best digital marketing agency in Ranchi &
              Kolkata. Estrella advertising is an attentive, Agile and
              trustworthy digital marketing agency that offers an extensive
              range of services to businesses. We are in love with fresh ideas
              and this also drives our passion to launch our own products that
              are value to people and Society
            </p>
            <p className="mt-3 text-sm font-medium">
              From website designing and development to E-Commerce, content
              creation, PPC, SEO, and social media management, we provide an
              integrated service to enhance your online marketing return and
              improve the top line. our products and services are modern,
              robust, and coherent and this is how we remain effective. We
              strongly believe that our success is intertwined with the success
              of the businesses and people who were served.
            </p>
          </div>
        </div>

        <div>
          <div className="py-5">
            <h1 className="text-3xl leading-[70px] text-center font-semibol">
              Innovation And Creativity At The Heart Of Everything We Do
            </h1>
          </div>
        </div>

        <div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {AboutCard.map((aboutCard) => (
                <div className="p-4 bg-[#1D1D1D] rounded hover:border-[#FD0F00] border border-[#1D1D1D] duration-300">
                  <div className="text-4xl text-[#FD0F00]">
                    <Link>{aboutCard.icon}</Link>
                  </div>
                  <h1 className="py-3 text-2xl font-semibold">
                    {aboutCard.heading}
                  </h1>
                  <p className="text-sm">{aboutCard.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-2 py-20 text-center md:grid-cols-4">
            <div className="bg-[#FD0F00] py-3 px-5 text-center rounded">
              <h1 className="py-2 text-2xl font-semibold md:text-5xl">300+</h1>
              <span className="text-base capitalize md:text-xl">ESTABLISHED</span>
            </div>
            <div className="bg-[#FD0F00] py-3 px-5 text-center rounded">
              <h1 className="py-2 text-2xl font-semibold md:text-5xl" >400+</h1>
              <span className="text-base md:text-xl">HAPPY CLIENTS</span>
            </div>
            <div className="bg-[#FD0F00] py-3 px-1 text-center rounded">
              <h1 className="py-2 text-2xl font-semibold md:text-5xl" >900+</h1>
              <span className="text-base md:text-xl">COMPLETED PROJECTS</span>
            </div>
            <div className="bg-[#FD0F00] py-3 px-5 text-center rounded">
              <h1 className="py-2 text-2xl font-semibold md:text-5xl">45+</h1>
              <span className="text-base md:text-xl">CUP OF COFFEE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
