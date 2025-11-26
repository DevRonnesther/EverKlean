import React from "react";
import Hero from "../Hero/hero";
import Abouts from "../page/Abouts";
import ReturnPolicy from "../page/ReturnPolicy";
import Contact from "../page/contact";
import { Routes, Route } from "react-router-dom";
import Service from "../page/service";

const Router = () => {
  return (
    <Routes className=" ">
      <Route path="/" element={<Hero />} />
      <Route path="/returnPolicy" element={<ReturnPolicy />} />
      <Route path="/contactUs" element={<Contact />} />
      <Route path="/aboutUs" element={<Abouts />} />
      <Route path="/service" element={<Service />} />
    </Routes>
  );
};

export default Router;
