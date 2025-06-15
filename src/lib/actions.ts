"use server";

import { z } from "zod";

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
