import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const categories = {
  chairs: [
    {
      id: 1,
      name: "Fauteuil Signature Milano",
      price: "32,890 DH",
      description: "Fauteuil design italien en cuir pleine fleur",
      image: "/placeholder.svg",
      color: "Cognac"
    },
    {
      id: 2,
      name: "Bergère Royale",
      price: "28,990 DH",
      description: "Bergère classique en velours premium",
      image: "/placeholder.svg",
      color: "Bleu nuit"
    },
    {
      id: 3,
      name: "Fauteuil Lounge Nordic",
      price: "24,590 DH",
      description: "Design scandinave en chêne massif et tissu bouclette",
      image: "/placeholder.svg",
      color: "Écru"
    },
    {
      id: 4,
      name: "Chaise Médaillon Versailles",
      price: "18,790 DH",
      description: "Chaise style Louis XVI en hêtre sculpté",
      image: "/placeholder.svg",
      color: "Or vieilli"
    },
    {
      id: 5,
      name: "Fauteuil Club Vintage",
      price: "26,990 DH",
      description: "Cuir pleine fleur patiné main",
      image: "/placeholder.svg",
      color: "Havane"
    }
  ],
  diningTables: [
    {
      id: 11,
      name: "Table Emperador",
      price: "54,890 DH",
      description: "Table en marbre et bronze doré",
      image: "/placeholder.svg",
      color: "Marbre noir"
    },
    {
      id: 12,
      name: "Table Artisan",
      price: "48,990 DH",
      description: "Noyer massif avec marqueterie",
      image: "/placeholder.svg",
      color: "Noyer"
    },
    {
      id: 13,
      name: "Table Contemporaine Elite",
      price: "42,790 DH",
      description: "Céramique et acier brossé",
      image: "/placeholder.svg",
      color: "Gris titanium"
    },
    {
      id: 14,
      name: "Table Extensible Luxe",
      price: "38,990 DH",
      description: "Chêne massif avec rallonges intégrées",
      image: "/placeholder.svg",
      color: "Chêne naturel"
    },
    {
      id: 15,
      name: "Table Design Épuré",
      price: "45,890 DH",
      description: "Verre trempé et base en acier",
      image: "/placeholder.svg",
      color: "Transparent/Or"
    }
  ],
  armchairs: [
    {
      id: 21,
      name: "Fauteuil Capitonné Luxe",
      price: "34,890 DH",
      description: "Velours italien et finitions dorées",
      image: "/placeholder.svg",
      color: "Vert émeraude"
    },
    {
      id: 22,
      name: "Fauteuil Art Déco",
      price: "29,990 DH",
      description: "Design années 20 revisité",
      image: "/placeholder.svg",
      color: "Rose poudré"
    },
    {
      id: 23,
      name: "Fauteuil Relax Premium",
      price: "42,790 DH",
      description: "Cuir pleine fleur avec repose-pieds",
      image: "/placeholder.svg",
      color: "Noir"
    },
    {
      id: 24,
      name: "Fauteuil Contemporain",
      price: "31,890 DH",
      description: "Design minimaliste en tissu noble",
      image: "/placeholder.svg",
      color: "Gris perle"
    },
    {
      id: 25,
      name: "Fauteuil Baroque",
      price: "36,990 DH",
      description: "Style baroque avec dorures",
      image: "/placeholder.svg",
      color: "Doré/Crème"
    }
  ],
  sofas: [
    {
      id: 31,
      name: "Canapé Chesterfield Royal",
      price: "89,890 DH",
      description: "Cuir capitonné fait main",
      image: "/placeholder.svg",
      color: "Marron vintage"
    },
    {
      id: 32,
      name: "Canapé d'Angle Prestige",
      price: "94,990 DH",
      description: "Grand confort en L avec méridienne",
      image: "/placeholder.svg",
      color: "Gris anthracite"
    },
    {
      id: 33,
      name: "Canapé Design Italien",
      price: "76,890 DH",
      description: "Lignes épurées et cuir premium",
      image: "/placeholder.svg",
      color: "Blanc cassé"
    },
    {
      id: 34,
      name: "Canapé Modulable Luxe",
      price: "82,990 DH",
      description: "Configuration personnalisable",
      image: "/placeholder.svg",
      color: "Beige"
    },
    {
      id: 35,
      name: "Canapé 3 Places Excellence",
      price: "68,890 DH",
      description: "Velours mohair et pieds en laiton",
      image: "/placeholder.svg",
      color: "Bleu paon"
    }
  ]
};

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="geometric-background min-h-screen">
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
    </div>
  );
};

export default Categories;