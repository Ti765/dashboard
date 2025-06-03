
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import ToolsMetricsSection from "@/components/sections/tools-metrics-section";
import AiInsightsSection from "@/components/sections/ai-insights-section";
import GradientDisplay from "@/components/ui/gradient-display";
import { Separator } from "@/components/ui/separator";
import DynamicDataVizWrapper from "@/components/dynamic-data-viz-wrapper"; // Import the new wrapper

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ToolsMetricsSection />
        <Separator className="my-0 border-neutral-800" />
        <DynamicDataVizWrapper /> {/* Use the new wrapper */}
        <Separator className="my-0 border-neutral-800" />
        <AiInsightsSection />
        
        {/* Example of GradientDisplay as per prompt */}
        <section className="py-16 md:py-24 bg-neutral-800">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-center text-neutral-100 mb-12">
              Demonstração de Gradiente Dinâmico
            </h2>
            <GradientDisplay 
              startColor="hsl(var(--primary))" 
              endColor="hsl(var(--accent))"
              className="max-w-md mx-auto"
            />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
