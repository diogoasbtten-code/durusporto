"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { getWhatsAppLink } from "../../config/whatsapp";
import WhatsAppIcon from "../ui/WhatsAppIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "A Frota", href: "#fleet" },
    { name: "Barcos no Douro", href: "#boats" },
    { name: "Caves de Vinho", href: "#cellar" },
  ];

  return (
    <>
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 bg-brand-light/90 backdrop-blur-md border-b border-brand-primary/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="#" className="flex items-center gap-1 group">
            <span className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-brand-primary group-hover:text-brand-accent transition-colors duration-300">
              Porto Premium
            </span>
          </Link>

          {/* Desktop Links (Center) */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium tracking-wide text-brand-dark/85 hover:text-brand-accent transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA (Right) */}
          <div className="hidden md:flex items-center">
            <motion.a
              href={getWhatsAppLink("general")}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-sans text-xs font-semibold uppercase tracking-widest rounded-md shadow-sm transition-colors duration-300 flex items-center gap-2"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Fale Connosco
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
            className="md:hidden p-2 text-brand-dark hover:text-brand-accent transition-colors focus:outline-none"
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
            className="fixed inset-0 z-40 bg-brand-light flex flex-col pt-28 px-8 md:hidden"
          >
            <div className="flex flex-col gap-8 text-center sm:text-left">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className="font-heading text-3xl font-medium text-brand-primary hover:text-brand-accent transition-colors duration-200"
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
                  href={getWhatsAppLink("general")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-brand-whatsapp text-white font-sans text-sm font-semibold uppercase tracking-widest rounded-md shadow-sm hover:bg-brand-whatsappDark transition-colors duration-300"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Fale Connosco
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
