import { resumeData } from '@/lib/resume-data';
import { Container } from '@/components/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCircle2 } from 'lucide-react';

interface AboutSectionProps {
  id: string;
}

export function AboutSection({ id }: AboutSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-card">
      <Container>
        <Card className="shadow-xl overflow-hidden">
            <CardHeader className="bg-primary text-primary-foreground p-6">
                <div className="flex items-center space-x-3">
                    <UserCircle2 className="h-8 w-8" />
                    <CardTitle className="font-headline text-3xl">About Me</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
                <p className="text-lg text-foreground leading-relaxed">
                {/* A more detailed summary or a dedicated "About Me" text could be added to resumeData if needed */}
                {resumeData.summary} With a strong foundation in computer science and a keen eye for detail, I thrive on transforming complex challenges into elegant, efficient, and user-friendly software. My journey in tech has been driven by a continuous desire to learn and adapt, embracing new frameworks and paradigms to deliver cutting-edge solutions. I am particularly interested in the intersection of web development and artificial intelligence, seeking opportunities to build intelligent applications that make a tangible impact.
                </p>
                <p className="mt-4 text-lg text-foreground leading-relaxed">
                Outside of coding, I enjoy contributing to open-source projects, exploring new hiking trails, and experimenting with creative cooking. I believe in a balanced approach to life and work, fostering creativity and well-being.
                </p>
            </CardContent>
        </Card>
      </Container>
    </section>
  );
}
