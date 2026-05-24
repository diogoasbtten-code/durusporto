/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import { Check, Compass, Wine } from "lucide-react";

export default function Experiences() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 18,
      },
    },
  };

  const boatMessage = "Olá! Gostaria de saber opções para bilhetes de barco no Douro com a DURUS Bikes & Tours.";
  const wineMessage = "Olá! Tenho interesse numa experiência de vinho do Porto com a DURUS Bikes & Tours. Podem enviar opções?";

  const boatUrl = createWhatsAppUrl(boatMessage);
  const wineUrl = createWhatsAppUrl(wineMessage);

  return (
    <section 
      id="experiences" 
      className="py-20 px-6 md:px-12 bg-white text-slate-800 scroll-mt-20 border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-[#BE123C] font-sans text-xs font-bold uppercase tracking-widest block mb-3">
            Experiências no Douro
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800 leading-tight">
            Depois da bicicleta, continue a descobrir o Porto
          </h2>
          <div className="w-10 h-[2px] bg-[#BE123C] mx-auto my-4" />
          <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed font-light">
            Combine o seu passeio pela Ribeira com barcos no Douro ou experiências de vinho do Porto em Gaia — sempre com apoio direto da nossa equipa.
          </p>
        </div>

        {/* 2-Column Visual Editorial Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
        >
          
          {/* Card 1 — Boat Tickets */}
          <motion.div
            variants={cardVariants}
            className="group bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Image Area */}
              <div className="h-64 relative overflow-hidden bg-slate-200">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-[1.03] transition-transform duration-700 brightness-[0.95]"
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1577427013953-881c0a1fca1f?auto=format&fit=crop&q=85&w=1600')` 
                  }}
                  aria-hidden="true"
                />
                
                {/* Elegant overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
                
                {/* Visual Label overlay */}
                <div className="absolute top-4 left-4">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-[#BE123C] text-white font-sans text-[10px] font-bold uppercase tracking-wider rounded shadow-md">
                    <Compass className="h-3 w-3" />
                    Rio Douro
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="font-heading text-lg font-bold tracking-tight text-white/95">
                    Cruzeiros &amp; Roteiros
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <h3 className="font-heading text-2xl font-bold text-slate-800 mb-3 tracking-tight">
                  Boat Tickets no Douro
                </h3>
                <p className="font-sans text-sm text-slate-600 leading-relaxed font-light mb-6">
                  Reserve bilhetes para experiências de barco no Douro com orientação simples, humana e direta.
                </p>

                {/* Bullets */}
                <ul className="flex flex-col gap-3 pt-6 border-t border-slate-200/60 font-sans text-xs font-semibold text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-[#BE123C] shrink-0" />
                    <span>Cruzeiros clássicos no Douro</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-[#BE123C] shrink-0" />
                    <span>Ajuda para escolher horários</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-[#BE123C] shrink-0" />
                    <span>Apoio direto por WhatsApp</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="px-8 pb-8 pt-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href={boatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-sans text-xs font-bold uppercase tracking-widest rounded-md shadow-sm transition-colors duration-300"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Quero bilhetes para barco
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 2 — Wine Tours */}
          <motion.div
            variants={cardVariants}
            className="group bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Image Area */}
              <div className="h-64 relative overflow-hidden bg-slate-200">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-[1.03] transition-transform duration-700 brightness-[0.95]"
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=85&w=1600')` 
                  }}
                  aria-hidden="true"
                />
                
                {/* Elegant overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
                
                {/* Visual Label overlay */}
                <div className="absolute top-4 left-4">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-[#BE123C] text-white font-sans text-[10px] font-bold uppercase tracking-wider rounded shadow-md">
                    <Wine className="h-3 w-3" />
                    Gaia &amp; Caves
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="font-heading text-lg font-bold tracking-tight text-white/95">
                    Provas &amp; Caves Históricas
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <h3 className="font-heading text-2xl font-bold text-slate-800 mb-3 tracking-tight">
                  Wine Tours &amp; Caves
                </h3>
                <p className="font-sans text-sm text-slate-600 leading-relaxed font-light mb-6">
                  Descubra caves históricas e provas de vinho do Porto com recomendações locais e apoio na escolha.
                </p>

                {/* Bullets */}
                <ul className="flex flex-col gap-3 pt-6 border-t border-slate-200/60 font-sans text-xs font-semibold text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-[#BE123C] shrink-0" />
                    <span>Caves em Vila Nova de Gaia</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-[#BE123C] shrink-0" />
                    <span>Provas de vinho do Porto</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-[#BE123C] shrink-0" />
                    <span>Recomendações locais</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="px-8 pb-8 pt-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href={wineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-sans text-xs font-bold uppercase tracking-widest rounded-md shadow-sm transition-colors duration-300"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Quero uma experiência de vinho
                </a>
              </motion.div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
