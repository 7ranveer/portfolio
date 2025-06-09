"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Container } from '@/components/container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Sparkles, Copy, Check } from 'lucide-react';
import { resumeData } from '@/lib/resume-data';
import { generateElevatorPitchAction } from '@/lib/actions';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from "@/hooks/use-toast";

interface ElevatorPitchGeneratorSectionProps {
  id: string;
}

export function ElevatorPitchGeneratorSection({ id }: ElevatorPitchGeneratorSectionProps) {
  const [pitches, setPitches] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { toast } = useToast();

  const handleGeneratePitch = async () => {
    setIsLoading(true);
    setPitches([]); // Clear previous pitches

    // Combine relevant resume parts for the AI
    const resumeContent = `
      Name: ${resumeData.name}
      Title: ${resumeData.title}
      Summary: ${resumeData.summary}
      Experience: ${resumeData.experience.map(exp => `${exp.role} at ${exp.company}: ${exp.responsibilities.slice(0,2).join('. ')}`).join('; ')}
      Key Skills: ${resumeData.skills.map(cat => cat.skills.map(s => s.name).join(', ')).join('; ')}
    `.trim();

    try {
      // For this example, let's assume the AI generates one pitch, 
      // but we can call it multiple times or parse multiple from one response.
      // We'll simulate getting 3 variations.
      const generatedPitches = [];
      for (let i = 0; i < 3; i++) {
        const result = await generateElevatorPitchAction({ resumeContent });
        if (result.elevatorPitch) {
          generatedPitches.push(result.elevatorPitch);
        }
      }
      setPitches(generatedPitches);
       if (generatedPitches.length === 0) {
          toast({
            title: "No Pitches Generated",
            description: "The AI couldn't generate pitches at this time. Please try again.",
            variant: "destructive",
          });
        }
    } catch (error) {
      console.error("Error generating elevator pitch:", error);
      toast({
        title: "Error",
        description: "Failed to generate elevator pitch. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast({ title: "Copied to clipboard!"});
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id={id} className="py-16 md:py-24 bg-card">
      <Container>
        <Card className="max-w-3xl mx-auto shadow-xl">
          <CardHeader className="text-center">
            <Sparkles className="h-12 w-12 mx-auto text-accent mb-2" />
            <CardTitle className="font-headline text-3xl md:text-4xl font-bold text-primary mb-2">AI Elevator Pitch Generator</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Let AI craft a concise and impactful introduction based on my resume.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button onClick={handleGeneratePitch} disabled={isLoading} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Sparkles className="mr-2 h-5 w-5" />
              {isLoading ? 'Generating...' : 'Generate Pitches'}
            </Button>

            {isLoading && (
              <div className="mt-8 space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-4 w-3/4 mx-auto" />
                    <Skeleton className="h-4 w-full mx-auto" />
                    <Skeleton className="h-4 w-5/6 mx-auto" />
                  </div>
                ))}
              </div>
            )}

            {!isLoading && pitches.length > 0 && (
              <div className="mt-8 space-y-6 text-left">
                {pitches.map((pitch, index) => (
                  <Card key={index} className="bg-secondary/30">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <p className="text-foreground">{pitch}</p>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleCopy(pitch, index)}
                          className="ml-2 flex-shrink-0 text-muted-foreground hover:text-accent"
                        >
                          {copiedIndex === index ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                          <span className="sr-only">Copy pitch</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter className="text-center block">
             <p className="text-xs text-muted-foreground mt-4">
                AI generations can sometimes be imperfect. Review and refine as needed.
             </p>
          </CardFooter>
        </Card>
      </Container>
    </section>
  );
}
