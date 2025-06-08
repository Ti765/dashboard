import React from "react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-black bg-hero-light bg-cover bg-center overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* camada de luzes suaves */}
      <div
        className="pointer-events-none absolute inset-0 bg-hero-light opacity-80 animate-pulse-light"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="font-space font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Bem-vindo ao FiscalFlux
        </h1>
        <img
          src="/saturn_loop_transparent_1200dense.gif"
          alt="Planeta Saturno animado"
          className="mt-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mix-blend-screen animate-float"
        />
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#iniciar"
            className="px-6 py-3 text-white font-medium rounded-md border border-white/30 bg-white/5 hover:bg-white/10 transition"
          >
            Começar Agora
          </a>
          <a
            href="#saiba-mais"
            className="px-6 py-3 text-white font-medium rounded-md border border-white/30 hover:bg-white/10 transition"
          >
            Saiba Mais
          </a>
        </div>
      </div>
    </section>
  );
}
