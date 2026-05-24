/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Heart, MapPin, Layers } from "lucide-react";

export default function WhyDurus() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
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

  const features = [
    {
      title: "Atendimento direto por WhatsApp",
      description: "Diga adeus a formulários sem fim e cliques frios. Fale instantaneamente com pessoas de carne e osso prontas a ajudar no seu passeio.",
      icon: MessageSquare,
    },
    {
      title: "Recomendações locais genuínas",
      description: "Esqueça dicas genéricas de internet. Partilhamos caminhos reais, segredos da Ribeira e os horários certos para evitar a confusão.",
      icon: Heart,
    },
    {
      title: "Ponto estratégico ideal",
      description: "Estamos localizados mesmo no centro de transição no Porto. O ponto perfeito para começar a pedalar rumo a Gaia ou ao rio.",
      icon: MapPin,
    },
    {
      title: "Tudo num único lugar",
      description: "Aluguer de bicicletas confortáveis, bilhetes de barco rápidos e marcação de caves combinados de forma integrada e sem stress.",
      icon: Layers,
    },
  ];

  return (
    <section 
      id="why-durus" 
      className="py-24 px-6 md:px-12 bg-slate-50 text-slate-800 scroll-mt-20 border-b border-slate-200/50"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-brand-accent font-sans text-xs font-bold uppercase tracking-widest block mb-4">
            Porquê Escolher a DURUS
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-slate-800">
            Uma base local para descobrir o Porto sem complicações
          </h2>
          <div className="w-12 h-[2px] bg-brand-accent mx-auto my-6" />
        </div>

        {/* 2x2 Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
        >
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-5 items-start bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm"
              >
                <div className="p-3 bg-brand-accent/5 rounded-lg text-brand-accent shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-slate-800 mb-2 tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed font-light">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
