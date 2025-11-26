import React, { useState } from "react";
import { Link } from "react-router-dom";
// icons
import { IoIosArrowForward } from "react-icons/io";
import  {FaPhone } from "react-icons/fa";

import { FaWarehouse } from "react-icons/fa6";
import { FaMicrosoft } from "react-icons/fa6";
import { FaDoorOpen } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import { FaCarTunnel } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { FaPlaceOfWorship } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaHandSparkles } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosCheckmark } from "react-icons/io";

// Assets
import Cleaner from "../assets/just.jpg";
import Team_Image from "../assets/Team_img.jpg";
import Cleaner_Lady from "../assets/LadyCleaner.jpg";

const pricingPlans = [
  {
    name: "House Cleaning",
    price: "40,000",
    unit: "per session",
    description: "Perfect for regular home maintenance",
    features: [
      "Living room & bedrooms",
      "Kitchen cleaning",
      "Bathroom sanitization",
      "Dusting & vacuuming",
      "Trash removal"
    ],
    popular: false
  },
  {
    name: "Office Cleaning",
    price: "80,000",
    unit: "per session",
    description: "Keep your workspace professional",
    features: [
      "Workstation cleaning",
      "Conference room setup",
      "Restroom sanitization",
      "Floor mopping",
      "Window cleaning"
    ],
    popular: true
  },
  {
    name: "Deep Cleaning",
    price: "120,000",
    unit: "per session",
    description: "Thorough cleaning for your space",
    features: [
      "All standard cleaning",
      "Behind appliances",
      "Inside cabinets",
      "Grout & tile scrubbing",
      "Detailed sanitization"
    ],
    popular: false
  },
  {
    name: "Move-In/Move-Out",
    price: "150,000",
    unit: "per property",
    description: "Complete property cleaning",
    features: [
      "Empty property cleaning",
      "Wall spot cleaning",
      "Deep kitchen clean",
      "All fixtures & fittings",
      "Final inspection ready"
    ],
    popular: false
  }
];

const additionalServices = [
  {
    name: "Carpet/Sofa Cleaning",
    price: "25,000",
    unit: "per item"
  },
  {
    name: "Laundry Service",
    price: "5,000",
    unit: "per kg"
  }
];

const services = [
  {
    name: "House Cleaning",
    description:
      "Professional cleaning for your entire home with attention to detail.",
    icon: <HiHome className="text-[60px]" />
  },
  {
    name: "Warehouse Cleaning",
    description:
      "Industrial-grade cleaning for warehouses and storage facilities.",
    icon: <FaWarehouse className="text-[60px]" />
  },
  {
    name: "Laundry Service",
    description: "Expert laundry services with eco-friendly detergents.",
    icon: <FaMicrosoft className="text-[60px]" />
  },
  {
    name: "Car Wash Service",
    description: "Complete interior and exterior vehicle cleaning.",
    icon: <FaCarTunnel className="text-[60px]" />
  },
  {
    name: "Office Cleaning",
    description: "Daily or weekly office cleaning to maintain professionalism.",
    icon: <FaDoorOpen className="text-[60px]" />
  },
  {
    name: "Carpet Cleaning",
    description: "Deep cleaning and stain removal for all carpet types.",
    icon: <HiHome className="text-[60px]" />
  }
];

