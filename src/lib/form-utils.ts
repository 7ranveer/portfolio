import { z } from "zod";

// Contact Form
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export async function handleContactFormSubmission(data: ContactFormData) {
  const validatedData = contactFormSchema.safeParse(data);

  if (!validatedData.success) {
    // Construct a more specific error message from Zod errors if available
    const errorMessages = validatedData.error.errors.map(e => e.message).join(', ');
    throw new Error(`Invalid form data: ${errorMessages}`);
  }

  console.log("Contact form submitted (client-side simulation):", validatedData.data);
  
  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // For now, we'll just return a success message.
  return { success: true, message: "Message sent successfully! (Client-side Simulated)" };
}
