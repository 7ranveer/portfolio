import { resumeData } from '@/lib/resume-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/container';
import { Download, MessageSquare } from 'lucide-react';

interface HeroSectionProps {
  id: string;
}

export function HeroSection({ id }: HeroSectionProps) {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30 py-20 pt-32 md:pt-20">
      <Container className="text-center">
        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-accent">
          <Image 
            src="https://placehold.co/200x200.png" 
            alt={resumeData.name} 
            layout="fill" 
            objectFit="cover"
            data-ai-hint="professional portrait"
          />
        </div>
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
          {resumeData.name}
        </h1>
        <p className="text-xl sm:text-2xl text-foreground mb-8">
          {resumeData.title}
        </p>
        <p className="max-w-2xl mx-auto text-muted-foreground mb-10 text-lg">
          {resumeData.summary}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md transition-transform hover:scale-105">
            <Link href="#contact">
              <MessageSquare className="mr-2 h-5 w-5" />
              Contact Me
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10 shadow-md transition-transform hover:scale-105">
            <Link href="/resume.pdf" target="_blank" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
