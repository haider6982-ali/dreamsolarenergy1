"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  strength?: number;
  variant?: "primary" | "secondary" | "outline" | "lime";
  className?: string;
}

export default function MagneticButton({
  children,
  strength = 0.3,
  variant = "primary",
  className = "",
  onClick,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const btn = buttonRef.current;
    const content = contentRef.current;
    if (!btn || !content) return;

    const xTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3.out" });

    const xContentTo = gsap.quickTo(content, "x", { duration: 0.3, ease: "power3.out" });
    const yContentTo = gsap.quickTo(content, "y", { duration: 0.3, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = btn.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      xTo(deltaX);
      yTo(deltaY);

      xContentTo(deltaX * 0.5);
      yContentTo(deltaY * 0.5);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
      xContentTo(0);
      yContentTo(0);
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  const baseStyles = "relative inline-flex items-center justify-center font-display font-semibold text-sm tracking-wider uppercase transition-colors duration-300 rounded-lg px-8 py-4 overflow-hidden group select-none";

  const variantStyles = {
    primary: "bg-[#F7941D] text-[#0F1B2E] hover:bg-[#EE6B00] shadow-[0_0_25px_rgba(247,148,29,0.35)] hover:shadow-[0_0_40px_rgba(247,148,29,0.6)]",
    secondary: "bg-[#1B2A4A] text-[#F8F7F4] border border-[#E2DFD6]/20 hover:border-[#F7941D]/40 hover:bg-[#22325A]",
    outline: "bg-transparent text-[#1B2A4A] border border-[#1B2A4A]/40 hover:border-[#1B2A4A] hover:bg-[#1B2A4A]/10",
    lime: "bg-[#3C8C2E] text-white hover:bg-[#2F6E24] shadow-[0_0_25px_rgba(60,140,46,0.35)] hover:shadow-[0_0_40px_rgba(60,140,46,0.6)]",
  };

  return (
    <button
      ref={buttonRef}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {/* Background kinetic sweep */}
      <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none rounded-full" />
      
      <span ref={contentRef} className="relative z-10 flex items-center space-x-2">
        {children}
      </span>
    </button>
  );
}
