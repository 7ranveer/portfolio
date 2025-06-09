import { resumeData, type EducationEntry } from '@/lib/resume-data';
import { Container } from '@/components/container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

interface EducationSectionProps {
  id: string;
}

const EducationItem = ({ item }: { item: EducationEntry }) => (
  <Card className="shadow-lg w-full hover:shadow-xl transition-shadow duration-300">
    <CardHeader className="pb-3">
       <div className="flex items-center mb-2">
        {item.icon ? <item.icon className="h-6 w-6 mr-3 text-primary" /> : <GraduationCap className="h-6 w-6 mr-3 text-primary" />}
        <CardTitle className="font-headline text-xl text-primary">{item.degree}</CardTitle>
      </div>
      <CardDescription className="text-md text-accent font-semibold">{item.institution}</CardDescription>
      <p className="text-sm text-muted-foreground">{item.period}</p>
    </CardHeader>
    {item.details && item.details.length > 0 && (
      <CardContent>
        <ul className="list-disc list-inside space-y-1 text-foreground">
          {item.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </CardContent>
    )}
  </Card>
);

export function EducationSection({ id }: EducationSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-card">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-2">Education</h2>
          <p className="text-lg text-muted-foreground">My academic background and qualifications.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.education.map((item, index) => (
            <EducationItem key={index} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
