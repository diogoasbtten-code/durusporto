import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import FleetShowcase from "../components/sections/FleetShowcase";
import Experiences from "../components/sections/Experiences";
import Footer from "../components/layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <FleetShowcase />
      <Experiences />
      <Footer />
    </>
  );
}
