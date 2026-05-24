"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getWhatsAppLink } from "../../config/whatsapp";
import WhatsAppIcon from "../ui/WhatsAppIcon";

export default function Experiences() {
  const textRevealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 18,
      },
    },
  };

  const imageRevealVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom sophisticated cubic-bezier
      },
    },
  };

  return (
    <section id="experiences" className="relative py-28 md:py-40 bg-brand-light text-brand-dark overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-32 md:gap-48">
        
        {/* ==========================================
            Section 1: The Douro Boat Tour (Asymmetrical Layout) 
           ========================================== */}
        <div id="boats" className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          
          {/* Main Visual Frame (Left Aspect 16/10) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageRevealVariants}
            className="lg:col-span-7 relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-2xl z-10 border border-brand-primary/5 group"
          >
            <motion.div 
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full h-full relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&q=80&w=1200"
                alt="Bespoke Private Douro Cruise at Sunset"
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent pointer-events-none" />
            <span className="absolute bottom-6 left-6 text-[10px] font-sans font-bold uppercase tracking-widest text-brand-light bg-brand-primary/80 backdrop-blur-md px-3 py-1.5 rounded shadow-sm">
              Cruzeiros ao Pôr do Sol
            </span>
          </motion.div>

          {/* Overlapping Content Board (Right / Shifts Left on Desktop) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textRevealVariants}
            className="lg:col-span-6 lg:col-start-7 lg:-ml-12 bg-white rounded-xl p-8 md:p-12 lg:p-14 border border-brand-primary/5 shadow-xl hover:shadow-2xl transition-shadow duration-300 z-20 relative"
          >
            {/* Elegant Subhead Flag */}
            <span className="text-brand-accent font-sans text-xs font-bold uppercase tracking-widest block mb-4">
              Cruzeiros ao Pôr do Sol
            </span>

            {/* Massive Displays */}
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-primary mb-6 leading-tight">
              Navegar no Douro
            </h3>

            <p className="font-sans text-sm md:text-base text-brand-dark/75 leading-relaxed mb-8">
              Navegue pela deslumbrante paisagem histórica do Porto a bordo do nosso barco de cruzeiro clássico. Acompanhado por vinhos de reserva selecionados, esta é a elegância do pôr do sol no seu auge.
            </p>

            {/* Performance Metrics List */}
            <ul className="flex flex-col gap-3 mb-8 border-t border-brand-primary/5 pt-6 font-sans text-xs font-semibold text-brand-dark/85">
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
                <span>Aluguer Privado (Até 8 Exploradores)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                <span>Sommelier e Catering Incluídos</span>
              </li>
            </ul>

            {/* Action Direct Message CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block w-full sm:w-auto"
            >
              <a
                href={getWhatsAppLink("boat", "Douro Private Tour")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 py-4 px-8 bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-sans text-xs font-bold uppercase tracking-widest rounded-md shadow-lg transition-colors duration-300"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
                Pedir Disponibilidade de Barco
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* ==========================================
            Section 2: The Wine Cellar (Reversed Asymmetrical Layout)
           ========================================== */}
        <div id="cellar" className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          
          {/* Overlapping Content Board (Left / Shifts Right on Desktop) - Ordered First on Desktop */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textRevealVariants}
            className="lg:col-span-6 lg:z-20 relative order-2 lg:order-1 bg-white rounded-xl p-8 md:p-12 lg:p-14 border border-brand-primary/5 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Elegant Subhead Flag */}
            <span className="text-brand-accent font-sans text-xs font-bold uppercase tracking-widest block mb-4">
              Caves de Vila Nova de Gaia
            </span>

            {/* Massive Displays */}
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-primary mb-6 leading-tight">
              Caves Históricas
            </h3>

            <p className="font-sans text-sm md:text-base text-brand-dark/75 leading-relaxed mb-8">
              A sua experiência privada inclui acesso a garrafeiras históricas, provas verticais de Tawnies raros e narrativas conduzidas por um sommelier certificado.
            </p>

            {/* Performance Metrics List */}
            <ul className="flex flex-col gap-3 mb-8 border-t border-brand-primary/5 pt-6 font-sans text-xs font-semibold text-brand-dark/85">
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                <span>Acesso Exclusivo à Garrafeira</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
                <span>Provas Conduzidas por Sommelier</span>
              </li>
            </ul>

            {/* Action Direct Message CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block w-full sm:w-auto"
            >
              <a
                href={getWhatsAppLink("cellar", "Premium Wine Tasting")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 py-4 px-8 bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-sans text-xs font-bold uppercase tracking-widest rounded-md shadow-lg transition-colors duration-300"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
                Reservar Prova
              </a>
            </motion.div>
          </motion.div>

          {/* Main Visual Frame (Right Aspect 16/10) - Shifts Left on Desktop */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageRevealVariants}
            className="lg:col-span-7 lg:col-start-6 lg:-ml-12 order-1 lg:order-2 relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-2xl z-10 border border-brand-primary/5 group"
          >
            <motion.div 
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full h-full relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1200"
                alt="Elite Porto Port Wine Cellar Tasting Vault"
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent pointer-events-none" />
            <span className="absolute bottom-6 right-6 text-[10px] font-sans font-bold uppercase tracking-widest text-brand-light bg-brand-primary/80 backdrop-blur-md px-3 py-1.5 rounded shadow-sm">
              Caves de Vila Nova de Gaia
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
