import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const chairs = [
  {
    id: 1,
    name: "Fauteuil Élégance",
    price: "1,290€",
    image: "/placeholder.svg",
    description: "Fauteuil contemporain en velours, structure en bois massif"
  },
  {
    id: 2,
    name: "Chaise Royale",
    price: "890€",
    image: "/placeholder.svg",
    description: "Chaise design en cuir véritable avec finitions dorées"
  },
  {
    id: 3,
    name: "Bergère Louis XV",
    price: "2,490€",
    image: "/placeholder.svg",
    description: "Bergère style Louis XV, tapisserie fait main"
  },
  {
    id: 4,
    name: "Fauteuil Modern Art",
    price: "1,790€",
    image: "/placeholder.svg",
    description: "Fauteuil design contemporain, tissu premium"
  },
  {
    id: 5,
    name: "Chaise Scandinave",
    price: "590€",
    image: "/placeholder.svg",
    description: "Design minimaliste nordique"
  },
  {
    id: 6,
    name: "Fauteuil Club",
    price: "1,490€",
    image: "/placeholder.svg",
    description: "Cuir pleine fleur patiné"
  },
  {
    id: 7,
    name: "Chaise Art Déco",
    price: "990€",
    image: "/placeholder.svg",
    description: "Style années 20"
  },
  {
    id: 8,
    name: "Fauteuil Zen",
    price: "1,190€",
    image: "/placeholder.svg",
    description: "Inspiration japonaise"
  },
  {
    id: 9,
    name: "Chaise Industrial",
    price: "790€",
    image: "/placeholder.svg",
    description: "Style industriel vintage"
  },
  {
    id: 10,
    name: "Fauteuil Cosy",
    price: "1,390€",
    image: "/placeholder.svg",
    description: "Ultra confortable"
  }
];

const Chairs = () => {
  const navigate = useNavigate();

  return (
    <section className="geometric-background py-20">
      <div className="container mx-auto px-4">
        <Button 
          variant="ghost" 
          className="mb-8 hover:bg-gray-100"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2" />
          Retour
        </Button>

        <h2 className="text-4xl font-serif mb-8 text-center">Chaises</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {chairs.map((chair) => (
            <div 
              key={chair.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <img
                  src={chair.image}
                  alt={chair.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-4 bg-white">
                <h3 className="text-lg font-serif mb-2">{chair.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{chair.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gold font-semibold">{chair.price}</span>
                  <Button 
                    className="bg-gold hover:bg-gold/90 text-white"
                    onClick={() => navigate(`/product/${chair.id}`)}
                  >
                    Voir détails
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chairs;
