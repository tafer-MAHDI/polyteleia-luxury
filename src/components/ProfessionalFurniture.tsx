import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const professionalFurniture = [
  {
    id: 1,
    name: "Bureau Présidentiel Excellence",
    price: "4,990€",
    description: "Bureau présidentiel en noyer avec finitions luxueuses et rangements intégrés",
    image: "/lovable-uploads/e44881bf-744a-4cb3-bfbb-0c52958647ac.png",
    category: "bureau"
  },
  {
    id: 2,
    name: "Table de Réunion Executive",
    price: "3,890€",
    description: "Table de réunion ovale professionnelle avec connectique intégrée",
    image: "/lovable-uploads/5410ec4f-f7cf-4666-bc5c-13e1caa8b46c.png",
    category: "reunion"
  },
  {
    id: 3,
    name: "Bureau Direction Design",
    price: "3,990€",
    description: "Bureau de direction moderne avec rangement bibliothèque",
    image: "/lovable-uploads/a3606b6f-e2a4-4b90-adad-b9c60e50b3d4.png",
    category: "bureau"
  },
  {
    id: 4,
    name: "Espace de Travail Collaboratif",
    price: "5,790€",
    description: "Configuration modulaire pour espace de travail partagé",
    image: "/lovable-uploads/d72e5e61-5995-474f-85ac-6863559688bc.png",
    category: "bureau"
  }
];

const ProfessionalFurniture = () => {
  const navigate = useNavigate();

  return (
    <section id="professional" className="py-20 geometric-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-dark">
            Ameublement Professionnel
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            Découvrez notre collection exclusive de mobilier professionnel, alliant prestige et fonctionnalité pour vos espaces de travail.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {professionalFurniture.map((item) => (
            <Card 
              key={item.id} 
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <CardHeader className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </CardHeader>
              <CardContent className="relative z-10 bg-white p-6">
                <CardTitle className="text-2xl mb-2 font-serif">{item.name}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">{item.description}</CardDescription>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gold font-semibold text-xl">{item.price}</span>
                </div>
              </CardContent>
              <CardFooter className="bg-white border-t border-gray-100">
                <Button 
                  className="w-full bg-gold hover:bg-gold/90 text-white font-medium py-3 transition-colors duration-300"
                  onClick={() => navigate('/professional-categories')}
                >
                  En savoir plus
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            variant="outline" 
            className="border-gold text-gold hover:bg-gold hover:text-white transition-colors duration-300"
            onClick={() => navigate('/professional-categories')}
          >
            Découvrir plus de modèles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalFurniture;