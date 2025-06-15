
import { resumeData, type ExperienceEntry } from '@/lib/resume-data';
import type { LucideIcon } from 'lucide-react';
import { Container } from '@/components/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Briefcase } from 'lucide-react';

interface GroupedExperienceRole {
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
  // icon?: LucideIcon; // Retain if needed for role-specific icons in future
}

interface CompanyExperienceGroup {
  companyName: string;
  logoUrl?: string;
  companyIcon?: LucideIcon; 
  roles: GroupedExperienceRole[];
}

const groupExperiencesByCompany = (experiences: ExperienceEntry[]): CompanyExperienceGroup[] => {
  const companyMap: Map<string, CompanyExperienceGroup> = new Map();

  experiences.forEach(exp => {
    if (!companyMap.has(exp.company)) {
      companyMap.set(exp.company, {
        companyName: exp.company,
        logoUrl: exp.logoUrl,
        companyIcon: exp.icon || Briefcase, 
        roles: [],
      });
    }
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { company, logoUrl, icon, ...roleDetails } = exp; 
    companyMap.get(exp.company)!.roles.push(roleDetails);
  });

  return Array.from(companyMap.values());
};


export function ExperienceSection({ id }: { id: string }) {
  const groupedCompanyExperiences = groupExperiencesByCompany(resumeData.experience);

  return (
    <section id={id} className="py-16 md:py-24 bg-secondary/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-2">Work Experience</h2>
          <p className="text-lg text-muted-foreground">My professional journey and accomplishments.</p>
        </div>
        
        <div className="space-y-10">
          {groupedCompanyExperiences.map((companyGroup) => (
            <Card key={companyGroup.companyName} className="shadow-xl overflow-hidden">
              <CardHeader className="flex flex-row items-start space-x-4 p-6 bg-card">
                <div className="flex-shrink-0 w-16 h-16 relative rounded-md overflow-hidden border border-border bg-muted">
                  {companyGroup.logoUrl ? (
                    <Image 
                      src={companyGroup.logoUrl} 
                      alt={`${companyGroup.companyName} logo`} 
                      fill 
                      style={{ objectFit: 'contain' }} 
                      className="p-1"
                      data-ai-hint="company logo" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      {companyGroup.companyIcon ? <companyGroup.companyIcon className="h-8 w-8 text-muted-foreground" /> : <Briefcase className="h-8 w-8 text-muted-foreground" />}
                    </div>
                  )}
                </div>
                <div className="flex-grow">
                  <CardTitle className="font-headline text-2xl text-primary">{companyGroup.companyName}</CardTitle>
                  {/* You could add total duration at the company here if desired */}
                </div>
              </CardHeader>
              
              <CardContent className="p-6 space-y-6">
                {companyGroup.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className={roleIndex > 0 ? "pt-6 border-t border-border/60" : ""}>
                    <h4 className="font-headline text-xl text-accent font-semibold">{role.role}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{role.period} &bull; {role.location}</p>
                    <ul className="list-disc list-inside space-y-1 text-foreground text-sm leading-relaxed">
                      {role.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
