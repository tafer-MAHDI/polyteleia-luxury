import { WhatsApp } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = "Bonjour, je souhaite plus d'informations sur vos services.";
    const whatsappUrl = `https://wa.me/+33000000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg"
          alt="Interior Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 text-center text-light max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6">
          POLYTELEIA LUXURY
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8">
          Créateur d'espaces d'exception
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-block px-8 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-light transition-all duration-500"
          >
            Découvrir nos projets
          </a>
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white transition-all duration-500 rounded-md"
          >
            <WhatsApp className="w-5 h-5" />
            Nous contacter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;