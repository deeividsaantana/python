"use client";

import AnimatedGradient from "@/registry/spell-ui/animated-gradient";

export function DemoPresets() {
  return (
    <div className="relative min-h-[500px] w-full md:min-h-[350px] flex flex-col rounded-2xl overflow-hidden border border-border">
      <AnimatedGradient style={{ zIndex: 0 }} config={{ preset: "Prism" }} />
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <p className="text-4xl font-semibold tracking-tighter text-foreground">
          Prism
        </p>
      </div>
    </div>
  );
}
