import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Mail } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { cn } from '@/lib/utils';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'services', label: 'Services' },
  { to: 'about', label: 'About' },
  { to: 'portfolio', label: 'Portfolio' },
  { to: 'contact', label: 'Contact' },
];
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollProps = {
    spy: true,
    smooth: true,
    offset: -80,
    duration: 500,
    onSetActive: (to: string) => setActiveSection(to),
  };
  const NavLink = ({ to, label, isMobile = false }: { to: string; label: string; isMobile?: boolean }) => (
    <Link
      to={to}
      {...scrollProps}
      onClick={isMobile ? () => setIsMobileMenuOpen(false) : undefined}
      className={cn(
        'relative cursor-pointer px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
        isMobile ? 'text-lg' : '',
        activeSection === to ? 'text-primary' : 'text-muted-foreground'
      )}
    >
      {label}
      {activeSection === to && !isMobile && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
          layoutId="underline"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'border-b border-border/40 bg-background/80 backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="home" {...scrollProps} className="flex items-center gap-2 cursor-pointer">
          <span className="text-2xl font-bold font-display tracking-tight text-foreground">W3J</span>
          <span className="text-xs font-semibold text-muted-foreground mt-2">LLC</span>
        </Link>
        <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} label={link.label} />
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Button variant="outline" size="sm" asChild>
            <a href="mailto:admin@w3jdev.com">
              <Mail className="mr-2 h-4 w-4" />
              admin@w3jdev.com
            </a>
          </Button>
          <ThemeToggle />
        </div>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <div className="flex justify-end pr-4 pt-4">
                <ThemeToggle />
              </div>
              <div className="flex flex-col space-y-6 pt-4">
                {navLinks.map((link) => (
                  <NavLink key={link.to} to={link.to} label={link.label} isMobile />
                ))}
                <Button variant="default" className="w-full mt-4" asChild>
                  <a href="mailto:admin@w3jdev.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Us
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}