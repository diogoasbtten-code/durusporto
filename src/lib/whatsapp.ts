/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const WHATSAPP_NUMBER = "351912345678";

/**
 * Generates a pre-filled WhatsApp click-to-chat URL with safe URI encoding.
 */
export function createWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
