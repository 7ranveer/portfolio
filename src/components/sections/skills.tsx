import { resumeData, type SkillCategory } from '@/lib/resume-data';
import { Container } from '@/components/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2 } from 'lucide-react';


interface SkillsSectionProps {
  id: string;
}

export function SkillsSection({ id }: SkillsSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-secondary/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-2">Skills</h2>
          <p className="text-lg text-muted-foreground">My technical and professional abilities.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {resumeData.skills.map((category: SkillCategory, index: number) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary flex items-center">
                  {/* Using a generic icon for category, or could be dynamic */}
                  <CheckCircle2 className="h-6 w-6 mr-2 text-accent" /> 
                  {category.categoryName}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex flex-col">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          {skill.icon && <skill.icon className="h-5 w-5 mr-2 text-accent" />}
                          <span className="text-foreground font-medium">{skill.name}</span>
                        </div>
                        {skill.level && (
                           <Badge variant="secondary" className="text-xs">{skill.level}%</Badge>
                        )}
                      </div>
                      {skill.level && (
                        <Progress value={skill.level} className="h-2 [&>div]:bg-accent" />
                      )}
                       {!skill.level && ( /* For soft skills or skills without a level */
                         <div className="h-2 bg-muted rounded-full" />
                       )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