const features = [
  {
    title: "Hygiene Guaranteed",
    description: "Strict safety protocols",
    icon: <IoIosCheckmarkCircle className="text-green-500 text-xl" />
  },
  {
    title: "Trained Professionals",
    description: "Certified experts",
    icon: <HiUserGroup className="text-blue-500 text-xl" />
  },
  {
    title: "Eco-Friendly",
    description: "Safe cleaning solutions",
    icon: <FaHandSparkles className="text-green-500 text-xl" />
  },
  {
    title: "Flexible Scheduling",
    description: "Available 24/7",
    icon: <FaCalendarAlt className="text-purple-500 text-xl" />
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    rating: 5,
    comment: "Outstanding service! My home has never been cleaner. The team is professional, punctual, and pays attention to every detail.",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    rating: 5,
    comment: "We've been using their office cleaning service for 2 years. Consistently excellent work and very reliable. Highly recommend!",
    image: "https://i.pravatar.cc/150?img=3"
  },
  {
    name: "Emily Rodriguez",
    role: "Property Manager",
    rating: 5,
    comment: "Best cleaning company we've worked with. They handle multiple properties for us and always exceed expectations.",
    image: "https://i.pravatar.cc/150?img=5"
  }
];

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div className="block">
      {/* Hero Section */}
      <section className="flex justify-between items-center max-w-full">
        <div className="w-1/2 p-12 space-y-4">
          <h1 className="text-5xl font-bold">
            Professionally
            <span className="text-[#f3c10d]">
              {" "}
              Cleaning <br />
              Service{" "}
            </span>
            for Your Home
          </h1>
          <p className=" text-gray-600 leading-relaxed">
            We provide exceptional cleaning services using eco-friendly products
            and trained professionals to give your space the care it deserves.
          </p>

          <div className="flex gap-4">
            <Link
            to="/services"
            className="bg-[#f3c10d] shadow-md text-center w-[180px] place-items-center flex gap-2 p-3 font-medium rounded-lg hover:bg-[#e0b209] transition"
          >
            Our Best Offer
            <IoIosArrowForward className="bg-white rounded text-lg" />
          </Link>
            <Link
            to="/services"
            className="bg-[#f3c10d]// bg-blue-100// border-2//  border-blue-800 text-blue-800 shadow-md// text-center w-[180px] place-items-center flex gap-2 p-1  font-medium rounded-lg hover:bg-[#e0b209] transition"
          >
            <FaPhone  className="bg-blue-200 p-2 w-10 h-10 rounded-full text-lg" />
            Contact Us
          </Link>
          </div>
          
        </div>

        <div className="w-1/2">
          <img
            src={Cleaner}
            className="h-[530px]  rounded-[14%_0%_25%_48%_/_3%_55%_0%_67%] w-full object-cover"
            alt="Professional cleaner at work"
            loading="lazy"
          />
        </div>
      </section>

      {/* About Us Section */}
      <section className="px-6 md:px-12 py-12 md:py-20 bg-white">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          <div className="w-full lg:w-1/2 relative flex justify-center">
            <div className="relative w-full max-w-md">
              <img
                src={Team_Image}
                loading="lazy"
                className="w-full h-[300px] md:h-[380px] rounded-2xl object-cover shadow-lg"
                alt="Our cleaning team"
              />
              <img
                src={Cleaner_Lady}
                loading="lazy"
                className="w-[200px] h-[250px] md:w-[300px] md:h-[300px] rounded-2xl absolute -bottom-10 -right-10 md:-right-20 object-cover shadow-lg border-4 border-white"
                alt="Professional cleaner"
              />
              <div className="absolute bg-white p-4 font-medium rounded-lg top-60 left-10 text-center shadow-xl">
                <h3 className="text-3xl font-bold text-blue-600">5+</h3>
                <span className="text-sm text-gray-600">
                  Years of Experience
                </span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-center">
            <div className="px-0 md:px-8 py-4">
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="text-3xl font-bold mt-2 mb-4">
                Trusted Cleaning Experts <br /> Serving You Since 2020
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We take pride in delivering top-quality cleaning services
                tailored to your needs. Our professional team uses eco-friendly
                products and advanced techniques to ensure a spotless and
                healthy environment for your family or business.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="text-gray-500 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#f3c10d] text-white font-medium rounded-lg hover:bg-[#f3c10d]/50 transition shadow-md hover:shadow-lg"
              >
                Learn More About Us
                <IoIosArrowForward className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
