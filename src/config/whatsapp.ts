/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const WHATSAPP_NUMBER = "351900000000";

/**
 * Dynamically generates a pre-filled WhatsApp link for direct human interaction.
 * Encodes all parameters safely to guarantee error-free routing.
 */
export function getWhatsAppLink(
  type: "general" | "bike" | "boat" | "cellar",
  itemName?: string
): string {
  let message = "";

  switch (type) {
    case "bike":
      message = `Hi! I'm interested in booking a premium bike rental/experience${
        itemName ? ` (${itemName})` : ""
      }. I'd like to talk to a human concierge to check availability or request a callback. Could you assist me?`;
      break;
    case "boat":
      message = `Hi! I'm interested in booking an exclusive private Douro River boat tour${
        itemName ? ` (${itemName})` : ""
      }. I'd like to talk to a human concierge to check availability or request a callback. Could you assist me?`;
      break;
    case "cellar":
      message = `Hi! I'm interested in booking a historic wine cellar tasting${
        itemName ? ` (${itemName})` : ""
      }. I'd like to talk to a human concierge to check availability or request a callback. Could you assist me?`;
      break;
    case "general":
    default:
      message = "Hi! I'm looking for a premium experience in Porto. Can I speak to a specialist?";
      break;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
