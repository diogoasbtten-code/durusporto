/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import FleetShowcase from "./components/sections/FleetShowcase";
import Experiences from "./components/sections/Experiences";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="bg-brand-light min-h-screen text-brand-dark overflow-x-hidden antialiased">
      {/* Header Navigation */}
      <Navbar />

      {/* Hero Visual Banner Component */}
      <Hero />

      {/* Bespoke Fleet Showcase Section */}
      <FleetShowcase />

      {/* Exclusive Experiences: Boat Tours & Wine Cellars Asymmetrical Showcase */}
      <Experiences />

      {/* Premium Dark Theme Footer */}
      <Footer />
    </div>
  );
}

