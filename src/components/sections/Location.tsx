/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Compass } from "lucide-react";

export default function Location() {
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

  return (
    <section 
      id="location" 
      className="py-24 px-6 md:px-12 bg-white text-slate-800 scroll-mt-20 border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-brand-accent font-sans text-xs font-bold uppercase tracking-widest block mb-4">
            Onde Nos Encontrar
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-slate-800">
            No coração turístico do Porto
          </h2>
          <div className="w-12 h-[2px] bg-brand-accent mx-auto my-6" />
          <p className="font-sans text-base text-slate-600 leading-relaxed font-light">
            Estamos posicionados para quem quer explorar a Ribeira, atravessar para Gaia, passear junto ao Douro ou organizar uma experiência de vinho do Porto sem perder tempo.
          </p>
        </div>

        {/* 2-Column Responsive Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
        >
          {/* Card 1: Ribeira, Porto */}
          <motion.div
            variants={cardVariants}
            className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-colors"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-2.5 bg-[#9F1239]/5 rounded-lg text-brand-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-800">
                  Ribeira, Porto
                </h3>
              </div>

              <p className="font-sans text-sm text-slate-600 leading-relaxed mb-6 font-light">
                O nosso ponto de partida ideal para o aluguer de e-bikes. Encontre-nos nas históricas arcadas da Ribeira do Porto, mesmo junto à margem do rio Douro, pronto para arrancar.
              </p>

              <div className="space-y-3 font-sans text-xs text-slate-700 bg-white p-4 rounded-xl border border-slate-100 mb-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Localização Principal:</span>
                  <span className="text-slate-500">Rua da Lada 104, Porto</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Acessos Recomendados:</span>
                  <span className="text-slate-500">Fácil acesso a pé da Ponte D. Luís I</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Foco do Hub:</span>
                  <span className="text-slate-500 font-medium text-brand-accent">Bike Rental &amp; Concierge</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 pt-4 border-t border-slate-200/60 mt-4">
              <Navigation className="h-3.5 w-3.5 text-brand-accent" />
              <span>A 2 min a pé do rio Douro</span>
            </div>
          </motion.div>

          {/* Card 2: Vila Nova de Gaia */}
          <motion.div
            variants={cardVariants}
            className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-colors"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-2.5 bg-[#9F1239]/5 rounded-lg text-brand-accent">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-800">
                  Vila Nova de Gaia / Caves
                </h3>
              </div>

              <p className="font-sans text-sm text-slate-600 leading-relaxed mb-6 font-light">
                O epicentro das famosas caves de vinho do Porto. Siga pela Ponte Luís I e ligue-se diretamente aos melhores itinerários de provas de vinho e cais para passeios de barco.
              </p>

              <div className="space-y-3 font-sans text-xs text-slate-700 bg-white p-4 rounded-xl border border-slate-100 mb-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Ponto de Encontro:</span>
                  <span className="text-slate-500">Cais de Gaia 320, Gaia</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Proximidades:</span>
                  <span className="text-slate-500">Caves Históricas de Port Wine</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Foco do Hub:</span>
                  <span className="text-slate-500 font-medium text-brand-accent">Boat Tickets &amp; Wine Tours</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 pt-4 border-t border-slate-200/60 mt-4">
              <Navigation className="h-3.5 w-3.5 text-brand-accent" />
              <span>Atravesse a bela ponte histórica a pé ou e-bike</span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
