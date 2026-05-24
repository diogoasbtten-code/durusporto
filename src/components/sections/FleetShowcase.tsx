"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fleetData } from "../../data/fleet";
import { getWhatsAppLink } from "../../config/whatsapp";
import WhatsAppIcon from "../ui/WhatsAppIcon";

export default function FleetShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
      },
    },
  };

  return (
    <section id="fleet" className="py-24 px-6 md:px-12 bg-brand-light text-brand-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-brand-accent font-sans text-xs font-bold uppercase tracking-widest block mb-4">
            Arquitetura Móvel Personalizada
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-brand-primary">
            A Frota Premium
          </h2>
          <div className="w-12 h-[2px] bg-brand-accent mx-auto my-6" />
          <p className="font-sans text-base text-brand-dark/75 leading-relaxed tracking-wide">
            Atravesse as colinas lendárias do Porto com absoluta elegância. Temos exclusivamente e-bikes premium mantidas em estado imaculado pelos nossos mecânicos residentes.
          </p>
        </div>

        {/* Responsive Grid Layout (1 Column Mobile, 2 Columns Desktop) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
        >
          {fleetData.map((bike) => (
            <motion.div
              key={bike.id}
              variants={cardVariants}
              className="group bg-white rounded-xl overflow-hidden border border-brand-primary/5 shadow-[0_4px_24px_rgba(28,53,45,0.03)] hover:shadow-[0_12px_36px_rgba(28,53,45,0.08)] transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Aspect Ratio 4/3 Image Area with Hover Zoom-In */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-dark/5">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={bike.imagePath}
                    alt={bike.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                {/* Floating Location Pills on top-left of image for extra elite structure */}
                <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-1.5 pointer-events-none">
                  {bike.locations.map((loc) => (
                    <span
                      key={loc}
                      className="px-2.5 py-1 bg-brand-primary text-brand-light text-[10px] font-bold uppercase tracking-widest rounded-md backdrop-blur-md shadow-sm"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Meta and Info Body */}
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between gap-6">
                <div className="flex flex-col gap-4">
                  {/* Performance Cues / Specs as Elegant Tags above the title */}
                  <div className="flex flex-wrap gap-2">
                    {bike.specs.slice(0, 3).map((spec) => (
                      <span
                        key={spec}
                        className="text-[10px] font-sans font-medium tracking-wide text-brand-dark/60 bg-brand-dark/5 px-2 py-1 rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-brand-primary">
                    {bike.name}
                  </h3>

                  <p className="font-sans text-sm text-brand-dark/75 leading-relaxed">
                    {bike.description}
                  </p>
                </div>

                {/* Direct Human WhatsApp Handoff CTA Button */}
                <motion.div
                  className="mt-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href={getWhatsAppLink("bike", bike.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 py-3 px-5 bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-sans text-xs font-bold uppercase tracking-widest rounded-md transition-colors duration-300 shadow-sm"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Verificar Disponibilidade
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
