import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const chairs = [
  {
    id: 1,
    name: "Fauteuil Élégance",
    price: "1,290€",
    description: "Fauteuil contemporain en velours, structure en bois massif",
    image: "/placeholder.svg",
    color: "Bleu nuit"
  },
  {
    id: 2,
    name: "Chaise Royale",
    price: "890€",
    description: "Chaise design en cuir véritable avec finitions dorées",
    image: "/placeholder.svg",
    color: "Cognac"
  },
  {
    id: 3,
    name: "Bergère Louis XV",
    price: "2,490€",
    description: "Bergère style Louis XV, tapisserie fait main",
    image: "/placeholder.svg",
    color: "Bordeaux"
  },
  {
    id: 4,
    name: "Fauteuil Modern Art",
    price: "1,790€",
    description: "Fauteuil design contemporain, tissu premium",
    image: "/placeholder.svg",
    color: "Gris perle"
  }
];

const Chairs = () => {
  const navigate = useNavigate();

  return (
    <section id="chairs" className="py-20 bg-gradient-to-b from-light to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-dark">
            Collection de Chaises
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            Découvrez notre collection exclusive de chaises et fauteuils de luxe, alliant confort exceptionnel et design raffiné.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chairs.map((chair) => (
            <Card 
              key={chair.id} 
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <CardHeader className="relative h-80 overflow-hidden">
                <img
                  src={chair.image}
                  alt={chair.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </CardHeader>
              <CardContent className="relative z-10 bg-white p-6">
                <CardTitle className="text-2xl mb-2 font-serif">{chair.name}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">{chair.description}</CardDescription>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gold font-semibold text-xl">{chair.price}</span>
                  <span className="text-sm text-gray-500">Coloris: {chair.color}</span>
                </div>
              </CardContent>
              <CardFooter className="bg-white border-t border-gray-100">
                <Button 
                  className="w-full bg-gold hover:bg-gold/90 text-white font-medium py-3 transition-colors duration-300"
                  onClick={() => navigate(`/product/${chair.id}`)}
                >
                  Commander
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
          <p className="text-gray-600 italic mt-8 mb-8">
            Chaque pièce est méticuleusement créée pour sublimer votre intérieur
          </p>
          <div className="flex justify-center space-x-4">
            <div className="w-3 h-3 rounded-full bg-gold"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chairs;