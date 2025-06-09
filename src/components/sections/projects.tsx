import { resumeData, type ProjectEntry } from '@/lib/resume-data';
import { Container } from '@/components/container';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, FolderGit2 } from 'lucide-react';

interface ProjectsSectionProps {
  id: string;
}

export function ProjectsSection({ id }: ProjectsSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-card">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-2">Projects</h2>
          <p className="text-lg text-muted-foreground">A selection of my work.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project: ProjectEntry, index: number) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              {project.imageUrl && (
                <div className="relative h-48 w-full">
                  <Image 
                    src={project.imageUrl} 
                    alt={project.name} 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-t-lg"
                    data-ai-hint="project app"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-center mb-1">
                  {project.icon ? <project.icon className="h-6 w-6 mr-2 text-accent" /> : <FolderGit2 className="h-6 w-6 mr-2 text-accent" /> }
                  <CardTitle className="font-headline text-xl text-primary">{project.name}</CardTitle>
                </div>
                <CardDescription className="text-sm text-muted-foreground h-20 overflow-hidden"> {/* Fixed height for description */}
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-3">
                  <h4 className="font-semibold text-sm text-foreground mb-1">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>
              </CardContent>
              {project.link && (
                <CardFooter>
                  <Button variant="outline" asChild className="w-full border-accent text-accent hover:bg-accent/10">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
