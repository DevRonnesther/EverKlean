import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logooo.png";
// icons
import { FaFacebook, FaLinkedin, FaXTwitter, FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-r// bg-gradient-to-tr backdrop-blur-2xl  bg-yellow-950 to-blue-800// via-yellow-200// from-blue-900// to-blue-800// via-blue-950// text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={Logo} width={180} alt="EverKlean Logo" className="h-auto hidden" />
            </div>
            <div className="flex items-center">
              
              <h3 className="text-4xl font-bold ">EverKlean.com</h3>
              {/* <img src={Logo} width={180} alt="EverKlean Logo" className="h-auto" /> */}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              EverKlean provides premium cleaning services with eco-friendly products and professional staff to deliver exceptional results for your home or business.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaSquareInstagram />, label: "Instagram" },
                { icon: <FaFacebook />, label: "Facebook" },
                { icon: <FaLinkedin />, label: "LinkedIn" },
                { icon: <FaXTwitter />, label: "Twitter" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={social.label}
                  className="bg-[#f3c10d] hover:bg-amber-600 transition-colors duration-300 w-10 h-10 flex justify-center items-center rounded-full text-white text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Services", "Projects", "Pricing", "Team", "Contact Us"].map((link, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {[
                "House Cleaning",
                "Office Cleaning",
                "Furniture Cleaning",
                "Construction Cleaning",
                "Carpet Cleaning",
                "Glass Cleaning",
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Newsletter</h3>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for cleaning tips, special offers, and company updates.
            </p>
            <form className="mt-4 space-y-3">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-lg bg-gray-200 border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-500"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-200 border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-500"
              />
              <button
                type="submit"
                className="w-full bg-[#f3c10d] hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#f3c10d] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {year} EverKlean. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-amber-500 transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-amber-500 transition-colors duration-300 text-sm"
            >
              Terms of Use
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-amber-500 transition-colors duration-300 text-sm"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;