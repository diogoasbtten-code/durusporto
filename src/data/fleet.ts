/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Bike {
  id: string;
  name: string;
  description: string;
  imagePath: string;
  locations: string[];
  specs: string[];
}

export const fleetData: Bike[] = [
  {
    id: "ebike-mtb",
    name: "Moustache Samedi Trail E-MTB",
    description: "Enduro-grade full-suspension e-bike powered by the industry-leading Bosch Performance Line CX motor. Effortless climbing on Porto's highest hills with 85Nm of torque.",
    imagePath: "https://images.unsplash.com/photo-1579824619171-41c3a645b9e5?auto=format&fit=crop&q=80&w=800",
    locations: ["Ribeira", "Gaia"],
    specs: ["Bosch CX 85Nm Motor", "150mm Fox Suspension", "750Wh Long-Range Battery", "Shimano XT 12-Speed"],
  },
  {
    id: "ebike-cruiser",
    name: "Riese & Müller Nevo GT Cruiser",
    description: "Ultimate comfort meets German engineering. Featuring step-through ease, Enviolo continuous shifting, and belt drive for silent coastal exploration to Gaia's beaches.",
    imagePath: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800",
    locations: ["Ribeira"],
    specs: ["Gates Carbon Belt Drive", "Stepless Enviolo Hub", "Comfort Gel Saddle", "Magura MT4 Hydraulic Brakes"],
  },
  {
    id: "ebike-gravel",
    name: "Specialized Turbo Creo SL Gravel",
    description: "Ultra-lightweight carbon gravel e-bike. Perfect for high-speed coastal loops to Matosinhos and Douro Valley entry points, offering organic, natural assist.",
    imagePath: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=80&w=800",
    locations: ["Gaia"],
    specs: ["Fact 11r Carbon Frame", "Specialized SL 1.1 Motor", "Future Shock 2.0 Damper", "Hydraulic Disc Brakes"],
  },
];
