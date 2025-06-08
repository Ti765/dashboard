import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-black overflow-hidden py-20 md:py-32">
      <div className="pointer-events-none absolute -top-20 -left-40 w-[400px] h-[400px] bg-red-500 rounded-full blur-3xl opacity-50" />
      <div className="pointer-events-none absolute -bottom-20 -right-40 w-[400px] h-[400px] bg-blue-600 rounded-full blur-3xl opacity-50" />
      <img
        src="/saturn_loop_transparent_1200dense.gif"
        alt="Planeta animado"
        className="pointer-events-none absolute inset-0 m-auto w-[600px] max-w-none opacity-20 animate-float"
      />
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-100">
          Bem-vindo ao <span className="text-primary">FiscalFlux</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-neutral-300">
          Seu painel fiscal futurista para insights e controle financeiro simplificados.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-primary text-primary-foreground px-8 py-3 rounded-md shadow-lg hover:shadow-primary/50" asChild>
            <Link href="#tools">Explorar Ferramentas</Link>
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary px-8 py-3 rounded-md hover:bg-primary/10" asChild>
            <Link href="#ai-insights">Ver Insights IA</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
