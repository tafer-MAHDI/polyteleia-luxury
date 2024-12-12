const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/459389137.sd.mp4?s=956afd13a312f3a523c58f3f7128b3f94576da80&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
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
        </div>
      </div>
    </div>
  );
};

export default Hero;