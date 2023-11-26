import React from "react";
import contactOneImg from "../../assets/35.jpg";
import contactTwoImg from "../../assets/36.jpg";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <div className="w-11/12 max-w-screen-xl px-1 mx-auto text-white relativ lg:px-10">
        <div className="flex flex-col-reverse items-center justify-between px-5 py-16 lg:flex-row">
          <div className="lg:w-[40%]">
            <div className="relative ">
              <span className=" ml-7 about-arrow text-[#FD0F00] uppercase">
                contact us
              </span>
              <h1 className="py-2 text-7xl">Get in touch</h1>
            </div>
            <form className="">
              <div>
                <div className="pt-3 ">
                  <input
                    type="text"
                    placeholder="Name"
                    name=""
                    id=""
                    className="w-full px-4 py-3 font-bold bg-black border rounded outline-none border-slate-400"
                  />
                </div>
                <div className="pt-3">
                  <input
                    type="text"
                    placeholder="Contact No."
                    name=""
                    id=""
                    className="w-full px-4 py-3 font-bold bg-black border rounded outline-none border-slate-400"
                  />
                </div>
                <div className="pt-3">
                  <input
                    type="text"
                    placeholder="Email"
                    name=""
                    id=""
                    className="w-full px-4 py-3 font-bold bg-black border rounded outline-none border-slate-400"
                  />
                </div>
                <div className="flex flex-col pt-3">
                  <label htmlFor="Services">
                    Interested Services
                    <sup className="text-[#FD0F00] select-none">*</sup>
                  </label>
                  <select
                    required
                    name="Services"
                    id="Services"
                    className="w-full px-4 py-3 font-bold bg-black border rounded outline-none border-slate-400"
                  >
                    <option value="">Social Media Marketing</option>
                    <option value="">Website Development</option>
                    <option value="">Performance Marketing</option>
                    <option value="">Consultancy</option>
                    <option value="">Search Engine Optimization</option>
                    <option value="">Content Writing</option>
                    <option value="">Shopify Development</option>
                  </select>
                </div>
                <div className="flex flex-col pt-3">
                  <label htmlFor="Services">
                    Average Monthly Marketing Budget in INR*
                    <sup className="text-[#FD0F00] select-none">*</sup>
                  </label>
                  <select
                    required
                    name="Services"
                    id="Services"
                    className="w-full px-4 py-3 font-bold bg-black border rounded outline-none border-slate-400"
                  >
                    <option value="">Rs. 0 to Rs. 1 Lakh</option>
                    <option value="">Rs. 1 to Rs. 5 Lakh</option>
                    <option value="">Rs. 5 to Rs. 10 Lakh</option>
                    <option value="">Rs. 10 to Rs. 25 Lakh</option>
                    <option value="">Rs. 25 to Rs. 1 Crore</option>
                    <option value="">More than Rs. 1 Crore</option>
                  </select>
                </div>
                <div className="pt-3">
                  <textarea
                    required
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Message"
                    className="w-full px-4 py-3 font-bold bg-black border rounded outline-none resize-y border-slate-400 min-h-[80px] duration-300"
                  ></textarea>
                </div>
                <button className="bg-[#FD0F00] text-white hover:bg-white hover:text-black p-4 duration-300 w-full mt-3">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="lg:w-[50%]">
            <div className="flex">
              <img
                src={contactOneImg}
                alt=""
                className="object-cover lg:max-w-[40%] md:h-[100%]"
              />
              <img
                src={contactTwoImg}
                alt=""
                className="object-cove lg:max-w-[40%] md:h-[100%] bg-center"
              />
            </div>
            <div>
              <ul className="pt-4 mt-2 text-sm leading-7 md:text-base">
                <li className="py-1">
                  <Link>+91 7050222065</Link>
                </li>
                <li className="py-1">
                  <Link>+91 6204754402</Link>
                </li>
                <li className="py-1">
                  <Link>+91 7050984333</Link>
                </li>
                <li className="py-1">
                  <Link>info.estrellaadvertising@gmail.com</Link>
                </li>
                <li className="py-1">
                  <Link>contact@estrellaadvertising.com</Link>
                </li>
                <li className="py-1 max-w-[70%]">
                  <Link>
                    301, 3rd Floor, Shivam Apartment, Manikpur, Rajbari, Dum
                    Dum, Kolkata, West Bengal 700079
                  </Link>
                </li>
                <li className="py-1 max-w-[70%]">
                  <Link>
                    409-410, 4th Floor, Hariom Tower, Lalpur, Ranchi,
                    Jharkhand-834001
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-1 py-10 mx-auto">
        <div className="w-[50%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1885235.684605867!2d88.432226!3d22.6500246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f783d1bb31d%3A0x631c41d5cdea2fc2!2sEstrella%20Advertising%20Private%20Limited%20%7C%20Digital%20Marketing%20Agency%20in%20Kolkata!5e0!3m2!1sen!2sus!4v1700974335367!5m2!1sen!2sus"
            className=" w-[100%] min-h-[500px]"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="w-[50%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d468871.53059729096!2d85.90322!3d23.349883!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1108cb65905%3A0xf097d26cfaf5112f!2sEstrella%20Advertising%20Pvt%20Ltd%20%7C%20Best%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sus!4v1700974577303!5m2!1sen!2sus"
            className=" w-[100%] min-h-[500px]"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
