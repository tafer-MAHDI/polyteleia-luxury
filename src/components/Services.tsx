import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <section className="geometric-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif mb-8 text-center">Nos Services</h2>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Découvrez notre gamme de services personnalisés pour transformer vos espaces.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service-card bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Design d'Intérieur</h3>
            <p className="text-gray-600 mb-4">
              Créez des espaces uniques et fonctionnels avec notre expertise en design d'intérieur.
            </p>
            <Button className="bg-gold text-white hover:bg-gold/90">En savoir plus</Button>
          </div>
          <div className="service-card bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Aménagement</h3>
            <p className="text-gray-600 mb-4">
              Optimisez l'espace de votre maison ou bureau avec nos solutions d'aménagement sur mesure.
            </p>
            <Button className="bg-gold text-white hover:bg-gold/90">En savoir plus</Button>
          </div>
          <div className="service-card bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Consultation</h3>
            <p className="text-gray-600 mb-4">
              Bénéficiez de conseils d'experts pour vos projets de décoration et d'aménagement.
            </p>
            <Button className="bg-gold text-white hover:bg-gold/90">En savoir plus</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