<section className="px-12 py-16 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
        Our Pricing
      </span>
      <h2 className="text-4xl font-bold mt-2">
        Simple & Transparent Pricing
      </h2>
      <p className="text-gray-600 mt-3 text-lg">
        Choose the service that fits your needs. All prices in UGX
      </p>
    </div>

    {/* Main Pricing Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          className={`relative rounded-2xl p-6 transition-all duration-300 ${
            plan.popular
              ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl scale-105"
              : "bg-white border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl"
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-[#f3c10d] text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
          )}

          <div className="text-center mb-6">
            <h3
              className={`text-2xl font-bold mb-2 ${
                plan.popular ? "text-white" : "text-gray-900"
              }`}
            >
              {plan.name}
            </h3>
            <p
              className={`text-sm mb-4 ${
                plan.popular ? "text-blue-100" : "text-gray-500"
              }`}
            >
              {plan.description}
            </p>
            <div className="flex items-baseline justify-center gap-1">
              <span
                className={`text-sm ${
                  plan.popular ? "text-blue-100" : "text-gray-500"
                }`}
              >
                UGX
              </span>
              <span
                className={`text-4xl font-bold ${
                  plan.popular ? "text-white" : "text-blue-600"
                }`}
              >
                {plan.price}
              </span>
            </div>
            <p
              className={`text-sm mt-1 ${
                plan.popular ? "text-blue-100" : "text-gray-500"
              }`}
            >
              {plan.unit}
            </p>
          </div>

          <ul className="space-y-3 mb-6">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <IoIosCheckmark
                  className={`text-xl flex-shrink-0 mt-0.5 ${
                    plan.popular ? "text-[#f3c10d]" : "text-green-500"
                  }`}
                />
                <span
                  className={`text-sm ${
                    plan.popular ? "text-blue-50" : "text-gray-600"
                  }`}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <Link
            to="/booking"
            className={`block w-full text-center py-3 rounded-lg font-semibold transition ${
              plan.popular
                ? "bg-[#f3c10d] text-gray-900 hover:bg-[#e0b209]"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Book Now
          </Link>
        </div>
      ))}
    </div>

    {/* Additional Services */}
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
        Additional Services
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {additionalServices.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition flex items-center justify-between"
          >
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                {service.name}
              </h4>
              <p className="text-sm text-gray-500">{service.unit}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Starting at</p>
              <p className="text-2xl font-bold text-blue-800">
                UGX {service.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Pricing Note */}
    <div className="mt-8 text-center">
      <p className="text-gray-600 text-sm">
        * Prices may vary based on property size and condition. 
        <Link to="/contact" className="text-blue-600 hover:underline ml-1">
          Contact us for a free quote
        </Link>
      </p>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section className="bg-gradient-to-r// from-blue-500/20// to-blue-600/30// bg-white backdrop-blur-2xl px-12 py-12">
        <div className="text-center">
          <p className="text-blue-600 text-sm  font-medium uppercase">
            Best Service Offer
          </p>
          <h2 className="text-4xl font-bold mt-2">
            We Offer Different Services to <br /> Clean Your Area
          </h2>

          <div className="mt-10">
            <div className="grid grid-cols-3 gap-8">
              {services.map((service, index) => (
                <article
                  key={index}
                  className="bg-white/90// bg-gradient-to-tr from-blue-950 backdrop-blur-md via-blue-800 to-blue-700 bg-[#f3c10d]/10// bg-yellow-300//  rounded-xl shadow-xs p-6 hover:shadow-xs transition"
                >
                  <div className="flex gap-4 items-center">
                    <div className="bg-blue-500/20// bg-[#f3c10d]/30// bg-white backdrop-blur-md bg-white// text-[#f3c10d] md:shadow-none rounded-full p-4">
                      {service.icon}
                    </div>
                    <h3 className="font-medium text-xl">{service.name}</h3>
                  </div>
                  <p className="mt-2 text-white">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-12 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-4xl font-bold mt-2">
              What Our Clients Say About Us
            </h2>
            <p className="text-gray-600 mt-3">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-tr from-blue-950 backdrop-blur-md via-blue-800 to-blue-700 px-12 py-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready for a Sparkling Clean Space?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Book your cleaning service today and experience the difference professional care makes
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/booking"
              className="bg-[#f3c10d] text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-[#e0b209] transition shadow-lg flex items-center gap-2"
            >
              Book Now
              <IoIosArrowForward className="text-xl" />
            </Link>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-12 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <MdEmail className="text-4xl text-blue-800" />
                  <h2 className="text-3xl font-bold">
                    Subscribe to Our Newsletter
                  </h2>
                </div>
                <p className="text-gray-600">
                  Get exclusive cleaning tips, special offers, and updates delivered to your inbox
                </p>
              </div>
              <div className="flex-1 w-full">
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md flex items-center justify-center gap-2"
                  >
                    {isSubscribed ? (
                      <>
                        <IoIosCheckmarkCircle className="text-xl" />
                        Subscribed!
                      </>
                    ) : (
                      <>
                        Subscribe Now
                        <IoIosArrowForward className="text-lg" />
                      </>
                    )}
                  </button>
                </form>
                {isSubscribed && (
                  <p className="text-green-600 text-sm mt-2 text-center">
                    Thank you for subscribing! Check your email for confirmation.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;