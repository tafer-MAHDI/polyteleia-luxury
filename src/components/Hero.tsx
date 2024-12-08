const Hero = () => {
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
        <a
          href="#contact"
          className="inline-block px-8 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-light transition-all duration-500"
        >
          Découvrir nos projets
        </a>
      </div>
    </div>
  );
};

export default Hero;