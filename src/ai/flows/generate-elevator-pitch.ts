'use server';

/**
 * @fileOverview A flow to generate an elevator pitch based on the user's resume content.
 *
 * - generateElevatorPitch - A function that generates an elevator pitch.
 * - GenerateElevatorPitchInput - The input type for the generateElevatorPitch function.
 * - GenerateElevatorPitchOutput - The return type for the generateElevatorPitch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateElevatorPitchInputSchema = z.object({
  resumeContent: z
    .string()
    .describe('The content of the resume to generate the elevator pitch from.'),
});
export type GenerateElevatorPitchInput = z.infer<
  typeof GenerateElevatorPitchInputSchema
>;

const GenerateElevatorPitchOutputSchema = z.object({
  elevatorPitch: z
    .string()
    .describe('The generated elevator pitch based on the resume content.'),
});
export type GenerateElevatorPitchOutput = z.infer<
  typeof GenerateElevatorPitchOutputSchema
>;

export async function generateElevatorPitch(
  input: GenerateElevatorPitchInput
): Promise<GenerateElevatorPitchOutput> {
  return generateElevatorPitchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateElevatorPitchPrompt',
  input: {schema: GenerateElevatorPitchInputSchema},
  output: {schema: GenerateElevatorPitchOutputSchema},
  prompt: `You are an expert resume writer and career coach. Your job is to generate a brief and effective elevator pitch based on the provided resume content. The elevator pitch should be concise, engaging, and highlight the key skills and experiences of the candidate. It should be tailored to grab the attention of potential employers and leave a lasting positive impression.

Resume Content: {{{resumeContent}}}

Elevator Pitch:`,
});

const generateElevatorPitchFlow = ai.defineFlow(
  {
    name: 'generateElevatorPitchFlow',
    inputSchema: GenerateElevatorPitchInputSchema,
    outputSchema: GenerateElevatorPitchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
