import React from "react";

export default function StepTwo({formData, setFormData, changeHandler}) {
  return (
    <form>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="ExperienceinYears">
            Experience in Years
            <sup className="text-[#FD0F00] select-none"> *</sup>
          </label>
          <input
            required
            type="text"
            name="ExperienceinYears"
            id="ExperienceinYears"
            value={formData.ExperienceinYears}
            onChange={changeHandler}
            placeholder="Experience in Years"
            className="w-full px-2 py-2 font-bold bg-black border rounded outline-none border-slate-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="HighestQualification">
            Highest Qualification Held
            <sup className="text-[#FD0F00] select-none"> *</sup>
          </label>
          <select
            name="HighestQualification"
            id="HighestQualification"
            value={formData.HighestQualification}
            onChange={changeHandler}
            className="w-full px-2 py-2 font-bold bg-black border rounded outline-none border-slate-400"
          >
            <option value="PG">PG</option>
            <option value="UG">UG</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="CurrentDesignation">
            Current Designation
            <sup className="text-[#FD0F00] select-none"> *</sup>
          </label>
          <input
            required
            type="text"
            name="CurrentDesignation"
            id="CurrentDesignation"
            value={formData.CurrentDesignation}
            onChange={changeHandler}
            placeholder="Current Designation"
            className="w-full px-2 py-2 font-bold bg-black border rounded outline-none border-slate-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="CurrentEmployer">
            Current Employer
            <sup className="text-[#FD0F00] select-none"> *</sup>
          </label>
          <input
            required
            type="text"
            name="CurrentEmployer"
            id="CurrentEmployer"
            value={formData.CurrentEmployer}
            onChange={changeHandler}
            placeholder="Current Employer "
            className="w-full px-2 py-2 font-bold bg-black border rounded outline-none border-slate-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="CurrentSalary">
            Current Salary (Monthly)
            <sup className="text-[#FD0F00] select-none"> *</sup>
          </label>
          <input
            required
            type="text"
            name="CurrentSalary"
            id="CurrentSalary"
            value={formData.CurrentSalary}
            onChange={changeHandler}
            placeholder="Current Salary (Monthly)"
            className="w-full px-2 py-2 font-bold bg-black border rounded outline-none border-slate-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="ExpectedSalary">
            Expected Salary (Monthly)
            <sup className="text-[#FD0F00] select-none"> *</sup>
          </label>
          <input
            required
            type="text"
            name="ExpectedSalary"
            id="ExpectedSalary"
            value={formData.ExpectedSalary}
            onChange={changeHandler}
            placeholder="Expected Salary (Monthly)"
            className="w-full px-2 py-2 font-bold bg-black border rounded outline-none border-slate-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="NoticePeriod">
            Notice Period
            <sup className="text-[#FD0F00] select-none"> *</sup>
          </label>
          <input
            required
            type="text"
            name="NoticePeriod"
            id="NoticePeriod"
            value={formData.NoticePeriod}
            onChange={changeHandler}
            placeholder="Notice Period"
            className="w-full px-2 py-2 font-bold bg-black border rounded outline-none border-slate-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="SkillSet">
            Skill Set
            <sup className="text-[#FD0F00] select-none"> *</sup>
          </label>
          <input
            required
            type="text"
            name="SkillSet"
            id="SkillSet"
            value={formData.SkillSet}
            onChange={changeHandler}
            placeholder="Skill Set"
            className="w-full px-2 py-2 font-bold bg-black border rounded outline-none border-slate-400"
          />
        </div>
      </div>
    </form>
  );
}
