"use client";

import { useEffect, useRef } from "react";

export type AnimatedGradientPreset =
  | "Lava"
  | "Prism"
  | "Plasma"
  | "Pulse"
  | "Vortex"
  | "Mist";

export interface AnimatedGradientConfig {
  preset?: AnimatedGradientPreset;
  colors?: string[];
  speed?: number;
  scale?: number;
}

interface AnimatedGradientProps {
  config?: AnimatedGradientConfig;
  className?: string;
  style?: React.CSSProperties;
}

const PRESETS: Record<AnimatedGradientPreset, Required<Omit<AnimatedGradientConfig, "preset">>> = {
  Lava: { colors: ["#ff4d4d", "#ff9d00", "#ff2e63"], speed: 0.0006, scale: 1.2 },
  Prism: { colors: ["#8b5cf6", "#22d3ee", "#f472b6"], speed: 0.0009, scale: 1.4 },
  Plasma: { colors: ["#7c3aed", "#ec4899", "#3b82f6"], speed: 0.0012, scale: 1.1 },
  Pulse: { colors: ["#22d3ee", "#0ea5e9", "#6366f1"], speed: 0.0015, scale: 0.9 },
  Vortex: { colors: ["#f59e0b", "#ef4444", "#8b5cf6"], speed: 0.0011, scale: 1.6 },
  Mist: { colors: ["#94a3b8", "#64748b", "#cbd5e1"], speed: 0.0004, scale: 1.8 },
};

function hexToRgb(hex: string): [number, number, number] {
  const v = hex.replace("#", "");
  const bigint = parseInt(v, 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

export default function AnimatedGradient({ config, className, style }: AnimatedGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const preset = config?.preset ? PRESETS[config.preset] : PRESETS.Lava;
    const colors = (config?.colors ?? preset.colors).map(hexToRgb);
    const speed = config?.speed ?? preset.speed;
    const scale = config?.scale ?? preset.scale;

    let raf = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      const blobCount = colors.length;

      for (let i = 0; i < blobCount; i++) {
        const angle = t * speed + (i * (Math.PI * 2)) / blobCount;
        const radius = Math.min(width, height) * 0.35 * scale;
        const cx = width / 2 + Math.cos(angle) * radius * 0.5;
        const cy = height / 2 + Math.sin(angle * 1.3) * radius * 0.5;
        const r = Math.max(width, height) * 0.55 * scale;

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        const [red, green, blue] = colors[i];
        gradient.addColorStop(0, `rgba(${red}, ${green}, ${blue}, 0.55)`);
        gradient.addColorStop(1, `rgba(${red}, ${green}, ${blue}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [config?.preset, config?.colors, config?.speed, config?.scale]);

  return (
    <canvas
      ref={canvasRef}
      className={className ?? "absolute inset-0 h-full w-full"}
      style={style}
      aria-hidden="true"
    />
  );
}
