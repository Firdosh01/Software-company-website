import React from "react";
import { Link } from "react-router-dom";

export default function Card({icon, heading, desc}) {
  return (
    <div>
      <div className="p-4 h-[230px] bg-[#1D1D1D] rounded hover:border-[#FD0F00] border border-[#1D1D1D] duration-300">
        <div className="text-4xl text-[#FD0F00]">
          <Link>{icon}</Link>
        </div>
        <h1 className="py-3 text-2xl font-semibold">{heading}</h1>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
}
