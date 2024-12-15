import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-dark/95 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif text-light">
            POLYTELEIA
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-light hover:text-gold transition-colors">
              {t('nav.home')}
            </Link>
            <a href="#about" className="text-light hover:text-gold transition-colors">
              {t('nav.about')}
            </a>
            <a href="#projects" className="text-light hover:text-gold transition-colors">
              {t('nav.projects')}
            </a>
            <a href="#services" className="text-light hover:text-gold transition-colors">
              {t('nav.services')}
            </a>
            <a href="#contact" className="text-light hover:text-gold transition-colors">
              {t('nav.contact')}
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="text-light border-light hover:bg-light hover:text-dark">
                  {t('nav.language')}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage('fr')}>
                  Français {language === 'fr' && '✓'}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English {language === 'en' && '✓'}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <button
            className="md:hidden text-light"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              to="/"
              className="block text-light hover:text-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <a
              href="#about"
              className="block text-light hover:text-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.about')}
            </a>
            <a
              href="#projects"
              className="block text-light hover:text-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.projects')}
            </a>
            <a
              href="#services"
              className="block text-light hover:text-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.services')}
            </a>
            <a
              href="#contact"
              className="block text-light hover:text-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.contact')}
            </a>
            <div className="pt-4 border-t border-light/20">
              <button
                onClick={() => setLanguage('fr')}
                className={`mr-4 text-light ${language === 'fr' ? 'text-gold' : ''}`}
              >
                Français
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`text-light ${language === 'en' ? 'text-gold' : ''}`}
              >
                English
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;