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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 85,
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
      className="py-20 px-6 md:px-12 bg-neutral-50 text-slate-800 scroll-mt-20 border-b border-slate-200/50"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Premium Split Layout: Left Column (Editorial header & image), Right Column (Value cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Editorial Half */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[#BE123C] font-sans text-xs font-bold uppercase tracking-widest block mb-3">
                Porquê escolher a DURUS
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800 leading-tight mb-4">
                Uma base local para descobrir o Porto sem complicações
              </h2>
              <div className="w-10 h-[2px] bg-[#BE123C] mb-5" />
              <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed font-light mb-8 lg:mb-12">
                Chega, fala com alguém local e sai com uma experiência clara — bicicleta, barco ou vinho, sem processos frios nem confusos.
              </p>
            </div>

            {/* Evocative Travel Photo Panel */}
            <div className="h-64 sm:h-72 lg:h-80 xl:h-96 w-full rounded-2xl overflow-hidden relative shadow-sm max-w-lg lg:max-w-none">
              <div 
                className="absolute inset-0 bg-cover bg-center brightness-[0.95]"
                style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1513735492246-483525079686?auto=format&fit=crop&q=85&w=1600')` 
                }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="font-sans text-[10px] uppercase font-bold tracking-widest block text-white/80">
                  Viva o Porto de Verdade
                </span>
                <span className="font-heading font-bold text-sm">
                  Espírito local nas margens do Douro
                </span>
              </div>
            </div>
          </div>

          {/* Right Cards Half */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feat, index) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex flex-col gap-4 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 pointer-events-auto"
                  >
                    <div className="p-3 bg-[#BE123C]/5 rounded-xl text-[#BE123C] w-max">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-slate-800 mb-2 tracking-tight">
                        {feat.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                        {feat.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
