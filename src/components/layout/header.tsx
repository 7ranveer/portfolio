
"use client";

import Link from 'next/link';
import { Menu, X, Briefcase, Award } from 'lucide-react'; // Added Award
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { resumeData } from '@/lib/resume-data';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#certificates', label: 'Certificates' }, // Added Certificates
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-card shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 text-xl font-bold text-primary hover:text-accent transition-colors">
          <Briefcase className="h-6 w-6" />
          <span className="font-headline">{resumeData.name}</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button key={item.label} variant="ghost" asChild className="text-foreground hover:text-accent hover:bg-accent/10">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-card p-6">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-center mb-4">
                    <Link href="#home" className="flex items-center gap-2 text-lg font-bold text-primary" onClick={() => setIsSheetOpen(false)}>
                        <Briefcase className="h-5 w-5" />
                        <span className="font-headline">{resumeData.name}</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsSheetOpen(false)} aria-label="Close menu">
                        <X className="h-6 w-6 text-primary" />
                        <span className="sr-only">Close menu</span>
                    </Button>
                </div>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    asChild
                    className="w-full justify-start text-foreground hover:text-accent hover:bg-accent/10"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
