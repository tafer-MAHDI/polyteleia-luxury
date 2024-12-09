import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const chairs = [
  {
    id: 1,
    name: "Fauteuil Élégance",
    price: "1,290€",
    description: "Fauteuil contemporain en velours, structure en bois massif",
    image: "/placeholder.svg",
    color: "Bleu nuit",
    details: [
      "Structure en bois massif de hêtre",
      "Rembourrage en mousse haute densité",
      "Revêtement en velours premium",
      "Hauteur d'assise : 45cm",
      "Dimensions : L80 x P85 x H95 cm"
    ]
  },
  {
    id: 2,
    name: "Chaise Royale",
    price: "890€",
    description: "Chaise design en cuir véritable avec finitions dorées",
    image: "/placeholder.svg",
    color: "Cognac",
    details: [
      "Structure en bois de chêne",
      "Revêtement en cuir pleine fleur",
      "Finitions en laiton doré",
      "Hauteur d'assise : 48cm",
      "Dimensions : L55 x P60 x H90 cm"
    ]
  },
  {
    id: 3,
    name: "Bergère Louis XV",
    price: "2,490€",
    description: "Bergère style Louis XV, tapisserie fait main",
    image: "/placeholder.svg",
    color: "Bordeaux",
    details: [
      "Bois sculpté à la main",
      "Tapisserie artisanale",
      "Rembourrage traditionnel en crin",
      "Hauteur d'assise : 42cm",
      "Dimensions : L85 x P90 x H105 cm"
    ]
  },
  {
    id: 4,
    name: "Fauteuil Modern Art",
    price: "1,790€",
    description: "Fauteuil design contemporain, tissu premium",
    image: "/placeholder.svg",
    color: "Gris perle",
    details: [
      "Structure en acier brossé",
      "Tissu haute résistance",
      "Coussin d'assise amovible",
      "Hauteur d'assise : 43cm",
      "Dimensions : L75 x P80 x H85 cm"
    ]
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const chair = chairs.find(c => c.id === Number(id));

  if (!chair) {
    return <div className="container mx-auto px-4 py-20">Produit non trouvé</div>;
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <Button 
        variant="ghost" 
        className="mb-8 hover:bg-gray-100"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="mr-2" />
        Retour
      </Button>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="relative group">
          <img
            src={chair.image}
            alt={chair.name}
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-serif">{chair.name}</h1>
          <p className="text-2xl text-gold font-semibold">{chair.price}</p>
          <p className="text-gray-600">{chair.description}</p>
          
          <div className="py-4">
            <h3 className="text-xl font-semibold mb-4">Caractéristiques</h3>
            <ul className="space-y-3">
              {chair.details.map((detail, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6">
            <p className="text-sm text-gray-500 mb-4">Coloris disponible : {chair.color}</p>
            <Button className="w-full bg-gold hover:bg-gold/90 text-white py-6 text-lg">
              Ajouter au panier
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
