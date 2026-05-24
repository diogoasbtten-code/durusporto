/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import WhatsAppIcon from "../ui/WhatsAppIcon";

export default function FinalCTA() {
  const finalMessage = "Olá! Estou a planear uma visita ao Porto e gostaria de ajuda para escolher entre bike rental, boat tickets e wine tours.";
  const whatsappUrl = createWhatsAppUrl(finalMessage);

  return (
    <section className="py-24 px-6 md:px-12 bg-white text-slate-800 text-center relative overflow-hidden border-b border-slate-100">
      {/* Visual top/bottom border lines acting as subtle separation guidelines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-slate-100" />

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 relative z-10">
        
        {/* Simple Badge Indicator */}
        <span className="text-brand-accent font-sans text-xs font-bold uppercase tracking-widest block">
          Inicie o Seu Roteiro Hoje
        </span>

        {/* Big Displays Title */}
        <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-slate-800 leading-tight max-w-2xl">
          Pronto para planear a sua experiência no Porto?
        </h2>

        {/* Supportive text containing precise business instruction */}
        <p className="font-sans text-base md:text-lg text-slate-600 max-w-xl font-light leading-relaxed tracking-wide">
          Fale connosco no WhatsApp e diga-nos o que procura. A nossa equipa ajuda-o a escolher a melhor opção.
        </p>

        {/* High impact green action button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 py-4 px-8 bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-sans text-xs font-bold uppercase tracking-widest rounded-md shadow-lg transition-colors duration-300"
          >
            <WhatsAppIcon className="h-4.5 w-4.5" />
            Falar com a equipa
          </a>
        </motion.div>

        {/* Pulse response promise reassurance */}
        <p className="font-sans text-[11px] text-slate-400 font-medium tracking-wider uppercase">
          Resposta imediata de um humano local &middot; Sem bots automáticos
        </p>

      </div>
    </section>
  );
}
