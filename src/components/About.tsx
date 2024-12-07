const About = () => {
  return (
    <section id="about" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-dark">
              L'excellence dans chaque détail
            </h2>
            <p className="text-gray mb-6 leading-relaxed">
              POLYTELEIA LUXURY incarne l'excellence dans l'architecture d'intérieur. Notre approche unique combine créativité, innovation et savoir-faire artisanal pour créer des espaces qui transcendent l'ordinaire.
            </p>
            <p className="text-gray leading-relaxed">
              Chaque projet est une œuvre d'art unique, façonnée selon vos désirs et notre expertise. Nous transformons vos espaces en lieux de vie exceptionnels, où le luxe rencontre la fonctionnalité.
            </p>
          </div>
          <div className="relative h-[500px]">
            <img
              src="/placeholder.svg"
              alt="Interior Design Expertise"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;