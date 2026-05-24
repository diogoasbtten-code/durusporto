"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getWhatsAppLink } from "../../config/whatsapp";
import WhatsAppIcon from "../ui/WhatsAppIcon";

export default function Hero() {
  // Framer Motion staggered transition configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 18,
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden px-6 bg-brand-dark text-brand-light">
      {/* Immersive Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=80&w=1920"
          alt="Premium Porto Experience Background - Douro River"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay to optimize editorial layout copy readability */}
        <div className="absolute inset-0 bg-brand-primary/30 backdrop-brightness-[0.85] z-10" />
      </div>

      {/* Main Core Narrative Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center gap-6 md:gap-8 mt-12"
      >
        {/* Visual Pill tag to heighten premium aesthetic cues */}
        <motion.div
          variants={itemVariants}
          className="px-4 py-1.5 rounded-full bg-brand-light/10 backdrop-blur-md border border-brand-light/20 text-brand-accent text-xs font-semibold uppercase tracking-widest font-sans inline-block cursor-default"
        >
          Experiências Boutique Exclusivas
        </motion.div>

        {/* Dynamic Display Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] text-brand-light"
        >
          Pedalar. Navegar. Degustar.
        </motion.h1>

        {/* Elegant Supporting Subhead */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-base md:text-xl text-brand-light/90 max-w-2xl font-light leading-relaxed tracking-wide"
        >
          A derradeira experiência do Porto. E-bikes premium, passeios privados no rio Douro e caves de vinho históricas.
        </motion.p>

        {/* High-Impact Actions Grid */}
        <div className="flex flex-col items-center gap-5 w-full">
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 w-full sm:w-auto mt-4 px-4 sm:px-0"
          >
            <motion.a
              href={getWhatsAppLink("general")}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-sans text-xs font-bold uppercase tracking-widest rounded-md shadow-lg transition-colors duration-300 flex items-center justify-center gap-2 group"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
              Fale com um Especialista
            </motion.a>

            <motion.a
              href="#fleet"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-brand-light/35 hover:border-brand-light/75 text-brand-light font-sans text-xs font-semibold uppercase tracking-widest rounded-md transition-all duration-300 backdrop-blur-sm shadow-md"
            >
              Explorar Experiências
            </motion.a>
          </motion.div>

          {/* Micro-copy with pulsing green dot */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-xs text-brand-light/75 flex items-center justify-center gap-2.5 mt-2 bg-brand-dark/20 px-4 py-2 rounded-full border border-brand-light/10 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>
              Disponível agora. Fale diretamente connosco no WhatsApp.
            </span>
          </motion.p>
        </div>
      </motion.div>

      {/* Subtle Scroll Hint Marker at Bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-brand-light/40 hover:text-brand-light/75 transition-colors duration-300 cursor-pointer"
          onClick={() => {
            document.getElementById("experiences")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[10px] font-sans font-medium uppercase tracking-widest">
            Deslize para Descobrir
          </span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-brand-light/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
