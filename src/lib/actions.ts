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

  console.log("Contact form submitted (client-side simulation):", validatedData.data);
  
  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // For now, we'll just return a success message.
  return { success: true, message: "Message sent successfully! (Client-side Simulated)" };
}
