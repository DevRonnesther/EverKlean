import React from "react";
import { Link } from "react-router-dom";
import Our_work from "./our_work";
// images
import Banner from "../assets/banner_bouts.jpg";
import Team_Image from "../assets/Team_img.jpg";
import Cleaner_Lady from "../assets/LadyCleaner.jpg";
import Steella_Lady from "../assets/Stella.jpg";

// icons
import { IoIosArrowForward, IoIosCheckmarkCircle } from "react-icons/io";

const Abouts = () => {
  return (
    <section className="w-full px-4 md:px-8">
      {/* about banner - commented out but keeping structure for future use */}
      <div className="bg-blue-200 rounded-2xl hidden place-items-center items-center p-14 h-62">
        <img
          src={Banner}
          className="w-full hidden relative h-62"
          loading="lazy"
          alt="Company banner"
        />
        <div className="absolute bg-blue-600 top-45 mx-auto left-[40%]">
          <h3 className="text-blue-950 font-bold text-5xl">About Our Company</h3>
          <div className="flex justify-between mt-3 font-medium text-white items-center px-14">
            <p>HOME</p>
            <IoIosArrowForward />
            <p>ABOUT US</p>
          </div>
        </div>
      </div>

      {/* About Section - IMPROVED WITH RESPONSIVE DESIGN */}
      <div className="bg-white flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 p-6 md:p-12 my-8">
        <div className="w-full lg:w-1/2">
          <p className="text-blue-600 text-sm font-medium uppercase">
            About Us
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl mt-3 font-bold text-gray-900">
            Best Cleaning Services <br /> Provider Since 2020
          </h1>
          <p className="text-gray-600 mt-4 leading-relaxed">
            We are a professional cleaning service company dedicated to providing exceptional cleaning solutions 
            for homes and businesses. With years of experience and a team of skilled professionals, we ensure 
            every space we touch is spotless and sanitized to the highest standards.
          </p>
          
          {/* IMPROVED: Better spacing and alignment */}
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <IoIosCheckmarkCircle className="text-blue-800 text-2xl flex-shrink-0 mt-1" />
              <span className="text-base font-medium text-gray-700">Loaded with Professional and Honest Clean</span>
            </div>
            <div className="flex items-start gap-3">
              <IoIosCheckmarkCircle className="text-blue-800 text-2xl flex-shrink-0 mt-1" />
              <span className="text-base font-medium text-gray-700">Provide the Finest Cleaning Services</span>
            </div>
            <div className="flex items-start gap-3">
              <IoIosCheckmarkCircle className="text-blue-800 text-2xl flex-shrink-0 mt-1" />
              <span className="text-base font-medium text-gray-700">100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-start gap-3">
              <IoIosCheckmarkCircle className="text-blue-800 text-2xl flex-shrink-0 mt-1" />
              <span className="text-base font-medium text-gray-700">We are Bonded and Insured</span>
            </div>
          </div>

          {/* NEW: Stats Section for credibility */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-800">500+</h3>
              <p className="text-sm text-gray-600 mt-1">Happy Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-800">5+</h3>
              <p className="text-sm text-gray-600 mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-800">100%</h3>
              <p className="text-sm text-gray-600 mt-1">Satisfaction</p>
            </div>
          </div>
        </div>

        {/* IMPROVED: Better responsive image layout */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <img
              src={Team_Image}
              loading="lazy"
              className="w-full h-[300px] md:h-[380px] rounded-lg object-cover shadow-lg"
              alt="Our professional cleaning team in action"
            />
            <img
              src={Cleaner_Lady}
              loading="lazy"
              className="w-[180px] h-[220px] md:w-[250px] md:h-[280px] rounded-lg absolute -bottom-8 -left-8 md:-left-16 object-cover shadow-xl border-4 border-white"
              alt="Professional cleaner providing quality service"
            />
          </div>
        </div>
      </div>

      {/* IMPROVED: Mission and Vision Section with better styling */}
      <section className="flex flex-col lg:flex-row bg-blue-50 rounded-xl p-6 md:p-10 mt-12 gap-8">
        {/* Video/Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img 
            src={Steella_Lady} 
            className="w-full max-w-[550px] border-4 border-blue-800 rounded-lg shadow-lg" 
            alt="Team member Stella demonstrating our service quality" 
            loading="lazy"
          />
        </div>

        {/* IMPROVED: Better content structure and styling */}
        <div className="w-full lg:w-1/2 bg-white rounded-lg px-6 md:px-12 py-8 md:py-12 shadow-xl space-y-6">
          <p className="text-blue-900 border-b-2 border-blue-900 pb-2 text-sm font-semibold uppercase tracking-wide">
            Our Mission & Vision
          </p>
          <h2 className="text-2xl md:text-3xl text-gray-900 font-bold">
            We Have Worked Cleaning For Many Satisfied Customers
          </h2>
          
          {/* IMPROVED: Grid layout for mission and vision */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-yellow-500 flex items-center gap-2">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional cleaning services that exceed our clients' expectations 
                while maintaining the highest standards of professionalism and environmental responsibility.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-yellow-500 flex items-center gap-2">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted and preferred cleaning service provider, known for our 
                reliability, quality, and commitment to customer satisfaction.
              </p>
            </div>
          </div>

          {/* IMPROVED: Better button styling with icon */}
          <Link
            to="/services"
            className="inline-flex bg-gradient-to-tr from-yellow-500 to-yellow-400 shadow-md text-center items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg hover:shadow-lg hover:from-yellow-600 hover:to-yellow-500 text-white transition-all duration-300 mt-4"
          >
            More About Us
            <IoIosArrowForward className="text-lg" />
          </Link>
        </div>
      </section>

      {/* How We Work Section */}
      <Our_work />
    </section>
  );
};

export default Abouts;