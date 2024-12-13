import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const furniture = [
  {
    id: 1,
    name: "Fauteuil Hilsen",
    price: "2,490€",
    description: "Fauteuil contemporain en tissu bouclette, base dorée rotative",
    image: "/lovable-uploads/91a72674-b727-49fb-b0e6-91d7485a3c03.png",
    color: "Crème"
  },
  {
    id: 2,
    name: "Canapé Cloud",
    price: "4,990€",
    description: "Canapé moderne en tissu bouclette avec base dorée",
    image: "/lovable-uploads/072cd52d-9dd1-4f7c-8739-c9da05f72ae4.png",
    color: "Blanc cassé"
  },
  {
    id: 3,
    name: "Table Milano",
    price: "3,990€",
    description: "Table en bois massif hêtre plaquage noyer naturel",
    image: "/lovable-uploads/43978cc1-d560-4536-b09f-c3d8b05d158f.png",
    color: "Noyer naturel"
  },
  {
    id: 4,
    name: "Chaises Vitalia",
    price: "1,980 DH HT",
    description: "Chaise bois hêtre massif Similicuir de votre choix",
    image: "/lovable-uploads/2627fbb2-97e6-4db9-86ac-3ee1817a5aff.png",
    color: "Taupe"
  }
];

const Chairs = () => {
  const navigate = useNavigate();

  return (
    <section id="chairs" className="py-20 geometric-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-dark">
            Collection de Meubles
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            Découvrez notre collection exclusive de meubles de luxe, alliant confort exceptionnel et design raffiné.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {furniture.map((item) => (
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
                  <span className="text-sm text-gray-500">Coloris: {item.color}</span>
                </div>
              </CardContent>
              <CardFooter className="bg-white border-t border-gray-100">
                <Button 
                  className="w-full bg-gold hover:bg-gold/90 text-white font-medium py-3 transition-colors duration-300"
                  onClick={() => navigate('/categories')}
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
            onClick={() => navigate('/categories')}
          >
            Découvrir plus de modèles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Chairs;