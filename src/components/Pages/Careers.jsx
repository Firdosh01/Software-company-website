import React, { useState } from "react";
import StepOne from "../Career/StepOne";
import StepTwo from "../Career/StepTwo";
import StepThree from "../Career/StepThree";

export default function Careers() {
  const [page, setPage] = useState(1);
  console.log(page)

  // const steps = [
  //   {
  //     id: 1,
  //     title: "Basic Info",
  //   },
  //   {
  //     id: 2,
  //     title: "Professional Details",
  //   },
  //   {
  //     id: 3,
  //     title: "Portfolio",
  //   },
  // ];


  return (
    <div>
      <div className="relative w-11/12 max-w-screen-xl px-1 mx-auto text-white md:px-10">
        <div className="flex flex-col py-5 text-center">
          <span className="text-[#FD0F00] text-lg">
            Find the career of your dreams
          </span>
          <h1 className="text-5xl max-w-[800px] text-center mx-auto py-4 font-semibold tracking-wide">
            We're more than just a workplace. We're a family.
          </h1>
          <p>
            Our goal is to make that process as simple as possible for you, and
            to establish a work atmosphere that you’ll enjoy going to every day.
            Begin your adventure with us.
          </p>
        </div>

        <div>
          <div>
            <p>Steps / {page}</p>
          </div>

          {page === 1 && <StepOne />}
          {page === 2 && <StepTwo />}
          {page === 3 && <StepThree />}

          <div>
            <div className="flex flex-col gap-3 py-5">
              {page > 1 && (
                <button
                  className="bg-[#FD0F00] text-white hover:bg-white hover:text-black p-4 duration-300"
                  onClick={() => {
                    const prevPage = page - 1;
                    setPage(prevPage)
                  }}
                >
                  Previos
                </button>
              )}
              {page < 3 && (
                <button
                  className="bg-[#FD0F00] text-white hover:bg-white hover:text-black p-4 duration-300"
                  onClick={() => {
                    const nextPage = page + 1;
                    setPage(nextPage)
                  }}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
