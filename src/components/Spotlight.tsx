"use client";

import { useEffect, useRef, useState } from "react";

export default function Spotlight() {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: -500,
    y: -500,
  });
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(() => {
        setPosition({ x: event.clientX, y: event.clientY });
      });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  const style: React.CSSProperties = {
    background: `radial-gradient(400px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 60%)`,
  };

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 transition-[background] duration-300"
      style={style}
    />
  );
}
