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
    description: "Transformation complète de vos espaces",
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
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-dark text-center animate-[fade-in_1s_ease-out]">
          Nos Services
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 border border-gold hover:bg-gold hover:text-light transition-all duration-500 group hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
              <p className="mb-6 text-gray group-hover:text-light/90 transition-colors duration-500">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-gold group-hover:text-light transition-colors duration-500" />
                    <span className="transition-transform duration-300 group-hover:translate-x-1">{feature}</span>
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