import React from "react";
// import bg_img from "../assets/bc4b6461ccfbedfa8f3a864c0bf2636f.jpg";

const ReturnPolicy = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full bg-white  ">
      {/* <img src={bg_img} className="w-full  max-h-[1090px]   " alt="" /> */}
      <div className="absolute bg-white  w-full backdrop-blur-2xl  mx-auto  text-gray-800 leading-relaxed">
        <div className=" p-4  bg-green-500/30/ ">
          <div className="place-items-center">
            <div className="w-10 h-2 bg-[#0edb0e] rounded-full mx-auto "></div>
            <h2 className="text-2xl font-medium text-black mb-1">
              {" "}
              Return Policy & Food Turnover Conditions
            </h2>
          </div>

          <div className="mt-5  p-5 rounded-lg">
            <p className="text-white/">
              At <strong>Green Pork</strong>, we take pride in delivering fresh,
              high-quality food to our customers. Due to the perishable nature
              of our products, we have the following policies in place:
            </p>

            <h3 className="text-[#0edb0e] text-xl font-semibold mt-6 mb-3">
              1. Returns & Refunds
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-white/">
              <li>
                <strong>Perishable Goods:</strong> Since our products are
                perishable, we <strong>do not accept returns</strong> once an
                order has been placed or delivered.
              </li>
              <li>
                <strong>Damaged or Incorrect Orders:</strong> If your order
                arrives damaged, incorrect, or fails to meet quality standards,
                please contact us <strong>within [X hours]</strong> of delivery
                with photos/proof, and we'll gladly offer a{" "}
                <strong>replacement, credit, or refund</strong>.
              </li>
              <li>
                <strong>Refund Eligibility:</strong> Refunds are processed only
                for valid claims and may take <strong>3-5 business days</strong>{" "}
                to reflect in your account.
              </li>
            </ul>

            <h3 className="text-[#0edb0e] text-xl font-semibold mt-6 mb-3">
              2. Cancellation Policy
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-white/">
              <li>
                Orders can be canceled <strong>before [X time]</strong> on the
                day of delivery/production. Once preparation has begun,
                cancellations may not be possible.
              </li>
            </ul>

            <h3 className="text-[#0edb0e] text-xl font-semibold mt-6 mb-3">
              3. Food Safety & Hygiene
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-white/">
              <li>
                For health and safety reasons,{" "}
                <strong>we cannot accept returned food items</strong> after
                delivery.
              </li>
              <li>
                If you receive a spoiled or contaminated product, notify us
                immediately with details for resolution.
              </li>
            </ul>

            <h3 className="text-[#0edb0e] text-xl font-semibold mt-6 mb-3">
              4. Delivery Issues
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-white/">
              <li>
                If delivery is delayed or mishandled by our team, we will
                resolve the issue promptly.
              </li>
              <li>
                Customers are responsible for providing{" "}
                <strong>accurate delivery addresses</strong>; failed deliveries
                due to incorrect info may incur additional charges.
              </li>
            </ul>

            <div className="bg-gray-50 shadow-md p-4 border-l-4 border-[#0edb0e] my-5">
              <p className="text-black">
                <strong className="text-[#0ebd0e]">Need help?</strong> Contact
                us at:
              </p>
              <p className="gap-4 ">
                📞 <strong>+256-776-464-823</strong>
              </p>
              <p className="gap-4 ">
                ✉️ <strong>greenpork@gmail.com</strong>
              </p>
              <p className="gap-4 ">
                📍 <strong>123 Pork Avenue, Greenville, GL 56789</strong>
              </p>
            </div>
          </div>

          <div className="mt-8  p-4 rounded-lg text-center">
            <h3 className="text-black text-xl font-bold">
              Why This Policy Works
            </h3>
            <div className="flex flex-wrap justify-between gap-4 mt-4">
              <div className="bg-gray-50 shadow-md p-4 rounded-lg flex-1 min-w-[200px]">
                <p>
                  ✅ <strong>Sets clear expectations</strong> – Customers
                  understand food can't be returned for hygiene reasons.
                </p>
              </div>
              <div className="bg-gray-50 shadow-md p-4 rounded-lg flex-1 min-w-[200px]">
                <p>
                  ✅ <strong>Protects your business</strong> – Limits liability
                  while offering fair solutions.
                </p>
              </div>
              <div className="bg-gray-50 shadow-md p-4 rounded-lg flex-1 min-w-[200px]">
                <p>
                  ✅ <strong>Encourages quick communication</strong> – Resolves
                  problems faster.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center bg-white/30/ ">
          <p className="font-medium text-black ">
            &copy; {year} GreenPorkie - All Rights Reserved
          </p>
        </div>
        <div className="bg-[#0edb0e]  w-full h-4"></div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
