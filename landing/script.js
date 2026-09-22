// Mobile nav toggle
const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");
burger.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});
mobileNav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => mobileNav.classList.remove("open"))
);

// Preset definitions, ported from the AnimatedGradient config concept
const PRESETS = {
  Lava: { colors: ["#ff4d4d", "#ff9d00", "#ff2e63"], speed: 0.0006, scale: 1.2 },
  Prism: { colors: ["#8b5cf6", "#22d3ee", "#f472b6"], speed: 0.0009, scale: 1.4 },
  Plasma: { colors: ["#7c3aed", "#ec4899", "#3b82f6"], speed: 0.0012, scale: 1.1 },
  Pulse: { colors: ["#22d3ee", "#0ea5e9", "#6366f1"], speed: 0.0015, scale: 0.9 },
  Vortex: { colors: ["#f59e0b", "#ef4444", "#8b5cf6"], speed: 0.0011, scale: 1.6 },
  Mist: { colors: ["#94a3b8", "#64748b", "#cbd5e1"], speed: 0.0004, scale: 1.8 },
};

function hexToRgb(hex) {
  const v = hex.replace("#", "");
  const bigint = parseInt(v, 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

function createAnimatedGradient(canvas, initialPreset) {
  const ctx = canvas.getContext("2d");
  let preset = PRESETS[initialPreset];
  let raf;
  let width, height, dpr;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);
  resize();

  function draw(t) {
    ctx.clearRect(0, 0, width, height);
    const colors = preset.colors.map(hexToRgb);
    const speed = preset.speed;
    const scale = preset.scale;
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
  }

  raf = requestAnimationFrame(draw);

  return {
    setPreset(name) {
      preset = PRESETS[name] || preset;
    },
    destroy() {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
    },
  };
}

// Hero background gradient (fixed preset, ambient)
const heroCanvas = document.getElementById("gradientCanvas");
if (heroCanvas) {
  createAnimatedGradient(heroCanvas, "Prism");
}

// Interactive demo section
const demoCanvas = document.getElementById("demoCanvas");
const presetButtonsEl = document.getElementById("presetButtons");
const presetNameEl = document.getElementById("presetName");

if (demoCanvas && presetButtonsEl) {
  const presetNames = Object.keys(PRESETS);
  let activePreset = "Lava";
  const demoGradient = createAnimatedGradient(demoCanvas, activePreset);

  presetNames.forEach((name) => {
    const btn = document.createElement("button");
    btn.textContent = name;
    if (name === activePreset) btn.classList.add("active");
    btn.addEventListener("click", () => {
      activePreset = name;
      demoGradient.setPreset(name);
      presetNameEl.textContent = name;
      presetButtonsEl.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
    presetButtonsEl.appendChild(btn);
  });

  presetNameEl.textContent = activePreset;
}
