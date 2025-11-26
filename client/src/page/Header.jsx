import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// icons
import { IoIosArrowForward, IoIosCheckmarkCircle, IoIosCheckmark } from "react-icons/io";
import { FaWarehouse, FaMicrosoft, FaDoorOpen, FaPlaceOfWorship, FaCalendarAlt, FaHandSparkles, FaStar, FaShieldAlt, FaClock, FaAward, FaPhone } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { HiHome, HiUserGroup, HiSparkles } from "react-icons/hi";
import { MdEmail, MdCleaningServices } from "react-icons/md";

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
  { name: "Carpet/Sofa Cleaning", price: "25,000", unit: "per item" },
  { name: "Laundry Service", price: "5,000", unit: "per kg" }
];

const services = [
  {
    name: "House Cleaning",
    description: "Professional cleaning for your entire home with attention to detail.",
    icon: <HiHome className="text-[60px]" />
  },
  {
    name: "Warehouse Cleaning",
    description: "Industrial-grade cleaning for warehouses and storage facilities.",
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
    // icon: <FaCarTunnel className="text-[60px]" />
  },
  {
    name: "Office Cleaning",
    description: "Daily or weekly office cleaning to maintain professionalism.",
    icon: <FaDoorOpen className="text-[60px]" />
  },
  {
    name: "Carpet Cleaning",
    description: "Deep cleaning and stain removal for all carpet types.",
    icon: <HiSparkles className="text-[60px]" />
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

const stats = [
  { number: "5000+", label: "Happy Clients", icon: <HiUserGroup /> },
  { number: "15000+", label: "Cleanings Done", icon: <MdCleaningServices /> },
  { number: "5+", label: "Years Experience", icon: <FaAward /> },
  { number: "100%", label: "Satisfaction Rate", icon: <FaStar /> }
];

const processSteps = [
  {
    step: "01",
    title: "Book Online",
    description: "Choose your service and pick a convenient time slot",
    icon: <FaCalendarAlt />
  },
  {
    step: "02",
    title: "We Arrive",
    description: "Our professional team arrives with all equipment",
    icon: <FaClock />
  },
  {
    step: "03",
    title: "We Clean",
    description: "Thorough cleaning using eco-friendly products",
    icon: <HiSparkles />
  },
  {
    step: "04",
    title: "You Enjoy",
    description: "Relax in your sparkling clean space",
    icon: <IoIosCheckmarkCircle />
  }
];

const faqs = [
  {
    question: "What cleaning products do you use?",
    answer: "We use eco-friendly, non-toxic cleaning products that are safe for children and pets. All our products are certified and environmentally responsible."
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer: "No, you don't need to be present. Many clients provide access instructions. We're fully insured and background-checked for your peace of mind."
  },
  {
    question: "How long does a typical cleaning take?",
    answer: "House cleaning typically takes 2-4 hours depending on size. Office cleaning varies by square footage. We'll provide an estimate during booking."
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer: "Your satisfaction is our priority. If you're not happy, contact us within 24 hours and we'll re-clean the affected areas at no charge."
  },
  {
    question: "Can I schedule recurring cleanings?",
    answer: "Absolutely! We offer weekly, bi-weekly, and monthly recurring services at discounted rates. Contact us to set up a schedule that works for you."
  },
  {
    question: "Are your cleaners insured and background-checked?",
    answer: "Yes, all our cleaning professionals are fully insured, bonded, and undergo comprehensive background checks before joining our team."
  }
];

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="block overflow-hidden">
      {/* Hero Section - Enhanced */}
      <section className="relative flex justify-between items-center max-w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        <div className="relative w-1/2 p-12 space-y-6 animate-fadeInLeft">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ✨ #1 Cleaning Service in Uganda
          </div>
          <h1 className="text-6xl font-bold leading-tight">
            Professionally
            <span className="text-blue-800 block mt-2">
              Cleaning Service
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              for Your Home
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We provide exceptional cleaning services using eco-friendly products
            and trained professionals to give your space the care it deserves.
          </p>
          <div className="flex gap-4 pt-4">
            <Link
              to="/services"
              className="bg-gradient-to-r from-[#f3c10d] to-[#e0b209] shadow-lg text-center px-6 py-4 flex items-center gap-2 font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Our Best Offer
              <IoIosArrowForward className="bg-white rounded text-lg" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-blue-600 text-blue-600 px-6 py-4 flex items-center gap-2 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <FaPhone className="text-lg" />
              Call Us Now
            </Link>
          </div>
          <div className="flex items-center gap-8 pt-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/150?img=${i}`}
                  className="w-12 h-12 rounded-full border-4 border-white"
                  alt="Customer"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sm text-gray-600 font-medium">5000+ Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="relative w-1/2 animate-fadeInRight">
          <div className="absolute top-10 right-10 bg-white p-4 rounded-2xl shadow-2xl animate-float">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-3 rounded-full">
                <IoIosCheckmarkCircle className="text-green-500 text-2xl" />
              </div>
              <div>
                <p className="font-bold text-gray-900">100% Satisfaction</p>
                <p className="text-sm text-gray-500">Guaranteed</p>
              </div>
            </div>
          </div>
          <img
            src={Cleaner}
            className="h-[600px] rounded-[14%_0%_25%_48%_/_3%_55%_0%_67%] w-full object-cover shadow-2xl"
            alt="Professional cleaner at work"
            loading="lazy"
          />
          <div className="absolute bottom-10 left-10 bg-white p-6 rounded-2xl shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <FaShieldAlt className="text-blue-600 text-3xl" />
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">24/7</p>
                <p className="text-sm text-gray-600 font-medium">Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - New */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800" data-animate id="stats">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center text-white transform hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4 text-5xl opacity-80">
                  {stat.icon}
                </div>
                <h3 className="text-5xl font-bold mb-2">{stat.number}</h3>
                <p className="text-blue-100 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - New */}
      <section className="px-12 py-20 bg-white" data-animate id="process">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="text-4xl font-bold mt-2">
              How It Works
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              Simple steps to a cleaner space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 transform -translate-y-1/2"></div>
            
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-blue-600 to-blue-800 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.step}
                </div>
                <div className="mt-6 mb-4 flex justify-center text-5xl text-blue-600">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section - Enhanced */}
      <section className="px-6 md:px-12 py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50" data-animate id="about">
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          <div className="w-full lg:w-1/2 relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-blue-400 rounded-2xl transform rotate-3 opacity-20"></div>
              <img
                src={Team_Image}
                loading="lazy"
                className="relative w-full h-[300px] md:h-[380px] rounded-2xl object-cover shadow-2xl transform hover:scale-105 transition-transform duration-500"
                alt="Our cleaning team"
              />
              <img
                src={Cleaner_Lady}
                loading="lazy"
                className="w-[200px] h-[250px] md:w-[300px] md:h-[300px] rounded-2xl absolute -bottom-10 -right-10 md:-right-20 object-cover shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-500"
                alt="Professional cleaner"
              />
              <div className="absolute bg-white p-6 font-medium rounded-2xl top-60 left-10 text-center shadow-2xl animate-float">
                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">5+</h3>
                <span className="text-sm text-gray-600 font-semibold">
                  Years of Excellence
                </span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-center">
            <div className="px-0 md:px-8 py-4">
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                Who We Are
              </span>
              <h2 className="text-4xl font-bold mt-2 mb-6 leading-tight">
                Trusted Cleaning Experts <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Serving You Since 2020
                </span>
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                We take pride in delivering top-quality cleaning services
                tailored to your needs. Our professional team uses eco-friendly
                products and advanced techniques to ensure a spotless and
                healthy environment for your family or business.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="mt-1 text-3xl">{feature.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Us
                <IoIosArrowForward className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Enhanced */}
      <section className="px-12 py-20 bg-white" data-animate id="pricing">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Our Pricing
            </span>
            <h2 className="text-5xl font-bold mt-2">
              Simple & Transparent Pricing
            </h2>
            <p className="text-gray-600 mt-4 text-xl">
              Choose the service that fits your needs. All prices in UGX
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 transition-all duration-500 transform hover:-translate-y-2 ${
                  plan.popular
                    ? "bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-2xl scale-105 ring-4 ring-blue-200"
                    : "bg-white border-2 border-gray-200 hover:border-blue-400 hover:shadow-2xl"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#f3c10d] to-[#e0b209] text-gray-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-3 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.popular ? "text-blue-100" : "text-gray-500"}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className={`text-sm ${plan.popular ? "text-blue-100" : "text-gray-500"}`}>
                      UGX
                    </span>
                    <span className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-blue-600"}`}>
                      {plan.price}
                    </span>
                  </div>
                  <p className={`text-sm ${plan.popular ? "text-blue-100" : "text-gray-500"}`}>
                    {plan.unit}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <IoIosCheckmark
                        className={`text-2xl flex-shrink-0 mt-0.5 ${
                          plan.popular ? "text-[#f3c10d]" : "text-green-500"
                        }`}
                      />
                      <span className={`${plan.popular ? "text-blue-50" : "text-gray-700"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/booking"
                  className={`block w-full text-center py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#f3c10d] to-[#e0b209] text-gray-900 hover:shadow-xl"
                      : "bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:shadow-xl"
                  }`}
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-10 shadow-lg">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Additional Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-between transform hover:-translate-y-1"
                >
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {service.name}
                    </h4>
                    <p className="text-sm text-gray-500">{service.unit}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Starting at</p>
                    <p className="text-3xl font-bold text-blue-600">
                      {service.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600">
              * Prices may vary based on property size and condition.{" "}
              <Link to="/contact" className="text-blue-600 hover:underline font-semibold">
                Contact us for a free quote
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 px-12 py-20 overflow-hidden" data-animate id="services">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Best Service Offer
            </span>
            <h2 className="text-5xl font-bold mt-2 text-white">
              We Offer Different Services to <br /> Clean Your Area
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 hover:shadow-blue-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105"
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 text-blue-900 rounded-2xl p-6 inline-block mb-6 transform hover:rotate-6 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-bold text-2xl mb-4">{service.name}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all duration-300"
                >
                  Learn More
                  <IoIosArrowForward className="text-xl" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced */}
      <section className="px-12 py-20 bg-gradient-to-br from-gray-50 to-white" data-animate id="testimonials">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Testimonials
            </span>
            <h2 className="text-5xl font-bold mt-2">
              What Our Clients Say About Us
            </h2>
            <p className="text-gray-600 mt-4 text-xl">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xl" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-8 text-lg leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Read More Reviews
              <IoIosArrowForward className="text-xl" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - New */}
      <section className="px-12 py-20 bg-white" data-animate id="faq">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-5xl font-bold mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mt-4 text-xl">
              Everything you need to know about our services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaQuestion className="text-sm" />
                    </div>
                    <span className="font-bold text-lg text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                  <IoIosArrowForward
                    className={`text-2xl text-blue-600 transition-transform duration-300 ${
                      openFaq === index ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-8 pb-6 text-gray-700 leading-relaxed pl-20">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Please reach out to our friendly team.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Contact Support
              <IoIosArrowForward className="text-xl" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 px-12 py-24 overflow-hidden" data-animate id="cta">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full -ml-32 -mt-32 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full -mr-48 -mb-48 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-5xl mx-auto text-center text-white">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
            Ready to Get Started?
          </div>
          <h2 className="text-6xl font-bold mb-6 leading-tight">
            Ready for a Sparkling <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3c10d] to-[#e0b209]">
              Clean Space?
            </span>
          </h2>
          <p className="text-2xl mb-10 text-blue-100">
            Book your cleaning service today and experience the difference professional care makes
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/booking"
              className="group bg-gradient-to-r from-[#f3c10d] to-[#e0b209] text-gray-900 px-10 py-5 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 shadow-lg flex items-center justify-center gap-3 transform hover:scale-105"
            >
              <FaCalendarAlt className="text-xl" />
              Book Now
              <IoIosArrowForward className="text-xl group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg flex items-center justify-center gap-3 transform hover:scale-105"
            >
              <FaPhone className="text-xl" />
              Contact Us
            </Link>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <IoIosCheckmarkCircle className="text-2xl text-[#f3c10d]" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <IoIosCheckmarkCircle className="text-2xl text-[#f3c10d]" />
              <span>Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <IoIosCheckmarkCircle className="text-2xl text-[#f3c10d]" />
              <span>Instant Booking</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Enhanced */}
      <section className="px-12 py-20 bg-gradient-to-br from-gray-50 to-blue-50" data-animate id="newsletter">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 bg-gradient-to-br from-blue-600 to-blue-800 p-12 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                    <MdEmail className="text-5xl" />
                  </div>
                  <h2 className="text-4xl font-bold">
                    Subscribe to Our Newsletter
                  </h2>
                </div>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  Get exclusive cleaning tips, special offers, and updates delivered to your inbox. Join our community of 5000+ happy subscribers!
                </p>
                <div className="space-y-3">
                  {["Weekly cleaning tips", "Exclusive discounts", "New service alerts"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <IoIosCheckmarkCircle className="text-[#f3c10d] text-2xl" />
                      <span className="text-blue-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 p-12">
                <form onSubmit={handleNewsletterSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 transition-all duration-300 text-lg"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubscribed}
                    className={`w-full px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg flex items-center justify-center gap-3 ${
                      isSubscribed
                        ? "bg-green-500 text-white"
                        : "bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:shadow-xl transform hover:scale-105"
                    }`}
                  >
                    {isSubscribed ? (
                      <>
                        <IoIosCheckmarkCircle className="text-2xl" />
                        Subscribed Successfully!
                      </>
                    ) : (
                      <>
                        Subscribe Now
                        <IoIosArrowForward className="text-xl" />
                      </>
                    )}
                  </button>
                </form>
                {isSubscribed && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <p className="text-green-700 text-center font-semibold">
                      🎉 Welcome aboard! Check your email for confirmation.
                    </p>
                  </div>
                )}
                <p className="text-gray-500 text-sm text-center mt-6">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;