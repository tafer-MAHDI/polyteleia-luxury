import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import CartIcon from './CartIcon';
import { CartProvider } from '@/contexts/CartContext';

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
    <CartProvider>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-light py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-serif text-dark">
            POLYTELEIA LUXURY
          </a>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#about" className="text-dark hover:text-gold transition-colors">À propos</a>
            <a href="#projects" className="text-dark hover:text-gold transition-colors">Projets</a>
            <a href="#services" className="text-dark hover:text-gold transition-colors">Services</a>
            <a href="#woodwork" className="text-dark hover:text-gold transition-colors">Menuiserie</a>
            <a href="#chairs" className="text-dark hover:text-gold transition-colors">Ameublement</a>
            <a href="#contact" className="text-dark hover:text-gold transition-colors">Contact</a>
            <CartIcon />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <CartIcon />
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-light py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a href="#about" className="text-dark hover:text-gold transition-colors">À propos</a>
              <a href="#projects" className="text-dark hover:text-gold transition-colors">Projets</a>
              <a href="#services" className="text-dark hover:text-gold transition-colors">Services</a>
              <a href="#woodwork" className="text-dark hover:text-gold transition-colors">Menuiserie</a>
              <a href="#chairs" className="text-dark hover:text-gold transition-colors">Ameublement</a>
              <a href="#contact" className="text-dark hover:text-gold transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </CartProvider>
  );
};

export default Navigation;