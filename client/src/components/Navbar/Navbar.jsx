import React, { useState } from "react";
// import { FaCartShopping } from "react-icons/fa6";
// import { FaPhone } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../assets/Brandlogo.png"
// import { TbBrandWhatsappFilled } from "react-icons/tb";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const HeaderLinks = [
  {
    Display: "Home",
    Link: "/",
    Icon: <IoIosArrowForward className="rotate-90 place-items-baseline" />,
  },
  {
    Display: "About us",
    Link: "/aboutUs",
    Icon: <IoIosArrowForward className="rotate-90 place-items-baseline" />,
  },
  {
    Display: "Service",
    Link: "/service",
    Icon: <IoIosArrowForward className="rotate-90 place-items-baseline" />,
  },
  {
    Display: "Pages",
    Link: "/service",
    Icon: <IoIosArrowForward className="rotate-90 place-items-baseline" />,
  },
  {
    Display: "Contact us",
    Link: "/contactUs",
    Icon: <IoIosArrowForward className="rotate-90 place-items-baseline" />,
  }
];

const Navbar = () => {
  // const [isActive, setIsActive] = useState(true)
  // className={({isActive}) => `group flex  items-center relative gap-4 lg:gap-2 px-6 lg:p-2 p-2  lg:rounded-lg rounded-sm ${isActive ? 'bg-green-500/20' : 'hover:bg-white/20'}`}
  return (
    <header>
      <div className="w-full bg-[#f3c10d] h-[32px] flex justify-center items-center">
        <div className="w-full  justify-items-start">
          <div className="flex px-12  justify-center items-center gap-8 h-10 p-0.5">
            <h3 className="flex place-items-center text-sm text-white font-medium gap-2 ">
              <FaRegClock className="text-2xl text-blue-800" /> 08:00 - 17:00
            </h3>
            <h3 className="flex place-items-center text-sm text-white font-medium gap-2 ">
              {" "}
              <MdOutlineLocationOn className="text-2xl text-blue-800" />
              2nd Plaza Street
            </h3>
            <h3 className="flex place-items-center text-sm text-white font-medium gap-2 ">
              {" "}
              <HiOutlineMail className="text-2xl text-blue-800" /> EverKlean@gmail.com
            </h3>
          </div>
        </div>

        {/* social media */}
        <div className=" bg-blue-800 flex text-2xl justify-center items-center  h-10 w-200 p-0.5">
          <div className="flex text-2xl text-white justify-items-center items-center gap-8">
            <FaSquareInstagram />
            <FaFacebook />
            <FaLinkedin />
            <FaXTwitter />
          </div>
        </div>
      </div>

      {/* NavLink section */}
      <div className="px-[50px] py-2  bg-white  sticky top-0 z-50  place-items-center max-w-full flex justify-between items-center ">
        {/* ------- logo -------- */}
        <div>
          <h3 className="text-xl font-bold text-blue-800 ">EverKlean.com</h3>
          <img src="" className="hidden" alt="" />
          <div className="hidden">
            <img src={Logo} loading="lazy" className="w-[100px]" alt="" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-between text-blue-800 font-medium  gap-8 items-center">
          {HeaderLinks.map((Data, index) => (
            <div key={index} className="">
              <NavLink
                to={Data.Link}
                className={({
                  isActive
                }) => `flex place-items-center  gap-2 rounded-b-xs font-medium/ relative
                ${isActive ? "border-b-4  border-blue-800" : " "}`}
              >
                {Data.Display}
                {/* {Data.Icon} */}
                {/* <div className={({isActive}) =>
                `absolute bg-amber-400 ${isActive ? 'bg-red-500 w-[100px] h-4' : 'bg-amber-500'}`}>God will give me Stella </div> */}
              </NavLink>
              
            </div>
          ))}
        </div>

        {/* Contact/Cart Section */}
        <div className="flex items-center space-x-4">
          <a
            href="https://wa.me/256776464823"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-[#f3c10d] hover:bg-blue-400 px-4 py-2 rounded-lg transition-colors"
          >
            <span className="hidden sm:inline text-white font-medium">
              Get A Quote
            </span>
          </a>

          {/* Mobile Menu Button (would need state and handler) */}
          <button className="md:hidden  text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu (would need state to toggle) */}
        <div className="md:hidden hidden bg-white py-4 px-4 shadow-lg rounded-lg">
          <div className="flex flex-col space-y-3">
            {HeaderLinks.map((item, index) => (
              <NavLink
                key={index}
                to={item.Link}
                className={({ isActive }) => `
                  block py-2 px-4 rounded-lg transition-colors
                  ${
                    isActive
                      ? "bg-[#0edb0e]/10 text-[#0edb0e]"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
                {item.Display}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
