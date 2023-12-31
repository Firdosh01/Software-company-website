import React, { useState } from "react";
import StepOne from "../Career/StepOne";
import StepTwo from "../Career/StepTwo";
import StepThree from "../Career/StepThree";
import { FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";

export default function Careers() {
  const [page, setPage] = useState(1);
  console.log(page);
  const [formData, setFormData] = useState({
    // stepOneData
    FullName: "",
    ContactNo: "",
    Email: "",
    AboutUs: "Ads",
    City: "Ranchi",
    Address: "",

    // stepTwoData
    ExperienceinYears: "",
    HighestQualification: "PG",
    CurrentDesignation: "",
    CurrentEmployer: "",
    CurrentSalary: "",
    ExpectedSalary: "",
    NoticePeriod: "",
    SkillSet: "",

    // stepThreeData
    Resume: "",
    Portfolio: "",
    PortfolioLink: "",
    ExperienceDetails: "",
  });

  const changeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const clearForm = () => {
    setFormData({
      // stepOneData
      FullName: "",
      ContactNo: "",
      Email: "",
      AboutUs: "Ads",
      City: "Ranchi",
      Address: "",

      // stepTwoData
      ExperienceinYears: "",
      HighestQualification: "PG",
      CurrentDesignation: "",
      CurrentEmployer: "",
      CurrentSalary: "",
      ExpectedSalary: "",
      NoticePeriod: "",
      SkillSet: "",

      // stepThreeData
      Resume: "",
      Portfolio: "",
      PortfolioLink: "",
      ExperienceDetails: "",
    });
  };

  const steps = [
    {
      id: 1,
      title: "Basic Info",
    },
    {
      id: 2,
      title: "Professional Details",
    },
    {
      id: 3,
      title: "Portfolio",
    },
  ];

  return (
    <div>
      <div className="relative w-11/12 max-w-screen-xl px-1 mx-auto text-white md:px-10">
        <div className="flex flex-col py-5 text-center">
          <span className="text-[#FD0F00] text-lg">
            Find the career of your dreams
          </span>
          <h1 className="md:text-5xl text-2xl max-w-[800px] text-center mx-auto py-4 font-semibold tracking-wide">
            We're more than just a workplace. We're a family.
          </h1>
          <p>
            Our goal is to make that process as simple as possible for you, and
            to establish a work atmosphere that you’ll enjoy going to every day.
            Begin your adventure with us.
          </p>
        </div>

        <div>
          <div className="relative flex justify-center w-full py-3 mb-2">
            {steps.map((item) => (
              <>
                <div className="flex flex-col items-center " key={item.id}>
                  <button
                    className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] 
                       ${
                         page === item.id
                           ? "bg-white border-yellow-50 text-black"
                           : "text-white bg-[#FD0F00]"
                       } 
                        ${page > item.id && "bg-yellow-50 text-yellow-50"}`}
                  >
                    {page > item.id ? (
                      <FaCheck className="font-bold text-black" />
                    ) : (
                      item.id
                    )}
                  </button>
                  <p className="text-xs text-center md:text-sm text-[#FD0F00]">
                    {item.title}
                  </p>
                </div>
                {item.id !== steps.length && (
                  <>
                    <div
                      className={`h-[calc(34px/2)] w-[33%]   border-b-2 ${
                        page > item.id ? "border-yellow-50" : "border-red-500"
                      } `}
                    >
                      {" "}
                    </div>
                  </>
                )}{" "}
              </>
            ))}
          </div>

          {page === 1 && (
            <StepOne
              formData={formData}
              setFormData={setFormData}
              changeHandler={changeHandler}
            />
          )}
          {page === 2 && (
            <StepTwo
              formData={formData}
              setFormData={setFormData}
              changeHandler={changeHandler}
            />
          )}
          {page === 3 && (
            <StepThree
              formData={formData}
              setFormData={setFormData}
              changeHandler={changeHandler}
            />
          )}

          <div>
            <div className="flex gap-3 py-5">
              {page > 1 && (
                <button
                  className="bg-[#FD0F00] text-white hover:bg-white hover:text-black p-4 duration-300 w-full"
                  onClick={() => {
                    setPage((currPage) => currPage - 1);
                  }}
                >
                  Previos
                </button>
              )}

              <button
                className="bg-[#FD0F00] text-white hover:bg-white hover:text-black p-4 duration-300 w-full"
                onClick={() => {
                  if (page < steps.length) {
                    setPage((currPage) => currPage + 1);
                  } else {
                    console.log("Form Data", formData);
                    toast.success("application submited")
                    setPage(1)
                    clearForm();
                  }
                }}
              >
                {page === steps.length ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
