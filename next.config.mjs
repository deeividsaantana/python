// NEXT_OUTPUT=export (npm run build:static) gera um site estático em out/,
// para hospedagem sem servidor na raiz de um domínio.
const staticExport = process.env.NEXT_OUTPUT === "export";

/** @type {import('next').NextConfig} */
const nextConfig = staticExport ? { output: "export" } : {};

export default nextConfig;
