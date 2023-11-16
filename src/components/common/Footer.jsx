import React from "react";
import estrella from "../../assets/ESTRELLA-LOGO-White-2048x384.png";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="relative w-11/12 max-w-screen-xl px-1 mx-auto md:px-10">
      <div className="flex flex-wrap items-start justify-between gap-5 py-10 text-white center fade">
        <div>
          <Link to="/">
            <img src={estrella} alt="" className=" h-[60px]" />
          </Link>
          <p className="py-3  text-base md:w-[300px] leading-7">
            We blend creativity and technology to transform and grow our
            client’s businesses.
          </p>
        </div>

        <div>
          <span className="md:text-lg font-medium text-[#FD0F00] text-base">CONATCT US</span>
          <ul className="mt-2 text-sm leading-7 md:text-base">
            <li>
              <Link>+91 7050222065</Link>
            </li>
            <li>
              <Link>+91 6204754402</Link>
            </li>
            <li>
              <Link>+91 7050984333</Link>
            </li>
            <li>
              <Link>info.estrellaadvertising@gmail.com</Link>
            </li>
            <li>
              <Link>info@estrellaadvertising.com</Link>
            </li>
          </ul>
        </div>

        <div>
          <span className="md:text-lg font-medium text-[#FD0F00] text-base">LINKS</span>
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
          <div className="flex gap-3 mt-2 text-2xl ">
            <BsFacebook className="text-white duration-300 cursor-pointer hover:text-red-500" />
            <FaLinkedin className="text-white duration-300 cursor-pointer hover:text-red-500" />
            <AiFillTwitterCircle className="text-white duration-300 cursor-pointer hover:text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
