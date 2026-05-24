/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import FleetShowcase from "./components/sections/FleetShowcase";
import Experiences from "./components/sections/Experiences";
import WhyDurus from "./components/sections/WhyDurus";
import Location from "./components/sections/Location";
import FinalCTA from "./components/sections/FinalCTA";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden antialiased">
      {/* Header Navigation with DURUS Logo & WhatsApp click actions */}
      <Navbar />

      {/* Main Responsive Split-Editorial Hero Section */}
      <Hero />

      {/* Primary Bike Rental Segment */}
      <FleetShowcase />

      {/* Editorial Split-Layout Wine and Douro Experiences */}
      <Experiences />

      {/* High-value Advantages block: Why Choose DURUS */}
      <WhyDurus />

      {/* Local Physical Presence Hub Locations */}
      <Location />

      {/* Responsive Conversion-boosting Final CTA Block */}
      <FinalCTA />

      {/* Slate Styled Corporate High Contrast Footer */}
      <Footer />
    </div>
  );
}
