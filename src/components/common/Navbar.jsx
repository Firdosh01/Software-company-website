import React, { useEffect, useState } from "react";
import Estrella from "../../assets/ESTRELLA-LOGO-White-2048x384.png";
import { navigation } from "../common/constent";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { TbClearAll } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [visible, setVisible] = useState(false)

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 30) {
              setVisible(true)
          }
          else {
              setVisible(false)
          }
      };
      window.addEventListener('scroll', handleScroll) 

      return () => {
          window.addEventListener('scroll', handleScroll)

      }
  })

  return (
    <div>
      <div className="relative max-w-screen-xl px-3 mx-auto md:w-11/12 md:px-5">
        <div className="flex items-center justify-between py-3">
          <div className="fadeInLeft">
            <Link to="/">
              <img
                src={Estrella}
                alt="EstrellaLogo"
                className="w-[90%] h-[40px] aspect-auto"
              />
            </Link>
          </div>

          <nav>
            <ul className="items-center hidden gap-0 lg:gap-3 md:flex fadeInDown">
              {navigation.map((navbar) => (
                <li
                  key={navbar.id}
                  className="relative flex items-center py-5 text-lg font-medium text-white duration-500 lg:gap-2 hover:text-red-600 fadeInDown"
                >
                  <NavLink to={navbar.path}>{navbar.nav}</NavLink>

                  <div className="flex items-center gap-3 group">
                    <p>{navbar.Port}</p>
                    <Link className="hover:rotate-[180deg] transition duration-500">
                      {navbar.downAroow}
                    </Link>
                    <NavLink to="/website-designing">
                      <div className="absolute  hidden text-white bg-[#1D1D1D] group-hover:block group-hover:top-12 w-[200px] py-2 px-4 left-[50%] -translate-x-[50%] ">
                        Website Designing
                      </div>
                    </NavLink>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          <div className="block text-4xl text-white cursor-pointer md:hidden">
            <div onClick={() => setMenu(!menu)}>
              {menu ? <IoMdClose /> : <TbClearAll />}
            </div>
          </div>

          {menu && (
            <ul
              className={`${
                menu ? "left-0" : "-left-[100%] delay-1000 duration-1000"
              } fixed top-0  md:hidden w-[70%] z-10 h-screen bg-black px-3 py-3 transition duration-500 ease-in-out delay-700`}
            >
              <div>
                <Link to="/">
                  <img src={Estrella} alt="" className="w-[75%] h-[40px]" />
                </Link>
              </div>
              {navigation.map((navbar) => (
                <li
                  key={navbar.id}
                  className="relative flex items-center py-3 text-lg font-medium text-white md:gap-2 hover:text-red-600 "
                >
                  <NavLink
                    onClick={() => setMenu(!menu)}
                    to={navbar.path}
                    smooth
                    duration={500}
                  >
                    {navbar.nav}
                  </NavLink>

                  <div className="flex items-center gap-3 group">
                    <p>{navbar.Port}</p>
                    <Link className="hover:rotate-[180deg] transition duration-500">
                      {navbar.downAroow}
                    </Link>
                    <NavLink to="/website-designing">
                      <div className="absolute  hidden text-white bg-[#1D1D1D] group-hover:block group-hover:top-12 w-[200px] py-2 px-4 left-[50%] -translate-x-[50%] ">
                        Website Designing
                      </div>
                    </NavLink>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className={`${visible ? "md:right-[100px] right-[30px] duration-700" : "-right-full" } WhatsApp-cont `}>
          <a href="https://api.whatsapp.com/send/?phone=%2B918102607915&text&type=phone_number&app_absent=0" target="_blank">
            <div className="bg-[#2ecb71] text-white w-[50px] h-[50px] flex justify-center items-center text-3xl rounded-full">
              <IoLogoWhatsapp />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
