
"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip as RechartsTooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { month: "Janeiro", revenue: 1860, expenses: 800 },
  { month: "Fevereiro", revenue: 3050, expenses: 2000 },
  { month: "Março", revenue: 2370, expenses: 1200 },
  { month: "Abril", revenue: 730, expenses: 1900 },
  { month: "Maio", revenue: 2090, expenses: 1300 },
  { month: "Junho", revenue: 2140, expenses: 1100 },
];

const chartConfig = {
  revenue: {
    label: "Receita",
    color: "hsl(var(--primary))",
  },
  expenses: {
    label: "Despesas",
    color: "hsl(var(--accent))",
  },
} satisfies ChartConfig;

export default function DataVisualizationSection() {
  return (
    <section id="data-visualization" className="py-16 md:py-24 bg-neutral-800">
      <div className="w-full mx-auto px-6 2xl:max-w-none">
        <h2 className="font-display text-3xl font-bold text-center text-neutral-100 mb-4">
          Visualização de Dados
        </h2>
        <p className="text-center text-neutral-400 mb-12 max-w-xl mx-auto">
          Analise suas finanças com gráficos interativos e KPIs claros.
        </p>
        <Card className="bg-neutral-900 border-neutral-700 shadow-xl">
          <CardHeader>
            <CardTitle className="text-neutral-100 font-display">Receitas vs. Despesas Mensais</CardTitle>
            <CardDescription className="text-neutral-400">Comparativo dos últimos 6 meses</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="w-full aspect-video"
              style={{ height: "clamp(400px, 50vh, 800px)" }}
            >
              <BarChart data={chartData} margin={{ top: 20, right: 20, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} stroke="hsl(var(--muted-foreground))" />
                <YAxis tickLine={false} axisLine={false} stroke="hsl(var(--muted-foreground))" tickFormatter={(value) => `R$${value / 1000}k`} />
                <RechartsTooltip
                  cursor={{ fill: "hsla(var(--muted), 0.2)" }}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar dataKey="revenue" fill="var(--color-revenue)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="expenses" fill="var(--color-expenses)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
