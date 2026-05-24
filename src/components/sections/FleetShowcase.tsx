/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import { Zap, Bike, Users, ArrowRight, Sparkles } from "lucide-react";

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
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 75,
        damping: 18,
      },
    },
  };

  // Group booking WhatsApp URL generator
  const groupMessage = "Olá! Gostaria de alugar bicicletas com a DURUS Bikes & Tours. Somos [número de pessoas] e procuramos bicicletas para [data/hora]. Podem ajudar-me a escolher entre bicicletas elétricas e normais?";
  const groupWhatsAppUrl = createWhatsAppUrl(groupMessage);

  return (
    <section 
      id="fleet" 
      className="py-24 px-6 md:px-12 bg-slate-50 text-slate-800 scroll-mt-20 border-b border-slate-200/40"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-brand-accent font-sans text-xs font-bold uppercase tracking-widest block mb-4">
            Bike Rental na Ribeira
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-slate-800 leading-tight">
            Escolha a bicicleta certa para o seu passeio no Porto
          </h2>
          <div className="w-12 h-[2px] bg-brand-accent mx-auto my-6" />
          <p className="font-sans text-base text-slate-600 leading-relaxed font-light">
            Temos uma frota simples e clara: bicicletas elétricas para conforto extra e bicicletas normais para passeios leves pela Ribeira e pelo Douro.
          </p>
        </div>

        {/* 2-Column Responsive Premium Visual Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16"
        >
          {/* Card 1: Electric Bike */}
          <motion.div
            variants={cardVariants}
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Premium Image Header */}
              <div className="h-64 relative overflow-hidden bg-slate-100">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 brightness-[0.9]"
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&q=85&w=1400')` 
                  }}
                  aria-hidden="true"
                />
                {/* Elegant overlay gradients for premium legibility over the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                
                {/* Visual Label overlay */}
                <div className="absolute top-4 left-4">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-brand-accent text-white font-sans text-[10px] font-bold uppercase tracking-wider rounded-md shadow-sm">
                    <Zap className="h-3 w-3 fill-white" />
                    Bicicleta elétrica
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5 font-sans text-xs font-semibold bg-white/10 backdrop-blur-md px-2.5 py-1 rounded border border-white/25">
                    <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span>6 disponíveis</span>
                  </div>
                  <span className="font-heading text-lg font-bold tracking-tight text-white/90">
                    Premium E-Bike
                  </span>
                </div>
              </div>

              {/* Card Body Details */}
              <div className="p-8">
                <span className="text-[10px] uppercase font-bold text-brand-accent tracking-widest font-sans block mb-1">
                  E-bike para explorar sem esforço
                </span>
                <h3 className="font-heading text-2xl font-bold text-slate-800 mb-3 tracking-tight">
                  DURUS E-Pedelec
                </h3>
                <p className="font-sans text-sm text-slate-600 leading-relaxed font-light mb-6">
                  Ideal para atravessar a Ribeira, subir até aos miradouros, seguir até à Foz ou pedalar com mais conforto junto ao Douro.
                </p>

                {/* Styled Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Subidas", "Passeios longos", "Conforto extra"].map((chip) => (
                    <span 
                      key={chip}
                      className="px-3 py-1 bg-slate-100 hover:bg-slate-200/75 text-slate-700 font-sans text-[11px] font-semibold uppercase tracking-wider rounded-full transition-colors"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Anchor CTA (Href = #bicicletas) */}
            <div className="px-8 pb-8 pt-2">
              <a
                href="#bicicletas"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-slate-900 hover:bg-slate-800 text-white font-sans text-xs font-bold uppercase tracking-widest rounded-md shadow-sm transition-colors duration-200 group-hover:bg-brand-accent"
              >
                Ver bicicletas elétricas
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Normal Bike */}
          <motion.div
            variants={cardVariants}
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Premium Image Header */}
              <div className="h-64 relative overflow-hidden bg-slate-100">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 brightness-[0.9]"
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&q=85&w=1400')` 
                  }}
                  aria-hidden="true"
                />
                {/* Elegant overlay gradients for premium usability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />

                {/* Visual Label overlay */}
                <div className="absolute top-4 left-4">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 text-white font-sans text-[10px] font-bold uppercase tracking-wider rounded-md shadow-sm">
                    <Bike className="h-3 w-3 text-white" />
                    Bicicleta normal
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5 font-sans text-xs font-semibold bg-white/10 backdrop-blur-md px-2.5 py-1 rounded border border-white/25">
                    <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span>6 disponíveis</span>
                  </div>
                  <span className="font-heading text-lg font-bold tracking-tight text-white/90">
                    City Classic Bike
                  </span>
                </div>
              </div>

              {/* Card Body Details */}
              <div className="p-8">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest font-sans block mb-1">
                  Bicicleta clássica para passeios leves
                </span>
                <h3 className="font-heading text-2xl font-bold text-slate-800 mb-3 tracking-tight">
                  DURUS Tourer clássica
                </h3>
                <p className="font-sans text-sm text-slate-600 leading-relaxed font-light mb-6">
                  Uma opção simples, leve e prática para passeios pela Ribeira, marginal do Douro e zonas planas da cidade.
                </p>

                {/* Styled Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Passeios simples", "Famílias", "Marginal do Douro"].map((chip) => (
                    <span 
                      key={chip}
                      className="px-3 py-1 bg-slate-100 hover:bg-slate-200/75 text-slate-700 font-sans text-[11px] font-semibold uppercase tracking-wider rounded-full transition-colors"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Anchor CTA (Href = #bicicletas) */}
            <div className="px-8 pb-8 pt-2">
              <a
                href="#bicicletas"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-slate-900 hover:bg-slate-800 text-white font-sans text-xs font-bold uppercase tracking-widest rounded-md shadow-sm transition-colors duration-200 group-hover:bg-brand-accent"
              >
                Ver bicicletas normais
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Secondary Group CTA Panel - Family / Groups */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-sm"
        >
          {/* Subtle Warm Background Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-start gap-4">
            <div className="p-3 bg-brand-accent/5 rounded-xl text-brand-accent shrink-0 mt-1">
              <Users className="h-6 w-6" />
            </div>
            <div className="text-left">
              <h4 className="font-heading text-xl font-bold text-slate-800 mb-2 tracking-tight">
                Precisa de bicicletas para família ou grupo?
              </h4>
              <p className="font-sans text-sm text-slate-600 leading-relaxed max-w-xl font-light">
                Diga-nos quantas pessoas são, a data e se prefere bicicletas elétricas, normais ou uma combinação das duas.
              </p>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 w-full md:w-auto"
          >
            <a
              href={groupWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-sans text-xs font-bold uppercase tracking-widest rounded-md shadow-sm transition-colors duration-300"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
              Falar sobre aluguer para grupo
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
