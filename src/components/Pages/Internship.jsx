import React from "react";
import firstImg from "../../assets/34.jpg";
import secondImg from "../../assets/man.jpg";
export default function Internship() {
  return (
    <div>
      <div className="relative w-11/12 max-w-screen-xl px-1 mx-auto md:px-10">
        <div className="flex flex-col justify-between gap-5 py-16 lg:flex-row lg:items-center">
          <div className="lg:w-[50%] relative">
            <span className=" ml-7 about-arrow text-[#FD0F00] ">
              INTERNSHIP
            </span>
            <h1 className="text-4xl font-semibold lg:leading-[80px]  text-white lg:text-7xl md:text-5xl pt-5">
              Nurturing Youth In The Digital Field.
            </h1>
            <p className="py-5 text-sm font-medium text-white md:text-base">
              Experience day-by-day work culture includes marketing, market
              research, software/tool and managing the social media .as well as
              Website.
            </p>
          </div>

          <div  className=" lg:w-[50%] relative">
            <div className="flex">
              <img
                src={secondImg}
                alt=""
                className="object-cover max-w-[50%] md:h-[100%]"
              />
              <img
                src={firstImg}
                alt=""
                className="object-cove max-w-[50%] md:h-[100%] bg-center"
              />
            </div>
            <div className="absolute bg-[#FD0F00] text-center py-3 px-7 text-white md:-bottom-9 -bottom-16 left-[20%]">
              <h1 className="text-3xl font-semibold md:text-7xl">7</h1>
              <span className="uppercase ">Years of experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
