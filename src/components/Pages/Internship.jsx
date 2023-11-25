import React from "react";
import firstImg from "../../assets/34.jpg";
import secondImg from "../../assets/man.jpg";
import slideOneImg from "../../assets/09.jpg";
import slideTwoImg from "../../assets/010.jpg";
import slideThreeImg from "../../assets/011.jpg";
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

          <div className=" lg:w-[50%] relative">
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
        <section>
          <div className="flex flex-col justify-between py-10 lg:items-center lg:flex-row pb-44">
            <div className="lg:w-[58%] md:block hidden">
              <div className="relative">
                <div className="slideOneImg">
                  <div className="textOneImg">
                    <p className="text-lg">
                      Learn how to create marketing plans for a medical
                      institution with a focus on public welfare.
                    </p>
                    <span className="pt-2 text-2xl font-semibold">
                      Marketing Plan
                    </span>
                    <span className="pt-2 text-2xl font-semibold">
                      Other Market Reach
                    </span>
                    <span className="pt-2 text-2xl font-semibold">
                      Result Tracking
                    </span>
                  </div>
                </div>
                <div className="slideTwoImg">
                <div className="textTwoImg">
                    <p className="text-lg">
                    Increasing customer retention through generating more trust among the masses.
                    </p>
                    <span className="pt-1 text-xl font-semibold">
                    Marketing Camp Referral
                    </span>
                    <span className="pt-1 text-xl font-semibold">
                    Generation Customer
                    </span>
                    <span className="pt-1 text-xl font-semibold">
                    Classification
                    </span>
                  </div>
                </div>
                
              </div>
              <div className=" slideThreeImg">
                  <div className="textThreeImg">
                    <p>It is very important to learn & excel in digital skills to develop any enterprise.</p>
                    <span className="pt-1 text-xl font-semibold">
                    Social Media Planning
                    </span>
                    <span className="pt-1 text-xl font-semibold">
                    Lead Management
                    </span>
                    <span className="pt-1 text-xl font-semibold">
                    FB & Google Ads
                    </span>
                  </div>
                </div>
            </div>
            <div className="lg:w-[40%] md:pt-14">
              <h1 className="md:text-6xl text-[#FD0F00] font-semibold pb-2 text-3xl">
                Join Us Today
              </h1>
              <form>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-2 py-1">
                    <div className="w-full">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-2 py-3 font-bold text-white bg-black border rounded outline-none select-none border-slate-400 "
                      />
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        placeholder="Your Email"
                        className="w-full px-2 py-3 font-bold text-white bg-black border rounded outline-none select-none border-slate-400"
                      />
                    </div>
                  </div>
                  <div className="py-1">
                    <input
                      type="text"
                      placeholder="Contact No."
                      className="w-full px-2 py-3 font-bold text-white bg-black border rounded outline-none select-none border-slate-400"
                    />
                  </div>
                  <div className="py-1">
                    <input
                      type="text"
                      placeholder="College"
                      className="w-full px-2 py-3 font-bold text-white bg-black border rounded outline-none select-none border-slate-400"
                    />
                  </div>
                  <div className="py-1">
                    <textarea
                      name=""
                      id=""
                      placeholder="Address"
                      className="w-full px-2 py-3 font-bold bg-black border rounded outline-none resize-y border-slate-400 min-h-[50px] duration-300 select-none"
                    ></textarea>
                  </div>
                  <div className="">
                    <button className="py-3 w-full text-white hover:bg-white hover:text-black duration-300 bg-[#FD0F00] px-10 flex gap-2 items-center text-center justify-center uppercase">
                      send message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
