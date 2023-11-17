import React from "react";
import { Link } from "react-router-dom";

export default function Card({icon, heading, desc}) {
  return (
    <div>
      <div className="py-5  px-3 bg-[#1D1D1D]  rounded hover:border-[#FD0F00] border border-[#1D1D1D] duration-300">
        <div className="text-4xl text-[#FD0F00]">
          <Link>{icon}</Link>
        </div>
        <h1 className="py-3 text-lg font-semibold md:text-2xl">{heading}</h1>
        <p className="text-xs md:text-sm">{desc}</p>
      </div>
    </div>
  );
}
