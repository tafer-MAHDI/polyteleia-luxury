import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-light py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif text-dark">
          POLYTELEIA LUXURY
        </a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-dark hover:text-gold transition-colors">À propos</a>
          <a href="#projects" className="text-dark hover:text-gold transition-colors">Projets</a>
          <a href="#services" className="text-dark hover:text-gold transition-colors">Services</a>
          <a href="#contact" className="text-dark hover:text-gold transition-colors">Contact</a>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-light py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#about" className="text-dark hover:text-gold transition-colors">À propos</a>
            <a href="#projects" className="text-dark hover:text-gold transition-colors">Projets</a>
            <a href="#services" className="text-dark hover:text-gold transition-colors">Services</a>
            <a href="#contact" className="text-dark hover:text-gold transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;