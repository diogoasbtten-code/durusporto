/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import WhatsAppIcon from "../ui/WhatsAppIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Experiências", href: "#experiences" },
    { name: "Porquê DURUS", href: "#why-durus" },
    { name: "Localização", href: "#location" },
  ];

  const defaultMessage = "Olá! Gostaria de obter mais informações sobre os serviços da DURUS Bikes & Tours.";
  const whatsappUrl = createWhatsAppUrl(defaultMessage);

  return (
    <>
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-brand-border/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Brand Logo & Editorial Info */}
          <a href="#" className="flex flex-col select-none group">
            <span className="font-heading text-lg md:text-xl font-bold tracking-tight text-slate-800 group-hover:text-brand-accent transition-colors duration-300">
              DURUS Bikes & Tours
            </span>
            <span className="font-sans text-[10px] uppercase tracking-wider text-slate-500 font-medium">
              Bike Rental &middot; Boat Tickets &middot; Wine Tours
            </span>
          </a>

          {/* Desktop Links (Center) */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-brand-accent transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA (Right) */}
          <div className="hidden md:flex items-center">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-sans text-xs font-bold uppercase tracking-widest rounded-md shadow-sm transition-colors duration-300 flex items-center gap-2"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar no WhatsApp
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
            className="md:hidden p-2 text-slate-800 hover:text-brand-accent transition-colors focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-28 px-8 md:hidden"
          >
            <div className="flex flex-col gap-8 text-center sm:text-left mt-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className="font-heading text-3xl font-bold text-slate-800 hover:text-brand-accent transition-colors duration-200"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="mt-12"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                  className="flex items-center justify-center gap-2.5 w-full py-4 bg-brand-whatsapp text-white font-sans text-sm font-bold uppercase tracking-widest rounded-md shadow-sm hover:bg-brand-whatsappDark transition-colors duration-300"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Falar no WhatsApp
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
