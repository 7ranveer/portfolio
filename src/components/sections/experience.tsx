
import { resumeData, type ExperienceEntry } from '@/lib/resume-data';
import { Container } from '@/components/container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Briefcase } from 'lucide-react';

interface ExperienceSectionProps {
  id: string;
}

const TimelineItem = ({ item, isLast }: { item: ExperienceEntry; isLast: boolean }) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-6">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
        {item.icon ? <item.icon className="h-5 w-5" /> : <Briefcase className="h-5 w-5" />}
      </div>
      {!isLast && <div className="w-px h-full bg-border grow"></div>}
    </div>
    <Card className="mb-8 shadow-lg w-full hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <CardTitle className="font-headline text-xl text-primary mb-1 sm:mb-0">{item.role}</CardTitle>
          {item.logoUrl && (
            <div className="relative w-20 h-10 ml-0 sm:ml-4 mb-2 sm:mb-0 flex-shrink-0">
              <Image
                src={item.logoUrl}
                alt={`${item.company} logo`}
                fill
                style={{ objectFit: 'contain' }}
                data-ai-hint="company logo"
              />
            </div>
          )}
        </div>
        <CardDescription className="text-md text-accent font-semibold">{item.company}</CardDescription>
        <p className="text-sm text-muted-foreground">{item.period} &bull; {item.location}</p>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-1 text-foreground">
          {item.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </div>
);

export function ExperienceSection({ id }: ExperienceSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-secondary/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-2">Work Experience</h2>
          <p className="text-lg text-muted-foreground">My professional journey and accomplishments.</p>
        </div>
        <div>
          {resumeData.experience.map((item, index) => (
            <TimelineItem key={index} item={item} isLast={index === resumeData.experience.length - 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
