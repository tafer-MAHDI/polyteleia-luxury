import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const categories = {
  chairs: [
    { id: 1, name: "Fauteuil Élégance", price: "1,290€", image: "/placeholder.svg", description: "Fauteuil contemporain en velours" },
    { id: 2, name: "Chaise Royale", price: "890€", image: "/placeholder.svg", description: "Chaise design en cuir véritable" },
    { id: 3, name: "Bergère Louis XV", price: "2,490€", image: "/placeholder.svg", description: "Bergère style Louis XV" },
    { id: 4, name: "Fauteuil Modern Art", price: "1,790€", image: "/placeholder.svg", description: "Fauteuil design contemporain" },
    { id: 5, name: "Chaise Scandinave", price: "590€", image: "/placeholder.svg", description: "Design minimaliste nordique" },
    { id: 6, name: "Fauteuil Club", price: "1,490€", image: "/placeholder.svg", description: "Cuir pleine fleur patiné" },
    { id: 7, name: "Chaise Art Déco", price: "990€", image: "/placeholder.svg", description: "Style années 20" },
    { id: 8, name: "Fauteuil Zen", price: "1,190€", image: "/placeholder.svg", description: "Inspiration japonaise" },
    { id: 9, name: "Chaise Industrial", price: "790€", image: "/placeholder.svg", description: "Style industriel vintage" },
    { id: 10, name: "Fauteuil Cosy", price: "1,390€", image: "/placeholder.svg", description: "Ultra confortable" }
  ],
  diningTables: [
    { id: 11, name: "Table Majestueuse", price: "2,990€", image: "/placeholder.svg", description: "Table en chêne massif" },
    { id: 12, name: "Table Empire", price: "3,490€", image: "/placeholder.svg", description: "Style empire français" },
    { id: 13, name: "Table Contemporaine", price: "2,290€", image: "/placeholder.svg", description: "Design épuré moderne" },
    { id: 14, name: "Table Extensible", price: "1,990€", image: "/placeholder.svg", description: "Pratique et élégante" },
    { id: 15, name: "Table Ronde Art Déco", price: "2,790€", image: "/placeholder.svg", description: "Inspiration années 20" },
    { id: 16, name: "Table Industrielle", price: "1,890€", image: "/placeholder.svg", description: "Style atelier" },
    { id: 17, name: "Table Scandinave", price: "1,690€", image: "/placeholder.svg", description: "Minimalisme nordique" },
    { id: 18, name: "Table Rustique", price: "2,490€", image: "/placeholder.svg", description: "Bois ancien" },
    { id: 19, name: "Table Moderne", price: "2,190€", image: "/placeholder.svg", description: "Design contemporain" },
    { id: 20, name: "Table Classic", price: "2,890€", image: "/placeholder.svg", description: "Style intemporel" }
  ],
  armchairs: [
    { id: 21, name: "Bergère Luxe", price: "2,990€", image: "/placeholder.svg", description: "Velours premium" },
    { id: 22, name: "Fauteuil Club Vintage", price: "2,490€", image: "/placeholder.svg", description: "Cuir patiné" },
    { id: 23, name: "Fauteuil Design", price: "1,990€", image: "/placeholder.svg", description: "Style contemporain" },
    { id: 24, name: "Fauteuil Scandinave", price: "1,490€", image: "/placeholder.svg", description: "Confort nordique" },
    { id: 25, name: "Fauteuil Art Déco", price: "2,290€", image: "/placeholder.svg", description: "Élégance années 20" },
    { id: 26, name: "Fauteuil Relax", price: "1,890€", image: "/placeholder.svg", description: "Ultra confortable" },
    { id: 27, name: "Fauteuil Modern", price: "1,790€", image: "/placeholder.svg", description: "Design actuel" },
    { id: 28, name: "Fauteuil Classic", price: "2,190€", image: "/placeholder.svg", description: "Style traditionnel" },
    { id: 29, name: "Fauteuil Cosy", price: "1,690€", image: "/placeholder.svg", description: "Douceur et confort" },
    { id: 30, name: "Fauteuil Luxe", price: "2,890€", image: "/placeholder.svg", description: "Haut de gamme" }
  ],
  sofas: [
    { id: 31, name: "Canapé Royal", price: "4,990€", image: "/placeholder.svg", description: "3 places luxe" },
    { id: 32, name: "Canapé Modern", price: "3,990€", image: "/placeholder.svg", description: "Design contemporain" },
    { id: 33, name: "Canapé d'Angle", price: "5,490€", image: "/placeholder.svg", description: "Grand confort" },
    { id: 34, name: "Canapé Chesterfield", price: "4,490€", image: "/placeholder.svg", description: "Style anglais" },
    { id: 35, name: "Canapé Scandinave", price: "2,990€", image: "/placeholder.svg", description: "Style nordique" },
    { id: 36, name: "Canapé Convertible", price: "3,490€", image: "/placeholder.svg", description: "Pratique et élégant" },
    { id: 37, name: "Canapé Vintage", price: "3,790€", image: "/placeholder.svg", description: "Style rétro" },
    { id: 38, name: "Canapé Design", price: "4,290€", image: "/placeholder.svg", description: "Ligne épurée" },
    { id: 39, name: "Canapé Classic", price: "3,890€", image: "/placeholder.svg", description: "Intemporel" },
    { id: 40, name: "Canapé Luxe", price: "5,990€", image: "/placeholder.svg", description: "Haut de gamme" }
  ]
};

const Categories = () => {
  const navigate = useNavigate();

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

      {Object.entries(categories).map(([category, products]) => (
        <div key={category} className="mb-20">
          <h2 className="text-4xl font-serif mb-8 text-center">
            {category === 'chairs' && 'Chaises'}
            {category === 'diningTables' && 'Tables à manger'}
            {category === 'armchairs' && 'Fauteuils'}
            {category === 'sofas' && 'Canapés'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {products.map((product) => (
              <div 
                key={product.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-serif mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gold font-semibold">{product.price}</span>
                    <Button 
                      className="bg-gold hover:bg-gold/90 text-white"
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      Voir détails
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;