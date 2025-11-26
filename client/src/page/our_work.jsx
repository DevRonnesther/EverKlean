import React from "react";
import Image from "../assets/bc52fabb16921d546cc380cc0561a530.jpg";
import Image01 from "../assets/just.jpg";
import Image02 from "../assets/be72723df1cef29c0f220623b15b8b08.jpg";

// Icons for each step (you can replace with actual icons)
import { FaClipboardList, FaSprayCan, FaHome } from "react-icons/fa";

const workSteps = [
  {
    id: 1,
    Image: Image01,
    icon: <FaClipboardList className="text-4xl" />,
    title: "Choose a Cleaning Plan",
    description:
      "Select from our range of customized cleaning packages that fit your specific needs and budget. We offer flexible scheduling and personalized service options."
  },
  {
    id: 2,
    Image: Image,
    icon: <FaSprayCan className="text-4xl" />,
    title: "We Clean",
    description:
      "Our professional team arrives on time with all necessary equipment and eco-friendly cleaning products to deliver exceptional results every time."
  },
  {
    id: 3,
    Image: Image02,
    icon: <FaHome className="text-4xl" />,
    title: "Back to Comfort",
    description:
      "Enjoy your spotless, fresh space with peace of mind. We ensure every corner is thoroughly cleaned to the highest standards of quality."
  }
];

const OurWork = () => {
  return (
    <div className="py-12 px-4 md:px-8 lg:px-12 space-y-8 bg-gradient-to-b from-white to-blue-50">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide">
          How We Work
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          Everklean Working Process
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Our simple three-step process ensures you get the best cleaning service with minimal hassle
        </p>
      </div>

      {/* Steps Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 mt-12">
        {workSteps.map((step, index) => (
          <div 
            key={step.id} 
            className="group relative flex flex-col items-center space-y-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Image Container */}
            <div className="relative w-full h-[250px] overflow-hidden rounded-xl">
              <img
                src={step.Image}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt={`Step ${step.id}: ${step.title}`}
                loading="lazy"
              />
              {/* Overlay with icon on hover */}
              <div className="absolute inset-0 bg-blue-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                {step.icon}
              </div>
            </div>

            {/* Step Number with Connecting Line */}
            <div className="relative flex items-center justify-center w-full">
              {/* Left Line */}
              {index !== 0 && (
                <div className="hidden lg:block absolute left-0 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-yellow-500 -translate-x-full" />
              )}
              
              {/* Number Badge */}
              <div className="relative z-10 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900 h-16 w-16 font-bold rounded-full flex items-center justify-center text-2xl shadow-lg ring-4 ring-white">
                {step.id}
              </div>

              {/* Right Line */}
              {index !== workSteps.length - 1 && (
                <div className="hidden lg:block absolute right-0 w-1/2 h-0.5 bg-gradient-to-l from-transparent via-yellow-400 to-yellow-500 translate-x-full" />
              )}
            </div>

            {/* Content */}
            <div className="text-center space-y-3 flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-blue-950">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {step.description}
              </p>
            </div>

            {/* Step Label */}
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Step {step.id}
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <div className="text-center mt-12 pt-8 border-t border-gray-200">
        <p className="text-gray-700 text-lg mb-4">
          Ready to experience the Everklean difference?
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
          Get Started Today
        </button>
      </div>
    </div>
  );
};

export default OurWork;