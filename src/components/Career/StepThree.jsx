import React from "react";

export default function StepThree({formData, setFormData, changeHandler}) {
  return (
    <form>
      <div className="flex flex-col gap-4">
        {/* steps 3 */}
        <div className="flex flex-col">
          <label htmlFor="FullName">
            Resume <sup className="text-[#FD0F00] select-none">*</sup>
          </label>
          <input
            type="file"
            name="Resume"
            id="Resume"
            value={formData.Resume}
            onChange={changeHandler}
            className="w-full  py-2 font-bold"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="Portfolio">
            Portfolio <sup className="text-[#FD0F00] select-none">*</sup>
          </label>
          <input
            type="file"
            name="Portfolio"
            id="Portfolio"
            value={formData.Portfolio}
            onChange={changeHandler}
            className="w-full  py-2 font-bold"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="PortfolioLink">
          Portfolio Links <sup className="text-[#FD0F00] select-none">*</sup>
          </label>
          <input
            type="text"
            name="PortfolioLink"
            id="PortfolioLink"
            value={formData.PortfolioLink}
            onChange={changeHandler}
            placeholder="Portfolio Links (if Any)"
            className="w-full px-2 py-2 font-bold bg-black border rounded outline-none border-slate-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="ExperienceDetails">
          Experience Details <sup className="text-[#FD0F00] select-none">*</sup>
          </label>
          <textarea
            name="ExperienceDetails"
            id="ExperienceDetails"
            rows="5"
            value={formData.ExperienceDetails}
            onChange={changeHandler}
            placeholder="Experience Details"
            className="w-full px-2 py-2 font-bold bg-black border rounded outline-none resize-y border-slate-400 min-h-[150px] duration-300"
          ></textarea>
        </div> 

      </div>
    </form>
  );
}
