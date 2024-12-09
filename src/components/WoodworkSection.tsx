const WoodworkSection = () => {
  return (
    <section className="geometric-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            L'Art de l'Ébénisterie
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            Notre atelier perpétue la tradition de l'ébénisterie française, alliant savoir-faire ancestral et techniques modernes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-serif mb-4">Savoir-faire Traditionnel</h3>
              <p className="text-gray">
                Nos maîtres ébénistes perpétuent des techniques ancestrales pour créer des pièces d'exception qui traverseront les générations.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-serif mb-4">Matériaux Nobles</h3>
              <p className="text-gray">
                Nous sélectionnons les essences de bois les plus prestigieuses pour garantir des créations uniques et durables.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-serif mb-4">Sur Mesure</h3>
              <p className="text-gray">
                Chaque pièce est conçue et réalisée sur mesure, en parfaite harmonie avec vos espaces et vos envies.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg"
              alt="Atelier d'ébénisterie"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-dark bg-opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WoodworkSection;