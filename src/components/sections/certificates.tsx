
import { resumeData, type CertificateEntry, sectionIcons } from '@/lib/resume-data';
import { Container } from '@/components/container';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink, Award } from 'lucide-react'; // Added Award as a fallback icon
import Image from 'next/image';


interface CertificatesSectionProps {
  id: string;
}

const CertificateItem = ({ item }: { item: CertificateEntry }) => (
  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
    <CardHeader className="pb-4">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 relative rounded-md overflow-hidden border border-border bg-muted flex items-center justify-center">
            <Image
              src={item.orgLogoUrl || `https://placehold.co/80x80.png`}
              alt={`${item.issuingOrganization} logo`}
              width={48}
              height={48}
              style={{ objectFit: 'contain' }}
              className="p-1"
              data-ai-hint="organization logo"
            />
        </div>
        <div>
          <CardTitle className="font-headline text-lg text-primary">{item.name}</CardTitle>
          <CardDescription className="text-sm text-accent font-semibold">{item.issuingOrganization}</CardDescription>
          <p className="text-xs text-muted-foreground mt-1">{item.issueDate}</p>
          {item.credentialId && (
            <p className="text-xs text-muted-foreground mt-0.5">Credential ID: {item.credentialId}</p>
          )}
        </div>
      </div>
    </CardHeader>
    {item.credentialUrl && (
      <CardFooter className="mt-auto pt-4">
        <Button variant="outline" size="sm" asChild className="w-full border-accent text-accent hover:bg-accent/10">
          <Link href={item.credentialUrl} target="_blank" rel="noopener noreferrer">
            Show Credential <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    )}
  </Card>
);

export function CertificatesSection({ id }: CertificatesSectionProps) {
  if (!resumeData.certificates || resumeData.certificates.length === 0) {
    return null;
  }

  const SectionIcon = sectionIcons.certificates || Award;

  return (
    <section id={id} className="py-16 md:py-24 bg-secondary/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-2 flex items-center justify-center">
            <SectionIcon className="h-8 w-8 mr-3 text-accent" />
            Licenses & Certifications
          </h2>
          <p className="text-lg text-muted-foreground">My professional credentials and qualifications.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.certificates.map((item, index) => (
            <CertificateItem key={index} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
