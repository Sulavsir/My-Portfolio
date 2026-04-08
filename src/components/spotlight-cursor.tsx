"use client";

import { useEffect, useState } from "react";

export function SpotlightCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[5] mix-blend-screen transition-[opacity] duration-300"
      style={{
        background: `radial-gradient(480px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.045), transparent 55%)`,
      }}
    />
  );
}
