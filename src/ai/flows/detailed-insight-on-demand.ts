'use server';
/**
 * @fileOverview Flow for providing detailed insights on demand.
 *
 * - getDetailedInsight - A function that retrieves detailed insights based on a given data point.
 * - DetailedInsightInput - The input type for the getDetailedInsight function.
 * - DetailedInsightOutput - The return type for the getDetailedInsight function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DetailedInsightInputSchema = z.object({
  dataPoint: z.string().describe('The specific data point to analyze.'),
  context: z.string().optional().describe('Any additional context for the data point.'),
});
export type DetailedInsightInput = z.infer<typeof DetailedInsightInputSchema>;

const DetailedInsightOutputSchema = z.object({
  explanation: z.string().describe('A detailed explanation of why the data point was flagged.'),
  implications: z.string().describe('The potential implications of the flagged data point.'),
  suggestedActions: z.string().optional().describe('Suggested actions based on the implications.'),
});
export type DetailedInsightOutput = z.infer<typeof DetailedInsightOutputSchema>;

export async function getDetailedInsight(input: DetailedInsightInput): Promise<DetailedInsightOutput> {
  return detailedInsightFlow(input);
}

const prompt = ai.definePrompt({
  name: 'detailedInsightPrompt',
  input: {schema: DetailedInsightInputSchema},
  output: {schema: DetailedInsightOutputSchema},
  prompt: `You are an AI assistant that provides detailed insights on fiscal data anomalies and trends.

  You are given a specific data point and, optionally, some context. Your goal is to explain why the data point might be noteworthy, what the potential implications are, and suggest actions if applicable.

  Data Point: {{{dataPoint}}}
  Context: {{{context}}}

  Explanation:
  Implications:
  Suggested Actions: `,
});

const detailedInsightFlow = ai.defineFlow(
  {
    name: 'detailedInsightFlow',
    inputSchema: DetailedInsightInputSchema,
    outputSchema: DetailedInsightOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
