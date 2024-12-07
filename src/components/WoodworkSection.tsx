import { Check } from 'lucide-react';

const woodworkServices = [
  {
    title: "Boiseries sur mesure",
    description: "Création de boiseries murales et moulures personnalisées",
    features: [
      "Panneaux décoratifs",
      "Moulures sculptées",
      "Corniches sur mesure",
      "Finitions artisanales"
    ]
  },
  {
    title: "Menuiserie d'art",
    description: "Réalisation de pièces uniques et ornementations",
    features: [
      "Sculptures sur bois",
      "Marqueterie fine",
      "Restauration d'antiquités",
      "Dorure sur bois"
    ]
  },
  {
    title: "Aménagements luxueux",
    description: "Création d'intérieurs en bois précieux",
    features: [
      "Bibliothèques sur mesure",
      "Dressings de luxe",
      "Portes sculptées",
      "Plafonds à caissons"
    ]
  }
];

const WoodworkSection = () => {
  return (
    <section id="woodwork" className="py-20 bg-dark text-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif mb-4 text-center">
          Menuiserie d'Art & Bois Décoratif
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto text-light/80">
          Excellence artisanale dans la création de menuiserie décorative et d'aménagements en bois précieux.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {woodworkServices.map((service, index) => (
            <div key={index} className="p-8 border border-gold hover:bg-gold/10 transition-colors">
              <h3 className="text-2xl font-serif mb-4 text-gold">{service.title}</h3>
              <p className="mb-6 text-light/80">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-gold" />
                    <span className="text-light/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WoodworkSection;