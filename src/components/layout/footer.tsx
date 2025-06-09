import { resumeData, socialIcons } from '@/lib/resume-data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t py-8 text-center text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-4 mb-4">
          {resumeData.contact.linkedin && (
            <Button variant="ghost" size="icon" asChild>
              <Link href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <socialIcons.linkedin className="h-6 w-6 text-primary hover:text-accent transition-colors" />
              </Link>
            </Button>
          )}
          {resumeData.contact.github && (
            <Button variant="ghost" size="icon" asChild>
              <Link href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <socialIcons.github className="h-6 w-6 text-primary hover:text-accent transition-colors" />
              </Link>
            </Button>
          )}
          {resumeData.contact.email && (
             <Button variant="ghost" size="icon" asChild>
              <Link href={`mailto:${resumeData.contact.email}`} aria-label="Email">
                <socialIcons.email className="h-6 w-6 text-primary hover:text-accent transition-colors" />
              </Link>
            </Button>
          )}
        </div>
        <p className="text-sm">
          &copy; {currentYear} {resumeData.name}. All rights reserved.
        </p>
         {resumeData.contact.website && (
          <p className="text-sm mt-1">
            <Link href={resumeData.contact.website} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              {resumeData.contact.website.replace(/^https?:\/\//, '')}
            </Link>
          </p>
        )}
      </div>
    </footer>
  );
}
