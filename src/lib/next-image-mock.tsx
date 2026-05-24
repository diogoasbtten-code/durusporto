import React from "react";

/**
 * Performant standard React image component that mimics next/image props,
 * ensuring high-fidelity layout support in the live environment.
 */
export default function Image({ src, alt, fill, priority, className, style, ...props }: any) {
  const mergedStyle = fill
    ? {
        position: "absolute" as const,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover" as const,
        ...style,
      }
    : style;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={mergedStyle}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
