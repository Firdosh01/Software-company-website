import React from "react";
import Estrella from '../../assets/ESTRELLA-LOGO-White-2048x384.png'
import {navigation} from '../common/constent'
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  return (
    <div>
      <div className="relative w-11/12 max-w-screen-xl px-1 mx-auto md:px-5">
        <div className="flex items-center justify-between py-5">
          <div className="fadeInLeft">
            <Link to="/">
              <img src={Estrella} alt="" className="w-[90%] h-[40px]" />
            </Link>
          </div>

          <nav>
            <ul className="items-center hidden gap-5 md:flex fadeInDown">
              {navigation.map((navbar) => (
                <li className="relative flex items-center gap-2 text-lg font-medium text-white duration-500 hover:text-red-600 fadeInDown">
                  <NavLink to={navbar.path}>{navbar.nav}</NavLink>
                  <div className="flex flex-col group">
                  <Link className="hover:rotate-[180deg] transition duration-500">{navbar.downAroow}</Link>
                  <div className="absolute  hidden text-white bg-[#1D1D1D] group-hover:block group-hover:top-9 w-[200px] py-9 px-4 left-[50%] -translate-x-[50%] ">
                    <p>Website Designing</p>
                  </div>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          <div className="block text-4xl text-white cursor-pointer md:hidden">
            <FiMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
