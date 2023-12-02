import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Pagination, Autoplay } from "swiper/modules";
import { Clients } from "../common/constent";
import {Swiper, SwiperSlide} from "swiper/react";

export default function OurClients() {
  return (
    <div>
      <div className="hidden px-5 md:block">
        <div>
          <h1 className="py-5 pt-10 text-2xl font-semibold text-center text-white md:text-3xl lg:text-5xl">
            Our Top Clients
          </h1>
        </div>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <div className="flex gap-6">
            {Clients.map((client) => (
              <SwiperSlide>
                <div key={client.id}>
                <img
                  src={client.logo}
                  alt="ClientLogo"
                  width={200}
                  loading="lazy"
                />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
}
