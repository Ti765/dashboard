"use client";

import React, { useState, useTransition } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, AlertCircle, CheckCircle2, Wand2 } from 'lucide-react';
import { generateFiscalSummaryAction, generateDetailedInsightAction } from '@/app/actions';
import type { FiscalSummaryOutput, FiscalSummaryInput } from '@/ai/flows/fiscal-summary-with-llm';
import type { DetailedInsightOutput, DetailedInsightInput } from '@/ai/flows/detailed-insight-on-demand';
import SaturnLoader from '../ui/saturn-loader';

export default function AiInsightsSection() {
  const [isPending, startTransition] = useTransition();

  // State for Fiscal Summary
  const [fiscalData, setFiscalData] = useState<string>("Exemplo: Receita total: R$50.000, Despesas: R$20.000, Lucro: R$30.000. Aumento de 15% na receita em comparação ao mês anterior.");
  const [insightToggle, setInsightToggle] = useState<boolean>(true);
  const [summaryResult, setSummaryResult] = useState<FiscalSummaryOutput | null>(null);
  const [summaryError, setSummaryError] = useState<string | null>(null);

  // State for Detailed Insight
  const [dataPoint, setDataPoint] = useState<string>("Aumento de 15% na receita");
  const [context, setContext] = useState<string>("Comparação com o mês anterior em um período de crescimento estável.");
  const [detailResult, setDetailResult] = useState<DetailedInsightOutput | null>(null);
  const [detailError, setDetailError] = useState<string | null>(null);

  const handleGenerateSummary = () => {
    setSummaryError(null);
    setSummaryResult(null);
    startTransition(async () => {
      const result = await generateFiscalSummaryAction({ fiscalData, insightToggle });
      if ('error' in result) {
        setSummaryError(result.error);
      } else {
        setSummaryResult(result);
      }
    });
  };

  const handleGenerateDetail = () => {
    setDetailError(null);
    setDetailResult(null);
    startTransition(async () => {
      const result = await generateDetailedInsightAction({ dataPoint, context });
      if ('error' in result) {
        setDetailError(result.error);
      } else {
        setDetailResult(result);
      }
    });
  };

  return (
    <section id="ai-insights" className="py-16 md:py-24 bg-neutral-900">
      <div className="w-full mx-auto px-6 2xl:max-w-none">
        <h2 className="font-display text-3xl font-bold text-center text-neutral-100 mb-4">
          Insights com Inteligência Artificial <Wand2 className="inline-block ml-2 h-8 w-8 text-primary" />
        </h2>
        <p className="text-center text-neutral-400 mb-12 max-w-xl mx-auto">
          Utilize o poder da IA para obter resumos fiscais inteligentes e análises detalhadas sob demanda.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Fiscal Summary Card */}
          <Card className="bg-neutral-800 border-neutral-700 shadow-xl">
            <CardHeader>
              <CardTitle className="text-neutral-100 font-display">Resumo Fiscal Inteligente</CardTitle>
              <CardDescription className="text-neutral-400">Gere um resumo conciso dos seus dados fiscais com insights opcionais.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="fiscalData" className="text-neutral-300">Dados Fiscais</Label>
                <Textarea
                  id="fiscalData"
                  value={fiscalData}
                  onChange={(e) => setFiscalData(e.target.value)}
                  placeholder="Insira seus dados fiscais aqui..."
                  className="custom-input mt-1 min-h-24"
                  rows={4}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="insightToggle"
                  checked={insightToggle}
                  onCheckedChange={setInsightToggle}
                  aria-label="Ativar Insights IA"
                />
                <Label htmlFor="insightToggle" className="text-neutral-300">Ativar Insights de IA</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleGenerateSummary} disabled={isPending} className="w-full bg-primary hover:bg-primary-700">
                {isPending && !summaryResult && !summaryError ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                Gerar Resumo
              </Button>
            </CardFooter>
            {isPending && !summaryResult && !summaryError && <SaturnLoader message="Gerando resumo..."/>}
            {summaryError && (
              <Alert variant="destructive" className="m-4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Erro</AlertTitle>
                <AlertDescription>{summaryError}</AlertDescription>
              </Alert>
            )}
            {summaryResult && (
              <div className="m-4 p-4 bg-neutral-900 rounded-md">
                <h4 className="font-semibold text-primary mb-2">Resumo Gerado:</h4>
                <p className="text-neutral-300 whitespace-pre-wrap">{summaryResult.summary}</p>
                {summaryResult.insights && (
                  <>
                    <h4 className="font-semibold text-primary mt-4 mb-2">Insights IA:</h4>
                    <p className="text-neutral-300 whitespace-pre-wrap">{summaryResult.insights}</p>
                  </>
                )}
              </div>
            )}
          </Card>

          {/* Detailed Insight Card */}
          <Card className="bg-neutral-800 border-neutral-700 shadow-xl">
            <CardHeader>
              <CardTitle className="text-neutral-100 font-display">Análise Detalhada Sob Demanda</CardTitle>
              <CardDescription className="text-neutral-400">Obtenha explicações, implicações e ações sugeridas para pontos de dados específicos.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="dataPoint" className="text-neutral-300">Ponto de Dado</Label>
                <Input
                  id="dataPoint"
                  value={dataPoint}
                  onChange={(e) => setDataPoint(e.target.value)}
                  placeholder="Ex: Queda de 10% nas vendas"
                  className="custom-input mt-1"
                />
              </div>
              <div>
                <Label htmlFor="context" className="text-neutral-300">Contexto (Opcional)</Label>
                <Textarea
                  id="context"
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  placeholder="Ex: Durante campanha de marketing agressiva do concorrente"
                  className="custom-input mt-1"
                  rows={3}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleGenerateDetail} disabled={isPending} className="w-full bg-secondary hover:bg-secondary-700 text-secondary-foreground">
                {isPending && !detailResult && !detailError ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                Obter Análise Detalhada
              </Button>
            </CardFooter>
            {isPending && !detailResult && !detailError && <SaturnLoader message="Gerando análise..."/>}
            {detailError && (
              <Alert variant="destructive" className="m-4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Erro</AlertTitle>
                <AlertDescription>{detailError}</AlertDescription>
              </Alert>
            )}
            {detailResult && (
              <div className="m-4 p-4 bg-neutral-900 rounded-md">
                <h4 className="font-semibold text-secondary mb-2">Explicação:</h4>
                <p className="text-neutral-300 whitespace-pre-wrap">{detailResult.explanation}</p>
                <h4 className="font-semibold text-secondary mt-4 mb-2">Implicações:</h4>
                <p className="text-neutral-300 whitespace-pre-wrap">{detailResult.implications}</p>
                {detailResult.suggestedActions && (
                  <>
                    <h4 className="font-semibold text-secondary mt-4 mb-2">Ações Sugeridas:</h4>
                    <p className="text-neutral-300 whitespace-pre-wrap">{detailResult.suggestedActions}</p>
                  </>
                )}
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
