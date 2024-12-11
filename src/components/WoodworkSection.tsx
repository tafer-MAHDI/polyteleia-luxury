import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const woodworkServices = [
  {
    title: "Boiseries sur mesure",
    description: "Création de boiseries murales et moulures personnalisées",
    features: [
      "Panneaux décoratifs",
      "Moulures sculptées",
      "Habillages muraux",
      "Finitions nobles"
    ]
  },
  {
    title: "Menuiserie d'art",
    description: "Réalisation de pièces uniques et ornementations",
    features: [
      "Sculptures sur bois",
      "Marqueterie fine",
      "Restauration d'antiquités",
      "Créations contemporaines"
    ]
  },
  {
    title: "Aménagements luxueux",
    description: "Création d'intérieurs en bois précieux",
    features: [
      "Bibliothèques sur mesure",
      "Dressings de luxe",
      "Mobilier intégré",
      "Essences rares"
    ]
  }
];

const WoodworkSection = () => {
  const navigate = useNavigate();

  return (
    <section id="woodwork" className="relative min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/459389137.sd.mp4?s=956afd13a312f3a523c58f3f7128b3f94576da80&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        <div className="absolute inset-0 bg-dark/80" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-5xl font-serif mb-16 text-light text-center">
          Menuiserie d'Art & Bois Décoratif
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {woodworkServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-dark/40 backdrop-blur-sm border border-gold p-8 hover:bg-dark/60 transition-all duration-500"
            >
              <h3 className="text-2xl font-serif mb-6 text-gold">{service.title}</h3>
              <p className="text-lg mb-8 text-light/90">{service.description}</p>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-light/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/woodwork-projects')}
            className="inline-block px-8 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-light transition-all duration-500"
          >
            Voir plus de réalisations
          </button>
        </div>
      </div>
    </section>
  );
};

export default WoodworkSection;