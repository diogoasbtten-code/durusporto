import React from "react";

/**
 * Graceful fallback component for next/link when running in a client-side environment.
 */
export default function Link({ href, children, ...props }: any) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
