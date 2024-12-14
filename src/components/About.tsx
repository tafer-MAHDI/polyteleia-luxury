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
              POLYTELEIA LUXURY incarne l'excellence dans l'architecture d'intérieur haut de gamme. Notre approche unique d'architecture d'intérieur combine créativité, innovation et savoir-faire artisanal pour créer des espaces qui transcendent l'ordinaire. En tant que cabinet d'architecture d'intérieur de luxe, nous concevons chaque projet comme une œuvre unique.
            </p>
            <div className="mt-8">
              <p className="text-gray leading-relaxed italic mb-4">
                "Notre mission est de transformer vos rêves en réalité tangible. Chaque projet que nous entreprenons est une opportunité de créer quelque chose d'extraordinaire, où l'artisanat traditionnel rencontre l'innovation moderne."
              </p>
              <div className="flex items-center">
                <h3 className="text-xl font-serif text-dark">Mr TAFER ELMAHDI</h3>
                <span className="ml-2 text-gold">CEO & Fondateur</span>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl bg-dark">
            <img
              src="/lovable-uploads/ee95597d-da17-49ed-b2eb-520ea027703c.png"
              alt="Mr TAFER ELMAHDI - CEO"
              className="w-full h-full object-cover object-top grayscale hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;