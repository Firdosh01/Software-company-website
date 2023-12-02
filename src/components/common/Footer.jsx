import React from "react";
import estrella from "../../assets/ESTRELLA-LOGO-White-2048x384.png";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="relative w-11/12 max-w-screen-xl px-1 mx-auto md:px-5">
      <div className="flex flex-wrap items-start justify-between gap-5 py-10 text-white center fade">
        <div>
          <Link to="/">
            <img src={estrella} alt="EstrellaImage" className="md:h-[60px] h-[40px]" />
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
              <a href="mailto:firdosha@gmail.com">firdosha@gmail.com</a>
            </li>
            <li>
              <a href="mailto:firdosha@gmail.com">info@firdosh.com</a>
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
            <a href="/">
              <AiFillTwitterCircle className="text-white duration-300 cursor-pointer hover:text-red-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
