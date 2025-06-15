
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Container } from '@/components/container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Send } from 'lucide-react';
import { handleContactFormSubmission } from '@/lib/form-utils'; // Updated import
import { useToast } from "@/hooks/use-toast";
import { resumeData, socialIcons } from "@/lib/resume-data";
import Link from "next/link";

interface ContactSectionProps {
  id: string;
}

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactSection({ id }: ContactSectionProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    try {
      await handleContactFormSubmission(values);
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon. (Client-side Simulated)",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: (error instanceof Error ? error.message : "Something went wrong. Please try again."),
        variant: "destructive",
      });
    }
  }

  return (
    <section id={id} className="py-16 md:py-24 bg-secondary/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-2">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">I'm open to new opportunities and collaborations.</p>
        </div>
        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardHeader className="text-center">
            <Mail className="h-12 w-12 mx-auto text-accent mb-2" />
            <CardTitle className="font-headline text-2xl">Send Me a Message</CardTitle>
            <CardDescription>Fill out the form below or reach out via social media.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message..." rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={form.formState.isSubmitting}>
                  {form.formStext-accent-foregroundtate.isSubmitting ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
                </Button>
              </form>
            </Form>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-2">Or connect with me on:</p>
              <div className="flex justify-center space-x-4">
                {resumeData.contact.linkedin && (
                  <Button variant="outline" size="icon" asChild className="border-primary text-primary hover:bg-primary/10">
                    <Link href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <socialIcons.linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                )}
                {resumeData.contact.github && (
                  <Button variant="outline" size="icon" asChild className="border-primary text-primary hover:bg-primary/10">
                    <Link href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <socialIcons.github className="h-5 w-5" />
                    </Link>
                  </Button>
                )}
                 {resumeData.contact.email && (
                  <Button variant="outline" size="icon" asChild className="border-primary text-primary hover:bg-primary/10">
                    <Link href={`mailto:${resumeData.contact.email}`} aria-label="Email">
                      <socialIcons.email className="h-5 w-5" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
