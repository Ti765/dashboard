import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="py-20 md:py-32 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      <div className="container mx-auto px-6 text-center">
        <h1 className="font-display text-4xl font-bold text-neutral-100 sm:text-5xl md:text-6xl lg:text-7xl">
          Bem-vindo ao <span className="text-primary">FiscalFlux</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-neutral-300 md:text-xl">
          Seu painel fiscal futurista para insights e controle financeiro simplificados.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="bg-primary hover:bg-primary-700 text-primary-foreground text-lg px-8 py-3 rounded-md shadow-lg hover:shadow-primary/50 transition-shadow" asChild>
            <Link href="#tools">Explorar Ferramentas</Link>
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-3 rounded-md" asChild>
            <Link href="#ai-insights">Ver Insights IA</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
