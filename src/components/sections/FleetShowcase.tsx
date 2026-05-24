/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import { Bike, Shield, Map } from "lucide-react";

export default function FleetShowcase() {
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

  const rentMessage = "Olá! Tenho interesse em alugar uma bicicleta com a DURUS Bikes & Tours na Ribeira. Podem ajudar-me?";
  const whatsappUrl = createWhatsAppUrl(rentMessage);

  const cardsData = [
    {
      id: "rent-flex",
      title: "Aluguer flexível",
      description: "Alugue uma bicicleta confortável pelo tempo que precisar. Dispomos de opções versáteis com tarifas flexíveis por períodos ajustados ao seu passeio, tudo mantido em estado perfeito.",
      icon: Bike,
    },
    {
      id: "rent-support",
      title: "Apoio local",
      description: "A nossa equipa de mecânicos e guias está sempre por perto. Oferecemos dicas genuínas, roteiros fáceis e apoio técnico garantido para que pedale com total tranquilidade.",
      icon: Shield,
    },
    {
      id: "rent-routes",
      title: "Rotas pela Ribeira e Douro",
      description: "Parta da Ribeira e descubra as melhores rotas até à Foz do Douro ou atravesse facilmente para Vila Nova de Gaia. Caminhos planos, seguros e incrivelmente panorâmicos.",
      icon: Map,
    },
  ];

  return (
    <section 
      id="fleet" 
      className="py-24 px-6 md:px-12 bg-slate-50 text-slate-800 scroll-mt-20 border-b border-slate-200/50"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-brand-accent font-sans text-xs font-bold uppercase tracking-widest block mb-4">
            Serviço Local &amp; Qualidade
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-slate-800">
            Bike Rental na Ribeira
          </h2>
          <div className="w-12 h-[2px] bg-brand-accent mx-auto my-6" />
          <p className="font-sans text-base text-slate-600 leading-relaxed tracking-wide font-light">
            Explore o Porto ao seu ritmo com bicicletas confortáveis, apoio local e recomendações reais antes de sair.
          </p>
        </div>

        {/* 3-Column Mobile-First Editorial Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {cardsData.map((card) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                className="group bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* CSS Icon/Shape badge */}
                  <div className="inline-flex items-center justify-center p-3.5 bg-brand-accent/5 rounded-xl text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300 mb-6">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  <h3 className="font-heading text-xl font-bold text-slate-800 mb-4 tracking-tight">
                    {card.title}
                  </h3>

                  <p className="font-sans text-sm text-slate-600 leading-relaxed mb-8 font-light">
                    {card.description}
                  </p>
                </div>

                {/* Direct WhatsApp CTA */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-auto"
                >
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-sans text-xs font-bold uppercase tracking-widest rounded-md transition-colors duration-300 shadow-sm"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Quero alugar uma bicicleta
                  </a>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
