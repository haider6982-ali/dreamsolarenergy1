"use client";

import React, { useEffect, useRef, useCallback } from "react";

export default function CustomCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Store mutable state in refs so the RAF loop doesn't re-mount on every state change
  const state = useRef({
    mouseX: -100,
    mouseY: -100,
    dotX: -100,
    dotY: -100,
    ringX: -100,
    ringY: -100,
    isVisible: false,
    isHovered: false,
    isClicking: false,
    cursorText: "",
    hasMoved: false,
  });

  const updateClasses = useCallback(() => {
    const s = state.current;
    const container = containerRef.current;
    const dot = dotRef.current?.firstElementChild as HTMLElement | null;
    const ring = ringRef.current?.firstElementChild as HTMLElement | null;

    if (container) {
      container.style.opacity = s.isVisible ? "1" : "0";
    }

    if (dot) {
      if (s.isClicking) {
        dot.style.width = "8px";
        dot.style.height = "8px";
        dot.style.transform = "translate(-50%, -50%) scale(0.75)";
      } else if (s.isHovered) {
        dot.style.width = "14px";
        dot.style.height = "14px";
        dot.style.transform = "translate(-50%, -50%) scale(1.25)";
      } else {
        dot.style.width = "10px";
        dot.style.height = "10px";
        dot.style.transform = "translate(-50%, -50%) scale(1)";
      }
    }

    if (ring) {
      if (s.cursorText) {
        ring.style.width = "80px";
        ring.style.height = "80px";
        ring.style.backgroundColor = "#0B172E";
        ring.style.borderColor = "#F59E0B";
        ring.style.boxShadow = "0 8px 30px rgba(245,158,11,0.45)";
        ring.innerHTML = `<span style="color:#F59E0B;font-size:9px;font-weight:900;letter-spacing:0.1em;text-transform:uppercase;">${s.cursorText}</span>`;
      } else if (s.isHovered) {
        ring.style.width = "56px";
        ring.style.height = "56px";
        ring.style.backgroundColor = "rgba(245,158,11,0.15)";
        ring.style.borderColor = "#F59E0B";
        ring.style.boxShadow = "0 0 20px rgba(245,158,11,0.25)";
        ring.innerHTML = "";
      } else {
        ring.style.width = "36px";
        ring.style.height = "36px";
        ring.style.backgroundColor = "transparent";
        ring.style.borderColor = "rgba(11,23,46,0.45)";
        ring.style.boxShadow = "0 1px 2px rgba(0,0,0,0.05)";
        ring.innerHTML = "";
      }

      ring.style.transform = s.isClicking
        ? "translate(-50%, -50%) scale(0.9)"
        : "translate(-50%, -50%) scale(1)";
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Don't show custom cursor on touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches && !window.matchMedia("(pointer: fine)").matches;
    if (isTouch) return;

    let active = true;
    let rafId: number;
    const s = state.current;

    const onMouseMove = (e: MouseEvent) => {
      s.mouseX = e.clientX;
      s.mouseY = e.clientY;
      if (!s.hasMoved) {
        s.hasMoved = true;
        // Jump to initial position immediately
        s.dotX = e.clientX;
        s.dotY = e.clientY;
        s.ringX = e.clientX;
        s.ringY = e.clientY;
      }
      if (!s.isVisible) {
        s.isVisible = true;
        updateClasses();
      }
    };

    const onMouseDown = () => {
      s.isClicking = true;
      updateClasses();
    };

    const onMouseUp = () => {
      s.isClicking = false;
      updateClasses();
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTrigger = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTrigger) {
        const type = cursorTrigger.getAttribute("data-cursor") || "VIEW";
        s.cursorText = type.toUpperCase();
        s.isHovered = true;
        updateClasses();
        return;
      }

      const isInteractive = target.closest(
        "a, button, [role='button'], input[type='range'], input[type='submit']"
      );
      if (isInteractive) {
        s.cursorText = "";
        s.isHovered = true;
      } else {
        s.cursorText = "";
        s.isHovered = false;
      }
      updateClasses();
    };

    const onDocumentLeave = () => {
      s.isVisible = false;
      updateClasses();
    };

    const onDocumentEnter = () => {
      s.isVisible = true;
      updateClasses();
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", onMouseOver);
    document.documentElement.addEventListener("mouseleave", onDocumentLeave);
    document.documentElement.addEventListener("mouseenter", onDocumentEnter);

    const render = () => {
      if (!active) return;

      // Snappy precision dot tracking
      s.dotX += (s.mouseX - s.dotX) * 0.75;
      s.dotY += (s.mouseY - s.dotY) * 0.75;

      // Silky smooth trailing fluid ring
      s.ringX += (s.mouseX - s.ringX) * 0.22;
      s.ringY += (s.mouseY - s.ringY) * 0.22;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${s.dotX}px, ${s.dotY}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${s.ringX}px, ${s.ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      active = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onMouseOver);
      document.documentElement.removeEventListener("mouseleave", onDocumentLeave);
      document.documentElement.removeEventListener("mouseenter", onDocumentEnter);
    };
  }, [updateClasses]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        pointerEvents: "none",
        userSelect: "none",
        opacity: 0,
        transition: "opacity 0.2s ease",
      }}
    >
      {/* 1. Precision Core Amber Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          willChange: "transform",
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "#F59E0B",
            boxShadow: "0 0 12px #F59E0B",
            transform: "translate(-50%, -50%)",
            transition: "width 0.1s ease-out, height 0.1s ease-out, transform 0.1s ease-out",
          }}
        />
      </div>

      {/* 2. Trailing Smooth Fluid Ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          willChange: "transform",
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            backgroundColor: "transparent",
            border: "2px solid rgba(11,23,46,0.45)",
            boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
            transform: "translate(-50%, -50%)",
            transition: "all 0.3s ease-out",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-jakarta), sans-serif",
            fontWeight: 900,
            letterSpacing: "0.1em",
            fontSize: "9px",
            textTransform: "uppercase" as const,
          }}
        />
      </div>
    </div>
  );
}
