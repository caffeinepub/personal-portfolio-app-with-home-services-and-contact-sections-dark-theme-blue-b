import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

type Section = 'home' | 'services' | 'contact';

interface HeaderNavProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

export default function HeaderNav({ activeSection, onNavigate }: HeaderNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: Section; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'My Services' },
    { id: 'contact', label: 'Contact Me' },
  ];

  const handleNavigate = (section: Section) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <span className="font-semibold text-lg hidden sm:inline-block">Portfolio</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? 'default' : 'ghost'}
              onClick={() => handleNavigate(item.id)}
              className={activeSection === item.id ? 'bg-blue-600 hover:bg-blue-700' : ''}
            >
              {item.label}
            </Button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <nav className="container py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                onClick={() => handleNavigate(item.id)}
                className={`justify-start ${activeSection === item.id ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
