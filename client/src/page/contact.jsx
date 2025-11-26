import React from "react";
import { useForm } from "react-hook-form";
import { FaPhone, FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoSend } from "react-icons/io5";

const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission (e.g., send to API)
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-4 px-4 sm:px-6 lg:px-0">
      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="w-8 h-1.5 bg-[#f3c10d] rounded-full mx-auto mb-0"></div>
          <h1 className="text-lg font-bold text-gray-900 mb-2">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>

        {/* Contact Form and Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 flex-col-reverse bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#f3c10d] mb-6">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#f3c10d] focus:border-[#f3c10d] outline-none transition ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("firstName", {
                      required: "First name is required"
                    })}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#f3c10d] focus:border-[#f3c10d] outline-none transition ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("lastName", {
                      required: "Last name is required"
                    })}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#f3c10d] focus:border-[#f3c10d] outline-none transition ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  placeholder="Your message..."
                  rows="5"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0edb0e] focus:border-[#0edb0e] outline-none transition ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters"
                    }
                  })}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#f3c10d] hover:bg-yellow-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <IoSend className="text-lg" />
                </button>
              </div>
            </form>
          </div>

          {/* Newsletter and Contact Info */}
          <div className="space-y-8">
            {/* Newsletter */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-[#f3c10d] mb-4">
                Newsletter
              </h3>
              <p className="text-gray-600 mb-4">
                Get our latest updates and offers directly to your inbox.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0edb0e] focus:border-[#0edb0e] outline-none transition"
                />
                <button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-black text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-[#f3c10d] mb-4">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#f3c10d]/10 p-3 rounded-full">
                    <FaPhone className="text-[#f3c10d] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <a
                      href="tel:+256776464823"
                      className="text-gray-600 hover:text-[#f3c10d] transition-colors"
                    >
                      +256 776-464-823
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#f3c10d]/10 p-3 rounded-full">
                    <MdEmail className="text-[#f3c10d] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <a
                      href="mailto:Greenporkie@gmail.com"
                      className="text-gray-600 hover:text-[#f3c10d] transition-colors"
                    >
                      Greenporkie@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#f3c10d]/10 p-3 rounded-full">
                    <FaLocationDot className="text-[#f3c10d] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Our Office</h4>
                    <p className="text-gray-600">2443 Oak Omaha, QA 45065</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            {/* <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d658.0823317925033!2d32.30004236775185!3d2.7704129954790044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a63794737279%3A0xa7f2224a99303c85!2sAbyssinia%20Restaurant!5e1!3m2!1sen!2sug!4v1744390215516!5m2!1sen!2sug"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="GreenPork Location Map"
              ></iframe>
            </div> */}
          </div>
        </div>

        {/* Footer */}
        
      </div>
      <div className="bg-[#f3c10d] h-4 mt-0"></div>
    </div>
  );
};

export default Contact;
