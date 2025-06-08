import ToolCard from '@/components/ui/tool-card';
import { CreditCard, TrendingUp, FileText, Target, ShieldCheck, AlertTriangle } from 'lucide-react';

const tools = [
  {
    title: "Contas a Pagar",
    description: "Gerencie suas despesas e pagamentos pendentes.",
    icon: CreditCard,
    iconColorClassName: "text-error",
    bgGradientVia: "via-red-600",
  },
  {
    title: "Receitas",
    description: "Acompanhe suas fontes de renda e faturamento.",
    icon: TrendingUp,
    iconColorClassName: "text-success",
    bgGradientVia: "via-green-600",
  },
  {
    title: "Relatórios Fiscais",
    description: "Gere relatórios detalhados e personalizados.",
    icon: FileText,
    iconColorClassName: "text-secondary", // Cyan
    bgGradientVia: "via-cyan-500",
  },
  {
    title: "Orçamento Anual",
    description: "Planeje e monitore seu orçamento para o ano.",
    icon: Target,
    iconColorClassName: "text-primary-300",
    bgGradientVia: "via-violet-400",
  },
  {
    title: "Compliance Fiscal",
    description: "Verifique a conformidade com as normas fiscais.",
    icon: ShieldCheck,
    iconColorClassName: "text-warning",
    bgGradientVia: "via-yellow-500",
  },
  {
    title: "Alertas e Notificações",
    description: "Receba alertas sobre prazos e pendências importantes.",
    icon: AlertTriangle,
    iconColorClassName: "text-primary",
    bgGradientVia: "via-violet-600",
  },
];

export default function ToolsMetricsSection() {
  return (
    <section id="tools" className="py-16 md:py-24 bg-neutral-800">
      <div className="w-full mx-auto px-6 2xl:max-w-none">
        <h2 className="font-display text-3xl font-bold text-center text-neutral-100 mb-4">
          Ferramentas e Métricas
        </h2>
        <p className="text-center text-neutral-400 mb-12 max-w-xl mx-auto">
          Acesse rapidamente as funcionalidades essenciais para a gestão fiscal eficiente e visualize seus principais indicadores.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              iconColorClassName={tool.iconColorClassName}
              bgGradientVia={tool.bgGradientVia}
            />
          ))}
           {/* Example of a loading card */}
          {/* <ToolCard title="Carregando Dados..." isLoading={true} /> */}
        </div>
      </div>
    </section>
  );
}
