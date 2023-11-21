import React, { useState } from "react";

export default function StepOne() {

    const [FullName, setFullName] = useState("")
    const [ContactNo, setContactNo] = useState("")
    const [Email, setEmail] = useState("")
      
  return (
    <form>
      <div className="flex flex-col gap-4">
        {/* steps 1 */}
        <div className="flex flex-col">
          <label htmlFor="FullName">
            Full Name <sup className="text-[#FD0F00] select-none">*</sup>
          </label>
          <input
            type="text"
            name="FullName"
            id="FullName"
            value={FullName}
            onChange={(e) => {
                setFullName(e.target.value)
            }}
            placeholder="Full Name"
            className="w-full px-2 py-2 font-bold bg-black border rounded outline-none border-slate-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="ContactNo">
            Contact No. <sup className="text-[#FD0F00] select-none">*</sup>
          </label>
          <input
            type="text"
            name="ContactNo"
            id="ContactNo"
            value={ContactNo}
            onChange={(e) => {
                setContactNo(e.target.value)
            }}
            placeholder="Contact No."
            className="w-full px-2 py-2 font-bold bg-black border rounded outline-none border-slate-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="Email">
            Email-id <sup className="text-[#FD0F00] select-none">*</sup>
          </label>
          <input
            type="email"
            name="Email"
            id="Email"
            value={Email}
            onChange={(e) => {
                setEmail(e.target.value)
            }}
            placeholder="Email"
            className="w-full px-2 py-2 font-bold bg-black border rounded outline-none border-slate-400"
          />
        </div>

        {/* <div className="flex flex-col">
          <label htmlFor="AboutUs">
            How did you hear about us?{" "}
            <sup className="text-[#FD0F00] select-none">*</sup>
          </label>
          <select
            name="AboutUs"
            id="AboutUs"
            className="w-full px-2 py-2 font-bold bg-black border rounded outline-none border-slate-400"
          >
            <option value="SocialMedia">Social Media</option>
            <option value="Ads">Ads</option>
            <option value="Refferral">Refferral</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="City">
            City Preference
            <sup className="text-[#FD0F00] select-none">*</sup>
          </label>
          <select
            name="City"
            id="City"
            className="w-full px-2 py-2 font-bold bg-black border rounded outline-none border-slate-400"
          >
            <option value="Kolkata">Kolkata</option>
            <option value="Ranchi">Ranchi</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="Address">
            Present Address <sup className="text-[#FD0F00] select-none">*</sup>
          </label>
          <textarea
            name="Address"
            id="Address"
            rows="5"
            placeholder="Message"
            className="w-full px-2 py-2 font-bold bg-black border rounded outline-none resize-y border-slate-400 min-h-[150px]"
          ></textarea>
        </div> */}
      </div>
    </form>
  );
}
