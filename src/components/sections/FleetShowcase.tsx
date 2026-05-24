/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import { Zap, Bike, Users, ChevronDown, ChevronUp, MapPin, CheckCircle, Navigation } from "lucide-react";

export default function FleetShowcase() {
  // State to manage active expanded details for each category ("electric" | "classic" | null)
  const [openBike, setOpenBike] = useState<"electric" | "classic" | null>("electric");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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

  // WhatsApp CTA generators
  const electricWhatsAppUrl = createWhatsAppUrl(
    "Olá! Gostaria de alugar bicicleta(s) elétrica(s) com a DURUS Bikes & Tours. Podem confirmar opções para a data e hora que procuro?"
  );

  const classicWhatsAppUrl = createWhatsAppUrl(
    "Olá! Gostaria de alugar bicicleta(s) normal(is) com a DURUS Bikes & Tours. Podem confirmar opções para a data e hora que procuro?"
  );

  const groupWhatsAppUrl = createWhatsAppUrl(
    "Olá! Gostaria de alugar bicicletas para família/grupo com a DURUS Bikes & Tours. Somos [número de pessoas], para [data/hora], e queremos perceber a melhor combinação entre bicicletas elétricas e normais."
  );

  const toggleDetails = (category: "electric" | "classic") => {
    setOpenBike(openBike === category ? null : category);
  };

  return (
    <section 
      id="fleet" 
      className="py-20 px-6 md:px-12 bg-slate-50 text-slate-800 scroll-mt-20 border-b border-slate-200/40 select-none"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Compact & Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-brand-accent font-sans text-xs font-bold uppercase tracking-widest block mb-3">
            Bike Rental na Ribeira
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800 leading-tight">
            Escolha entre e-bike ou bicicleta normal
          </h2>
          <div className="w-10 h-[2px] bg-brand-accent mx-auto my-4" />
          <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed font-light">
            Duas opções simples para explorar a Ribeira, Gaia e o Douro. A disponibilidade é confirmada pela nossa equipa para a data e hora que procura.
          </p>
        </div>

        {/* 2-Column Responsive Premium Visual Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16"
        >
          {/* Card 1: Electric Bike */}
          <motion.div
            variants={cardVariants}
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Premium Image Header */}
              <div className="h-60 sm:h-64 relative overflow-hidden bg-slate-100">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-[1.03] transition-transform duration-700 brightness-[0.95]"
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&q=85&w=1400')` 
                  }}
                  aria-hidden="true"
                />
                
                {/* Elegant gradients for readability over image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
                
                {/* Premium tag overlay */}
                <div className="absolute top-4 left-4">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-brand-accent hover:bg-brand-accent/90 text-white font-sans text-[10px] font-bold uppercase tracking-wider rounded-md shadow-md">
                    <Zap className="h-3 w-3 fill-white" />
                    Bicicleta elétrica
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1 px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider bg-black/45 backdrop-blur-md rounded border border-white/20 text-brand-accent">
                    <span className="h-1.5 w-1.5 bg-brand-accent rounded-full animate-pulse mr-1" />
                    Confirmação Instantânea
                  </div>
                  <span className="font-heading text-base font-bold tracking-tight text-white/95">
                    DURUS E-Pedelec
                  </span>
                </div>
              </div>

              {/* Card Body Details */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-sans block">
                    Categoria Premium
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 font-sans flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded">
                    Disponibilidade confirmada por WhatsApp
                  </span>
                </div>
                
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-800 mb-3 tracking-tight">
                  E-bike para explorar sem esforço
                </h3>
                
                <p className="font-sans text-sm text-slate-600 leading-relaxed font-light mb-5">
                  Ideal para subidas, miradouros, Gaia, Foz e passeios mais longos junto ao Douro.
                </p>

                {/* Detail Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {["Mais conforto", "Melhor para subidas", "Passeios longos", "Assistência local"].map((chip) => (
                    <span 
                      key={chip}
                      className="px-2.5 py-0.5 bg-slate-100 text-slate-600 font-sans text-[10px] uppercase font-bold tracking-wider rounded border border-slate-200/50"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Toggle Detail Section */}
                <div className="border-t border-slate-100 pt-4 mt-4">
                  <button
                    type="button"
                    onClick={() => toggleDetails("electric")}
                    className="flex items-center justify-between w-full text-slate-700 hover:text-brand-accent font-sans text-xs font-bold uppercase tracking-wider transition-colors focus:outline-none"
                  >
                    <span>Ver detalhes da e-bike</span>
                    {openBike === "electric" ? <ChevronUp className="h-4 w-4 text-brand-accent" /> : <ChevronDown className="h-4 w-4" />}
                  </button>

                  <AnimatePresence initial={false}>
                    {openBike === "electric" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="font-sans text-xs text-slate-500 leading-relaxed font-light pt-3 pb-2 border-b border-dashed border-slate-100">
                          A escolha certa se quer ver mais do Porto sem se cansar tanto. Boa para atravessar até Gaia, seguir pela marginal ou fazer um passeio mais confortável com vento, subidas ou mais distância. Oferecemos capacete gratuito e cadeado de segurança em todas as sessões.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </div>

            {/* Premium WhatsApp Button */}
            <div className="px-6 sm:px-8 pb-8 pt-2">
              <a
                href={electricWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-sans text-xs font-bold uppercase tracking-widest rounded-md shadow-sm transition-all duration-300"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Falar sobre e-bikes
              </a>
            </div>
          </motion.div>

          {/* Card 2: Classic Bike */}
          <motion.div
            variants={cardVariants}
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Premium Image Header */}
              <div className="h-60 sm:h-64 relative overflow-hidden bg-slate-100">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-[1.03] transition-transform duration-700 brightness-[0.95]"
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&q=85&w=1400')` 
                  }}
                  aria-hidden="true"
                />
                
                {/* Elegant gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
                
                {/* Classic tag overlay */}
                <div className="absolute top-4 left-4">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 text-white font-sans text-[10px] font-bold uppercase tracking-wider rounded-md shadow-md">
                    <Bike className="h-3 w-3 text-white" />
                    Bicicleta normal
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1 px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider bg-black/45 backdrop-blur-md rounded border border-white/20 text-slate-300">
                    <span className="h-1.5 w-1.5 bg-slate-300 rounded-full animate-pulse mr-1" />
                    Confirmação Instantânea
                  </div>
                  <span className="font-heading text-base font-bold tracking-tight text-white/95">
                    DURUS Classic Tourer
                  </span>
                </div>
              </div>

              {/* Card Body Details */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-sans block">
                    Categoria Clássica
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 font-sans flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded">
                    Disponibilidade confirmada por WhatsApp
                  </span>
                </div>
                
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-800 mb-3 tracking-tight">
                  Bicicleta clássica para passeios leves
                </h3>
                
                <p className="font-sans text-sm text-slate-600 leading-relaxed font-light mb-5">
                  Uma opção simples e prática para passeios pela Ribeira, marginal do Douro e zonas planas da cidade.
                </p>

                {/* Detail Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {["Passeios simples", "Famílias", "Marginal do Douro", "Opção prática"].map((chip) => (
                    <span 
                      key={chip}
                      className="px-2.5 py-0.5 bg-slate-100 text-slate-600 font-sans text-[10px] uppercase font-bold tracking-wider rounded border border-slate-200/50"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Toggle Detail Section */}
                <div className="border-t border-slate-100 pt-4 mt-4">
                  <button
                    type="button"
                    onClick={() => toggleDetails("classic")}
                    className="flex items-center justify-between w-full text-slate-700 hover:text-brand-accent font-sans text-xs font-bold uppercase tracking-wider transition-colors focus:outline-none"
                  >
                    <span>Ver detalhes da bicicleta normal</span>
                    {openBike === "classic" ? <ChevronUp className="h-4 w-4 text-brand-accent" /> : <ChevronDown className="h-4 w-4" />}
                  </button>

                  <AnimatePresence initial={false}>
                    {openBike === "classic" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="font-sans text-xs text-slate-500 leading-relaxed font-light pt-3 pb-2 border-b border-dashed border-slate-100">
                          Uma boa escolha para quem quer um passeio descontraído, simples e direto, especialmente em zonas planas e cicláveis junto ao rio ou para famílias que querem algo incrivelmente prático, duradouro e fiável sem necessidade de baterias.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </div>

            {/* Premium WhatsApp Button */}
            <div className="px-6 sm:px-8 pb-8 pt-2">
              <a
                href={classicWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-sans text-xs font-bold uppercase tracking-widest rounded-md shadow-sm transition-all duration-300"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Falar sobre bicicletas normais
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Family/Group CTA Split visual panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 mb-16"
        >
          {/* Visual Left/Right Column: Cinematic Group Cycling Image */}
          <div className="lg:col-span-5 h-64 lg:h-auto relative bg-slate-100">
            <div 
              className="absolute inset-0 bg-cover bg-center brightness-[0.92]"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1528881995645-45738da2a5f9?auto=format&fit=crop&q=85&w=1400')` 
              }}
              aria-hidden="true"
            />
            {/* Elegant warm overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/60 to-transparent pointer-events-none" />
          </div>

          {/* Text/CTA Column: Details (Col span 7) */}
          <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-center text-left relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-2 px-3 py-1 bg-brand-accent/5 text-brand-accent font-sans text-[10px] uppercase font-bold tracking-widest rounded-full w-max mb-4">
              <Users className="h-3.5 w-3.5" />
              Grupos &amp; Famílias
            </div>

            <h3 className="font-heading text-2xl font-bold text-slate-800 mb-3 tracking-tight">
              Vai alugar para família ou grupo?
            </h3>
            
            <p className="font-sans text-sm text-slate-600 leading-relaxed font-light mb-6">
              Diga-nos quantas pessoas são, a data, a hora e se prefere bicicletas elétricas, normais ou uma combinação das duas. A nossa equipa local desenha uma distribuição equilibrada para o vosso passeio.
            </p>

            <div className="pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={groupWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-sans text-xs font-bold uppercase tracking-widest rounded-md shadow-md transition-all duration-300"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
                Planear aluguer de grupo
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Location bridge mini-map inside Bike Rental section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200/80 p-8 flex flex-col items-center gap-8 relative shadow-sm"
        >
          <div className="text-center max-w-xl">
            <span className="text-[10px] uppercase font-bold text-brand-accent tracking-widest font-sans flex items-center justify-center gap-1.5 mb-2">
              <Navigation className="h-3.5 w-3.5" />
              Dois lados da Ponte Luís I
            </span>
            <h4 className="font-heading text-xl font-bold text-slate-800 mb-2 tracking-tight">
              Ligação entre o Porto e Gaia
            </h4>
            <p className="font-sans text-xs text-slate-500 leading-relaxed font-light">
              Ajudamos visitantes que querem explorar a Ribeira, atravessar para Gaia e seguir junto ao Douro com orientação local antes de sair.
            </p>
          </div>

          {/* Elegant Conceptual Route Visual (Pure CSS) */}
          <div className="w-full max-w-2xl px-4 py-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2 select-none relative">
            
            {/* Connection Route Line (Thin accent) */}
            <div className="absolute top-[26%] left-[15%] right-[15%] h-[2px] bg-dashed border-b border-dashed border-brand-accent/30 hidden md:block -z-0" aria-hidden="true" />
            <div className="absolute top-[26%] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-emerald-500 via-brand-accent to-rose-500 hidden md:block -z-0 opacity-40" aria-hidden="true" />

            {/* Hub Point 1 */}
            <div className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3">
              <div className="h-10 w-10 rounded-full bg-[#9F1239]/5 border border-[#9F1239]/20 flex items-center justify-center text-slate-800 font-sans font-bold text-xs select-none shadow-sm">
                01
              </div>
              <span className="font-heading text-xs font-bold text-slate-800 mt-2">
                Ribeira, Porto
              </span>
              <span className="font-sans text-[10px] text-slate-400 font-medium">
                Ponto de Partida · E-bikes
              </span>
            </div>

            {/* Segment Bridge */}
            <div className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3">
              <div className="h-10 w-10 rounded-full bg-brand-accent/10 border-2 border-brand-accent/50 flex items-center justify-center text-brand-accent font-sans font-bold text-xs select-none shadow-sm animate-pulse">
                <Navigation className="h-4.5 w-4.5 rotate-45" />
              </div>
              <span className="font-heading text-xs font-bold text-brand-accent mt-2">
                Ponte D. Luís I
              </span>
              <span className="font-sans text-[10px] text-brand-accent/80 font-semibold uppercase tracking-wider">
                Travessia Cénica
              </span>
            </div>

            {/* Hub Point 2 */}
            <div className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3">
              <div className="h-10 w-10 rounded-full bg-[#1E293B]/5 border border-[#1E293B]/20 flex items-center justify-center text-slate-800 font-sans font-bold text-xs select-none shadow-sm">
                02
              </div>
              <span className="font-heading text-xs font-bold text-slate-800 mt-2">
                Gaia / Caves
              </span>
              <span className="font-sans text-[10px] text-slate-400 font-medium">
                Provas de Vinho &amp; Barcos
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
