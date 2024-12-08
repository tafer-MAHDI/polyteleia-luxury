const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg"
          alt="Interior Design"
          className="w-full h-full object-cover animate-[scale-in_1.5s_ease-out]"
        />
        <div className="absolute inset-0 bg-dark bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 text-center text-light max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 animate-[fade-in_1s_ease-out]">
          POLYTELEIA LUXURY
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 animate-[fade-in_1s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">
          Créateur d'espaces d'exception
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-light transition-all duration-500 animate-[fade-in_1s_ease-out_0.6s] opacity-0 [animation-fill-mode:forwards] hover:scale-105"
        >
          Découvrir nos projets
        </a>
      </div>
    </div>
  );
};

export default Hero;