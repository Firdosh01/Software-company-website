import React from "react";
import { Testmonial } from "../common/constent";
import ImageOne from "../../assets/012.jpg";
import ImageTwo from "../../assets/013.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Pagination, Autoplay } from "swiper/modules";

export default function Testmonials() {
  return (
    <section>
      <div className="relative w-11/12 max-w-screen-xl px-1 mx-auto md:px-10">
        <div className="mt-14">
          <h1 className="text-4xl font-semibold text-center text-white">
            What people say
          </h1>
        </div>
        <div className="flex flex-col items-center py-20 gap-7 lg:gap-10 md:gap-2 md:flex-row">
          <div className="flex md:max-w-[50%]">
            <div>
              <img
                src={ImageOne}
                alt=""
                className="lg:h-[400px] md:h-[300px]  object-cover w-full select-none"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={ImageTwo}
                alt=""
                className="lg:h-[400px] md:h-[300px] object-cover relative md:top-11 top-20 w-full select-none"
                loading="lazy"
              />
            </div>
          </div>

          <div className="md:max-w-[50%] w-full md:mt-0 mt-14">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
            >
              <div>
                {Testmonial.map((feedback) => (
                  <div>
                    <SwiperSlide>
                      <div className="text-white cursor-pointer select-none" key={feedback.id}>
                        <p className=" max-w-[500px] lg:text-base md:text-sm">{feedback.feedback}</p>
                        <div className="flex items-center gap-3 py-3">
                          <div>
                            <img
                              src={feedback.img}
                              alt=""
                              className="rounded-full w-[50px]"
                            />
                          </div>
                          <div>
                            <h1 className="font-semibold md:text-base lg:text-xl">
                              {feedback.name}
                            </h1>
                            <span className="font-semibold">
                              {feedback.SubHeading}
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
