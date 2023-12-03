import React from "react";
import estrella from "../../assets/ESTRELLA-LOGO-White-2048x384.png";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="relative w-11/12 max-w-screen-xl px-1 mx-auto md:px-5">
      <div className="relative pt-3">
        <div className="flex items-center justify-center text-white">
          <div onClick={() => scrollToTop()} className="p-3 mb-3 text-2xl text-center cursor-pointer">
            <FaArrowUp  />
          </div>
        </div>
        <div className="absolute left-0 md:w-[48%] h-[1px] bg-white top-1/2 w-[40%]"></div>
        <div className="absolute right-0 md:w-[48%] h-[1px] bg-white top-1/2 w-[40%]"></div>
      </div>
      <div className="flex flex-wrap items-start gap-5 py-10 text-white md:gap-24 center fade">
        <div>
          <Link to="/">
            <img
              src={estrella}
              alt="EstrellaImage"
              className="md:w-[80%] md:h-[50px] h-[40px]"
            />
          </Link>
          <p className="py-3  text-base md:w-[300px] leading-7">
            We blend creativity and technology to transform and grow our
            client’s businesses.
          </p>
        </div>

        <div>
          <span className="md:text-lg font-medium text-[#FD0F00] text-base">
            CONATCT US
          </span>
          <ul className="mt-2 text-sm leading-7 md:text-base">
            <li>
              <a href="tel:620000000001">+91 62000000789</a>
            </li>
            <li>
              <a href="tel:620000007891">+91 620000007891</a>
            </li>
            <li>
              <a href="tel:6200000078912">+91 6200000078912</a>
            </li>
            <li>
              <a href="mailto:mdfirdosha37@gmail.com">firdosha@gmail.com</a>
            </li>
            <li>
              <a href="mailto:mdfirdosha37@gmail.com">info@firdosh.com</a>
            </li>
          </ul>
        </div>

        <div>
          <span className="md:text-lg font-medium text-[#FD0F00] text-base">
            LINKS
          </span>
          <div className="mt-2 text-sm leading-7 md:text-base">
            <p>About Us</p>
            <p>Contact</p>
            <p>Services</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        <div>
          <span className=" md:text-lg text-base font-medium text-[#FD0F00]">
            FOLLOW US ON
          </span>
          <div className="flex gap-3 mt-2 text-2xl">
            <a href="/">
              <BsFacebook className="text-white duration-300 cursor-pointer hover:text-red-500" />
            </a>
            <a href="/">
              <FaLinkedin className="text-white duration-300 cursor-pointer hover:text-red-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
