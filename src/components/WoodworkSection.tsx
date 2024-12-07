import { Check } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const woodworkServices = [
  {
    title: "Boiseries sur mesure",
    description: "Création de boiseries murales et moulures personnalisées",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
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
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb",
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
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
    features: [
      "Bibliothèques sur mesure",
      "Dressings de luxe",
      "Mobilier intégré",
      "Essences rares"
    ]
  }
];

const WoodworkSection = () => {
  return (
    <section id="woodwork" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif mb-12 text-light text-center">
          Menuiserie d'Art & Bois Décoratif
        </h2>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {woodworkServices.map((service, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="relative group overflow-hidden">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-light">
                      <h3 className="text-3xl font-serif mb-4 text-gold">{service.title}</h3>
                      <p className="text-xl mb-6 text-light/90">{service.description}</p>
                      <ul className="grid grid-cols-2 gap-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <Check className="w-5 h-5 text-gold" />
                            <span className="text-light/90">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-gold border-gold hover:bg-gold hover:text-dark -left-12 md:-left-16" />
          <CarouselNext className="text-gold border-gold hover:bg-gold hover:text-dark -right-12 md:-right-16" />
        </Carousel>
      </div>
    </section>
  );
};

export default WoodworkSection;