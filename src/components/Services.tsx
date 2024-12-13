import { Check } from 'lucide-react';

const services = [
  {
    title: "Design d'intérieur",
    description: "Création d'espaces uniques et personnalisés",
    features: [
      "Conception sur mesure",
      "Sélection de mobilier",
      "Harmonisation des couleurs",
      "Plans détaillés"
    ]
  },
  {
    title: "Architecture d'intérieur",
    description: "Transformation complète de vos espaces par notre cabinet d'architecture d'intérieur",
    features: [
      "Rénovation",
      "Optimisation d'espace",
      "Plans techniques",
      "Suivi de chantier"
    ]
  },
  {
    title: "Décoration",
    description: "Mise en valeur de votre intérieur",
    features: [
      "Conseil en décoration",
      "Agencement",
      "Accessoirisation",
      "Art & objets"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-dark text-center">
          Nos Services
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 border border-gold hover:bg-gold hover:text-light transition-all duration-500 group"
            >
              <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
              <p className="mb-6 text-gray group-hover:text-light/90 transition-colors duration-500">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-gold group-hover:text-light transition-colors duration-500" />
                    <span>{feature}</span>
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

export default Services;