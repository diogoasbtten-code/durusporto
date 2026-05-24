/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import { Users2, Handshake } from "lucide-react";

export default function FinalCTA() {
  const finalMessage = "Olá! Estou a planear uma visita ao Porto e gostaria de ajuda para escolher entre bicicletas, barco no Douro e experiências de vinho.";
  const whatsappUrl = createWhatsAppUrl(finalMessage);

  return (
    <section className="py-20 px-6 md:px-12 bg-slate-50 text-slate-800 relative overflow-hidden border-b border-slate-150">
      
      {/* Decorative top border line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-slate-200/50" />

      {/* Main Split Block */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 relative">
        
        {/* Decorative backdrop light glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#BE123C]/5 rounded-full blur-3xl pointer-events-none select-none" aria-hidden="true" />

        {/* Left Column: Human Friendly Team Visual (Col Span 5) */}
        <div className="lg:col-span-5 h-72 lg:h-auto relative bg-slate-100">
          <div 
            className="absolute inset-0 bg-cover bg-center brightness-[0.94]"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=85&w=1600')` 
            }}
            aria-hidden="true"
          />
          {/* Subtle warm overlay gradient for elegant picture contrast */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/40 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="font-sans text-[10px] uppercase font-bold tracking-widest block text-white/80">
              DURUS local hosts
            </span>
            <span className="font-heading font-bold text-sm text-white/95 flex items-center gap-1">
              <Users2 className="h-4 w-4" />
              Equipa local sempre disponível
            </span>
          </div>
        </div>

        {/* Right Column: Premium Personal Text & Direct WhatsApp CTA (Col Span 7) */}
        <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center text-left relative z-10">
          
          <div className="flex items-center gap-2 px-3 py-1 bg-[#BE123C]/5 text-[#BE123C] font-sans text-[10px] uppercase font-bold tracking-widest rounded-full w-max mb-4">
            <Handshake className="h-3.5 w-3.5" />
            Atendimento Humano
          </div>

          <span className="text-[#BE123C] font-sans text-xs font-bold uppercase tracking-widest block mb-1">
            Fale com uma pessoa local
          </span>

          <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-slate-800 leading-tight mb-4">
            Diga-nos o que procura no Porto
          </h2>

          <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed font-light mb-8 max-w-xl">
            Quer alugar bicicletas, reservar barco no Douro ou escolher uma experiência de vinho? Envie uma mensagem e a nossa equipa ajuda-o a decidir com clareza, partilhando recomendações genuínas de quem vive a cidade.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="shrink-0"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-4 px-8 bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-sans text-xs font-bold uppercase tracking-widest rounded-md shadow-md transition-all duration-300"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
                Falar com a equipa
              </a>
            </motion.div>

            {/* Tiny reassurance bullets inside the message frame */}
            <div className="text-slate-400 font-sans text-[11px] font-medium uppercase tracking-wider space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="h-1 w-1 bg-emerald-500 rounded-full" />
                <span>Resposta humana</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1 w-1 bg-emerald-500 rounded-full" />
                <span>Apoio local</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1 w-1 bg-[#BE123C] rounded-full" />
                <span>Sem formulários frios</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
