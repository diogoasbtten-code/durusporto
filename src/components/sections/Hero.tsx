/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import { ArrowRight, ShieldCheck, Compass, Sparkles } from "lucide-react";

export default function Hero() {
  // Stagger state transitions using Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const heroMessage = "Olá! Gostaria de planear uma experiência com a DURUS Bikes & Tours no Porto. Podem ajudar-me?";
  const whatsappUrl = createWhatsAppUrl(heroMessage);

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-32 pb-24 flex items-center justify-center overflow-hidden bg-slate-955 text-white"
    >
      {/* Immersive Cinematic Background Image (No Next Image) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center scale-105 pointer-events-none select-none filter brightness-[0.85]"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=85&w=2400')`,
          backgroundAttachment: "scroll"
        }}
        aria-hidden="true"
      />

      {/* Elegant overlays combining dark slate and a subtle warm Douro crimson-ruby hue */}
      <div className="absolute inset-0 z-1 pointer-events-none select-none" aria-hidden="true">
        {/* Dark Slate Base Cover */}
        <div className="absolute inset-0 bg-slate-900/55 mix-blend-multiply" />
        
        {/* Subtle Ruby/Warm tone vignette gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-slate-900/40 to-[#9F1239]/20" />
        
        {/* Vertical Fade to black or dark-slate at the bottom of standard viewport flow */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-center gap-6 md:gap-8"
        >
          {/* Aspirational badge with premium ruby micro-details */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-inner"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-accent animate-pulse" />
            <span className="text-[10px] md:text-xs text-white uppercase tracking-widest font-sans font-bold">
              Experiências Boutique no Porto
            </span>
          </motion.div>

          {/* Majestic Hero Main Header */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[90px] font-extrabold tracking-tight leading-[1.1] selection:bg-brand-accent selection:text-white"
          >
            <span className="bg-gradient-to-r from-white via-[#FFF1F2] to-[#FFE4E6] text-transparent bg-clip-text drop-shadow-[0_2px_25px_rgba(159,18,57,0.4)]">
              Pedalar. Navegar. Degustar.
            </span>
          </motion.h1>

          {/* Seamless Subhead narrative */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-base md:text-xl text-white/90 max-w-2xl font-light leading-relaxed tracking-wide shadow-sm"
          >
            Bike rental na Ribeira, bilhetes para barcos no Douro e experiências de vinho do Porto — com apoio direto da nossa equipa local.
          </motion.p>

          {/* Staggered green and glass-styled CTA actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mt-2"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-sans text-xs font-bold uppercase tracking-widest rounded-md shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5"
            >
              <WhatsAppIcon className="h-5 w-5 fill-white text-white" />
              Falar com a equipa
            </a>

            <a
              href="#fleet"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-sans text-xs font-bold uppercase tracking-widest rounded-md backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Explorar experiências
              <ArrowRight className="h-3.5 w-3.5 text-white/70 group-hover:translate-x-1 group-hover:text-white transition-all duration-200" />
            </a>
          </motion.div>

          {/* Microcopy for genuine direct local reassurance */}
          <motion.div
            variants={itemVariants}
            className="mt-4 flex flex-col items-center gap-3 w-full"
          >
            {/* Inline pulse green live indicator with trust keywords */}
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-xs text-white/85 font-sans font-light">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-brand-whatsapp" />
                Atendimento local
              </span>
              <span className="h-1 w-1 rounded-full bg-white/30 hidden sm:inline" />
              <span>Resposta humana</span>
              <span className="h-1 w-1 rounded-full bg-white/30 hidden sm:inline" />
              <span>Sem formulários frios</span>
            </div>

            {/* Direct green indicator light */}
            <p className="font-sans text-[11px] text-white/60 tracking-wider flex items-center gap-2">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              Disponível agora. Fale diretamente connosco no WhatsApp.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
