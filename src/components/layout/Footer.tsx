/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import WhatsAppIcon from "../ui/WhatsAppIcon";

export default function Footer() {
  const footerMessage = "Olá! Gostaria de falar com a equipa DURUS Bikes & Tours sobre os serviços no Porto.";
  const whatsappUrl = createWhatsAppUrl(footerMessage);

  return (
    <footer id="footer" className="bg-brand-primary text-white border-t border-slate-800 pt-20 pb-12 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Column 1: Brand details (Col span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-bold tracking-tight text-white mb-1">
                DURUS Bikes &amp; Tours
              </span>
              <span className="font-sans text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Bike Rental &middot; Boat Tickets &middot; Wine Tours
              </span>
              <span className="font-sans text-[11px] uppercase tracking-wider text-brand-accent font-bold">
                Ribeira &middot; Porto &middot; Douro
              </span>
            </div>
            <p className="font-sans text-sm text-slate-300 leading-relaxed max-w-sm font-light">
              Curadoria de aventuras exclusivas no Porto e no maravilhoso vale do Douro. Explore a cidade ao seu próprio ritmo com conforto e estilo.
            </p>
          </div>

          {/* Column 2: Physical Hubs (Col span 3) */}
          <div className="lg:col-span-3 lg:col-start-7 flex flex-col gap-5">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[#9F1239]">
              Os Nossos Hubs
            </h4>
            <address className="not-italic flex flex-col gap-4 text-xs font-sans text-slate-300 font-light">
              <div>
                <p className="font-semibold text-white">Ribeira Hub</p>
                <p className="mt-1">Rua da Lada 104, Porto</p>
              </div>
              <div>
                <p className="font-semibold text-white">Gaia Hub</p>
                <p className="mt-1">Cais de Gaia 320, Vila Nova de Gaia</p>
              </div>
            </address>
          </div>

          {/* Column 3: Contact & Concierge (Col span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[#9F1239]">
              Concierge Direto
            </h4>
            <div className="flex flex-col gap-4">
              <p className="font-sans text-xs text-slate-300 font-light">
                Tire dúvidas, peça itinerários personalizados ou verifique o estado das reservas instantaneamente.
              </p>
              <a
                href="mailto:concierge@durusbikes.com"
                className="font-sans text-xs font-medium text-white hover:text-brand-accent transition-colors duration-200"
              >
                concierge@durusbikes.com
              </a>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-2.5 px-4 bg-brand-whatsapp text-white font-sans text-[11px] font-bold uppercase tracking-widest rounded transition-colors duration-300 hover:bg-brand-whatsappDark"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  Mensagem no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom border & copyright info */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] text-slate-400 font-light tracking-wide">
            &copy; {new Date().getFullYear()} DURUS Bikes &amp; Tours. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-[10px] font-sans text-slate-400 font-light tracking-wide">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos e Condições</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
