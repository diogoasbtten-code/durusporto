/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Compass, Camera } from "lucide-react";

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
      className="py-20 px-6 md:px-12 bg-white text-slate-800 scroll-mt-20 border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-[#BE123C] font-sans text-xs font-bold uppercase tracking-widest block mb-3">
            Onde nos encontrar
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800 leading-tight">
            No coração turístico do Porto
          </h2>
          <div className="w-10 h-[2px] bg-[#BE123C] mx-auto my-4" />
          <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed font-light">
            A DURUS está junto à Ribeira, com acesso rápido à Ponte Luís I, Gaia e ao Douro.
          </p>
        </div>

        {/* 2-Column Responsive Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-10"
        >
          {/* Card 1: Mercado da Ribeira, Porto */}
          <motion.div
            variants={cardVariants}
            className="group bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Image Area with Storefront/Street Placeholder */}
              <div className="h-56 relative overflow-hidden bg-slate-200">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-[1.02] transition-transform duration-700 brightness-[0.95]"
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&q=85&w=1600')` 
                  }}
                  aria-hidden="true"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
                
                {/* Future storefront notification label */}
                <span className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-0.5 bg-black/45 backdrop-blur-md text-[9px] text-white/90 font-sans tracking-wide rounded">
                  <Camera className="h-3 w-3 text-brand-accent/90" />
                  Futura foto do espaço DURUS
                </span>
                
                <span className="absolute top-4 left-4 font-heading text-xs font-bold tracking-tight text-white/90 bg-[#BE123C] px-3 py-1 rounded shadow-md">
                  Ponto de Partida Principal
                </span>
              </div>

              {/* Details & Address info */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-4 w-4 text-[#BE123C]" />
                  <h3 className="font-heading text-lg font-bold text-slate-800">
                    Mercado da Ribeira, Porto
                  </h3>
                </div>

                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed mb-6 font-light">
                  O ponto principal para começar o aluguer de bicicletas, junto ao rio e a poucos passos da Ponte Luís I. Daqui alcança qualquer ponto turístico em minutos.
                </p>

                <div className="p-4 bg-white rounded-xl border border-slate-200/60 text-xs text-slate-600 font-sans space-y-1">
                  <div className="flex justify-between font-medium">
                    <span>Endereço Oficial:</span>
                    <span className="text-slate-800 text-right">Cais da Ribeira 2, 3 e 4</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Código Postal:</span>
                    <span className="text-slate-500">4000-509 Porto</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Conexão:</span>
                    <span className="font-semibold text-[#BE123C]">DURUS Rent Bike &amp; e-Bike</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 pt-0 flex items-center gap-2 text-xs font-semibold text-slate-500 border-t border-slate-100 mt-2">
              <Navigation className="h-3.5 w-3.5 text-[#BE123C]" />
              <span>Instalação física principal junto ao Mercado</span>
            </div>
          </motion.div>

          {/* Card 2: Ligação rápida a Gaia */}
          <motion.div
            variants={cardVariants}
            className="group bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Image Area with Gaia/Bridge Placeholder */}
              <div className="h-56 relative overflow-hidden bg-slate-200">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-[1.02] transition-transform duration-700 brightness-[0.95]"
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1558538337-aab544368de8?auto=format&fit=crop&q=85&w=1600')` 
                  }}
                  aria-hidden="true"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />

                {/* Future storefront notification label */}
                <span className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-0.5 bg-black/45 backdrop-blur-md text-[9px] text-white/90 font-sans tracking-wide rounded">
                  <Camera className="h-3 w-3 text-brand-accent/90" />
                  Visual clássico da travessia
                </span>

                <span className="absolute top-4 left-4 font-heading text-xs font-bold tracking-tight text-white/90 bg-[#BE123C] px-3 py-1 rounded shadow-md">
                  Conectividade de Rotas
                </span>
              </div>

              {/* Details & Info */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Compass className="h-4 w-4 text-[#BE123C]" />
                  <h3 className="font-heading text-lg font-bold text-slate-800">
                    Ligação rápida a Gaia
                  </h3>
                </div>

                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed mb-6 font-light">
                  A partir da Ribeira, é fácil atravessar para Gaia, seguir junto ao Douro e combinar o passeio com barcos ou caves. A travessia de e-bike é suave e cénica.
                </p>

                <div className="p-4 bg-white rounded-xl border border-slate-200/60 text-xs text-slate-600 font-sans space-y-1">
                  <div className="flex justify-between font-medium">
                    <span>Alvo Turístico:</span>
                    <span className="text-slate-800 text-right">Ponte Luís I &amp; Caves de Gaia</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Acessibilidade:</span>
                    <span className="text-slate-500">Início imediato ao cruzar o rio</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Integração:</span>
                    <span className="font-semibold text-[#BE123C]">Barcos &amp; Caves de Vinho</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 pt-0 flex items-center gap-2 text-xs font-semibold text-slate-500 border-t border-slate-100 mt-2">
              <Navigation className="h-3.5 w-3.5 text-[#BE123C]" />
              <span>Rotas fluidas para a travessia das pontes</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Small visible note */}
        <div className="text-center">
          <p className="font-sans text-xs text-slate-400 font-light italic">
            * Fotografias reais das lojas serão adicionadas em breve.
          </p>
        </div>

      </div>
    </section>
  );
}
