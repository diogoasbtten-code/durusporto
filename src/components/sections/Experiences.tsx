/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import { Compass, Wine, Check } from "lucide-react";

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
      className="py-24 px-6 md:px-12 bg-white text-slate-800 scroll-mt-20 border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-brand-accent font-sans text-xs font-bold uppercase tracking-widest block mb-4">
            Parcerias Diretas &amp; Apoio Humano
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-slate-800">
            Experiências Selecionadas
          </h2>
          <div className="w-12 h-[2px] bg-brand-accent mx-auto my-6" />
          <p className="font-sans text-base text-slate-600 leading-relaxed font-light">
            Complemente a sua visita ao Porto com os melhores passeios de rio e visitas às caves históricas, sempre com suporte direto da nossa equipa local.
          </p>
        </div>

        {/* Editorial Two-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
        >
          
          {/* Card 1: Boat Tickets */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col justify-between bg-slate-50 border border-slate-200/80 rounded-2xl p-8 md:p-10 hover:border-slate-300 hover:shadow-sm transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#9F1239] bg-[#9F1239]/5 px-3 py-1.5 rounded-full border border-[#9F1239]/10">
                  Rio Douro
                </span>
                <Compass className="h-5 w-5 text-slate-400" />
              </div>

              <h3 className="font-heading text-2xl md:text-3xl font-bold text-slate-800 mb-4 tracking-tight">
                Boat Tickets no Douro
              </h3>

              <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed mb-8 font-light">
                Reserve experiências de barco no Douro com orientação direta, sem formulários frios nem reservas confusas.
              </p>

              <ul className="flex flex-col gap-3 mb-8 pt-6 border-t border-slate-200 font-sans text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-brand-accent" />
                  <span>Cruzeiro das Seis Pontes clássico</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-brand-accent" />
                  <span>Bilhetes digitais rápidos sem filas</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-brand-accent" />
                  <span>Dicas reais sobre os melhores horários</span>
                </li>
              </ul>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href={boatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-sans text-xs font-bold uppercase tracking-widest rounded-md shadow-sm transition-colors duration-300"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Quero bilhetes para barco
              </a>
            </motion.div>
          </motion.div>

          {/* Card 2: Wine Tours */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col justify-between bg-slate-50 border border-slate-200/80 rounded-2xl p-8 md:p-10 hover:border-slate-300 hover:shadow-sm transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#9F1239] bg-[#9F1239]/5 px-3 py-1.5 rounded-full border border-[#9F1239]/10">
                  Vila Nova de Gaia
                </span>
                <Wine className="h-5 w-5 text-slate-400" />
              </div>

              <h3 className="font-heading text-2xl md:text-3xl font-bold text-slate-800 mb-4 tracking-tight">
                Wine Tours &amp; Caves
              </h3>

              <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed mb-8 font-light">
                Descubra provas de vinho do Porto e experiências em caves históricas, organizadas com apoio humano e local.
              </p>

              <ul className="flex flex-col gap-3 mb-8 pt-6 border-t border-slate-200 font-sans text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-brand-accent" />
                  <span>Visitas guiadas às caves tradicionais de Gaia</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-brand-accent" />
                  <span>Provas de vinhos reserva e tawnies clássicos</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-brand-accent" />
                  <span>História e recomendações locais personalizadas</span>
                </li>
              </ul>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href={wineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-sans text-xs font-bold uppercase tracking-widest rounded-md shadow-sm transition-colors duration-300"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Quero uma experiência de vinho
              </a>
            </motion.div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
