'use server';
/**
 * @fileOverview Generates a fiscal summary with AI-powered insights.
 *
 * - fiscalSummaryWithLLM - A function that generates a fiscal summary with insights.
 * - FiscalSummaryInput - The input type for the fiscalSummaryWithLLM function.
 * - FiscalSummaryOutput - The return type for the fiscalSummaryWithLLM function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FiscalSummaryInputSchema = z.object({
  fiscalData: z.string().describe('The fiscal data to be summarized.'),
  insightToggle: z.boolean().describe('A toggle to enable or disable AI-powered insights.'),
});
export type FiscalSummaryInput = z.infer<typeof FiscalSummaryInputSchema>;

const FiscalSummaryOutputSchema = z.object({
  summary: z.string().describe('A summary of the fiscal data.'),
  insights: z.string().optional().describe('AI-powered insights based on the fiscal data.'),
});
export type FiscalSummaryOutput = z.infer<typeof FiscalSummaryOutputSchema>;

export async function fiscalSummaryWithLLM(input: FiscalSummaryInput): Promise<FiscalSummaryOutput> {
  return fiscalSummaryWithLLMFlow(input);
}

const summarizeFiscalDataPrompt = ai.definePrompt({
  name: 'summarizeFiscalDataPrompt',
  input: {schema: FiscalSummaryInputSchema},
  output: {schema: FiscalSummaryOutputSchema},
  prompt: `You are an expert fiscal analyst.

  Summarize the following fiscal data:

  {{fiscalData}}

  {% if insightToggle %}
  Also, provide key trends and anomalies in the data to provide AI-powered insights.
  {% endif %}
  `,
});

const fiscalSummaryWithLLMFlow = ai.defineFlow(
  {
    name: 'fiscalSummaryWithLLMFlow',
    inputSchema: FiscalSummaryInputSchema,
    outputSchema: FiscalSummaryOutputSchema,
  },
  async input => {
    const {output} = await summarizeFiscalDataPrompt(input);
    return output!;
  }
);
