// @/app/actions.ts
"use server";

import { fiscalSummaryWithLLM, type FiscalSummaryInput, type FiscalSummaryOutput } from '@/ai/flows/fiscal-summary-with-llm';
import { getDetailedInsight, type DetailedInsightInput, type DetailedInsightOutput } from '@/ai/flows/detailed-insight-on-demand';

export async function generateFiscalSummaryAction(input: FiscalSummaryInput): Promise<FiscalSummaryOutput | { error: string }> {
  try {
    // Basic validation example
    if (!input.fiscalData || input.fiscalData.trim().length === 0) {
      return { error: "Fiscal data cannot be empty." };
    }
    return await fiscalSummaryWithLLM(input);
  } catch (e) {
    console.error("Error in generateFiscalSummaryAction:", e);
    return { error: "Failed to generate fiscal summary. Please try again." };
  }
}

export async function generateDetailedInsightAction(input: DetailedInsightInput): Promise<DetailedInsightOutput | { error: string }> {
  try {
    // Basic validation example
    if (!input.dataPoint || input.dataPoint.trim().length === 0) {
      return { error: "Data point cannot be empty." };
    }
    return await getDetailedInsight(input);
  } catch (e) {
    console.error("Error in generateDetailedInsightAction:", e);
    return { error: "Failed to generate detailed insight. Please try again." };
  }
}
