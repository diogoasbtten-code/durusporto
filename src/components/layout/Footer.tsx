/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import { getWhatsAppLink } from "../../config/whatsapp";
import WhatsAppIcon from "../ui/WhatsAppIcon";

export default function Footer() {
  return (
    <footer id="footer" className="bg-brand-dark text-brand-light border-t border-brand-light/10 pt-20 pb-12 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Column 1: Brand details (Col span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <span className="font-heading text-2xl font-semibold tracking-tight text-brand-light">
              Porto Premium
            </span>
            <p className="font-sans text-sm text-brand-light/75 leading-relaxed max-w-sm font-light">
              Curadoria de aventuras exclusivas no Porto e no vale do Douro.
            </p>
          </div>

          {/* Column 2: Physical Hubs (Col span 3) */}
          <div className="lg:col-span-3 lg:col-start-7 flex flex-col gap-5">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-brand-accent">
              Os Nossos Hubs
            </h4>
            <address className="not-italic flex flex-col gap-4 text-xs font-sans text-brand-light/70 font-light">
              <div>
                <p className="font-medium text-brand-light">Ribeira Hub</p>
                <p className="mt-1">Rua da Lada 104, Porto</p>
              </div>
              <div>
                <p className="font-medium text-brand-light">Gaia Hub</p>
                <p className="mt-1">Cais de Gaia 320, Vila Nova de Gaia</p>
              </div>
            </address>
          </div>

          {/* Column 3: Contact & Concierge (Col span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-brand-accent">
              Concierge Direto
            </h4>
            <div className="flex flex-col gap-4">
              <p className="font-sans text-xs text-brand-light/70 font-light">
                Tire dúvidas, peça itinerários personalizados ou verifique o estado das reservas.
              </p>
              <a
                href="mailto:concierge@portopremium.com"
                className="font-sans text-xs font-medium text-brand-light hover:text-brand-accent transition-colors duration-200"
              >
                concierge@portopremium.com
              </a>
              <div className="pt-2">
                <a
                  href={getWhatsAppLink("general")}
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
        <div className="border-t border-brand-light/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] text-brand-light/40 font-light tracking-wide">
            &copy; {new Date().getFullYear()} Porto Premium Experiences, Lda. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-[10px] font-sans text-brand-light/35 font-light tracking-wide">
            <Link href="#" className="hover:text-brand-light/60 transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-brand-light/60 transition-colors">Termos e Condições</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Fallback Link helper to satisfy import free components inside footer
function Link({ href, children, className }: any) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
