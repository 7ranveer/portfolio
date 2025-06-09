"use server";

import { z } from "zod";
import { generateElevatorPitch, type GenerateElevatorPitchInput, type GenerateElevatorPitchOutput } from '@/ai/flows/generate-elevator-pitch';

// Contact Form
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export async function handleContactFormSubmission(data: ContactFormData) {
  const validatedData = contactFormSchema.safeParse(data);

  if (!validatedData.success) {
    throw new Error("Invalid form data.");
  }

  // Simulate sending an email or saving to a database
  console.log("Contact form submitted:", validatedData.data);
  
  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // For now, we'll just return a success message.
  // In a real app, you might integrate with an email service (e.g., Resend, SendGrid)
  // or save to a database.
  return { success: true, message: "Message sent successfully!" };
}


// AI Elevator Pitch Generator
export async function generateElevatorPitchAction(input: GenerateElevatorPitchInput): Promise<GenerateElevatorPitchOutput> {
  // Input validation for the AI action could be done here if needed,
  // but the AI flow itself has Zod schema validation.
  try {
    const output = await generateElevatorPitch(input);
    return output;
  } catch (error) {
    console.error("Error in generateElevatorPitchAction:", error);
    // It's good practice to return a structured error or throw a custom error
    // that can be handled by the client.
    return { elevatorPitch: "Sorry, I couldn't generate a pitch right now. Please try again later." };
  }
}
