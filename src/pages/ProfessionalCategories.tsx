import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const categories = {
  bureaux: [
    { id: 1, name: "Bureau Présidentiel Excellence", price: "4,990€", image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952", description: "Bureau présidentiel en bois massif" },
    { id: 2, name: "Bureau Direction Moderne", price: "3,790€", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e", description: "Bureau de direction contemporain" },
    { id: 3, name: "Bureau Executive Plus", price: "4,290€", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", description: "Bureau executive avec extensions" },
    { id: 4, name: "Bureau Luxe Premium", price: "5,990€", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742", description: "Bureau premium tout équipé" },
    { id: 5, name: "Bureau Classic Elite", price: "3,990€", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625", description: "Bureau classique raffiné" },
    { id: 6, name: "Bureau Modern Tech", price: "4,490€", image: "https://images.unsplash.com/photo-1524230572899-a752b3835840", description: "Bureau high-tech connecté" },
    { id: 7, name: "Bureau Signature", price: "6,990€", image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764", description: "Bureau signature exclusif" },
    { id: 8, name: "Bureau Élégance", price: "4,790€", image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833", description: "Bureau élégant et fonctionnel" },
    { id: 9, name: "Bureau Prestige", price: "5,490€", image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952", description: "Bureau prestige haut de gamme" },
    { id: 10, name: "Bureau Executive Supreme", price: "7,990€", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e", description: "Bureau supreme luxe" }
  ],
  tablesReunion: [
    { id: 11, name: "Table Réunion Executive", price: "3,890€", image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334", description: "Table de réunion professionnelle" },
    { id: 12, name: "Table Conférence Plus", price: "4,990€", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", description: "Table de conférence modulable" },
    { id: 13, name: "Table Meeting Pro", price: "3,490€", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742", description: "Table de réunion moderne" },
    { id: 14, name: "Table Conseil Elite", price: "5,990€", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625", description: "Table de conseil premium" },
    { id: 15, name: "Table Réunion Tech", price: "4,290€", image: "https://images.unsplash.com/photo-1524230572899-a752b3835840", description: "Table connectée" },
    { id: 16, name: "Table Conférence Luxe", price: "6,990€", image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764", description: "Table de conférence luxueuse" },
    { id: 17, name: "Table Meeting Classic", price: "3,990€", image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833", description: "Table classique élégante" },
    { id: 18, name: "Table Conseil Modern", price: "4,790€", image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334", description: "Table moderne design" },
    { id: 19, name: "Table Réunion Premium", price: "5,490€", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", description: "Table premium exclusive" },
    { id: 20, name: "Table Conférence Supreme", price: "7,990€", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742", description: "Table supreme haut de gamme" }
  ],
  bibliotheques: [
    { id: 21, name: "Bibliothèque Corporate", price: "2,990€", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", description: "Bibliothèque professionnelle" },
    { id: 22, name: "Bibliothèque Executive", price: "3,990€", image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952", description: "Bibliothèque executive" },
    { id: 23, name: "Bibliothèque Modern", price: "2,790€", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e", description: "Bibliothèque moderne" },
    { id: 24, name: "Bibliothèque Classic", price: "3,490€", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", description: "Bibliothèque classique" },
    { id: 25, name: "Bibliothèque Premium", price: "4,990€", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742", description: "Bibliothèque premium" },
    { id: 26, name: "Bibliothèque Luxe", price: "5,990€", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625", description: "Bibliothèque luxe" },
    { id: 27, name: "Bibliothèque Elite", price: "4,490€", image: "https://images.unsplash.com/photo-1524230572899-a752b3835840", description: "Bibliothèque elite" },
    { id: 28, name: "Bibliothèque Pro", price: "3,790€", image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764", description: "Bibliothèque professionnelle" },
    { id: 29, name: "Bibliothèque Supreme", price: "6,990€", image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833", description: "Bibliothèque supreme" },
    { id: 30, name: "Bibliothèque Signature", price: "7,990€", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", description: "Bibliothèque signature" }
  ]
};

const ProfessionalCategories = () => {
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
              {category === 'bureaux' && 'Bureaux Présidentiels'}
              {category === 'tablesReunion' && 'Tables de Réunion'}
              {category === 'bibliotheques' && 'Bibliothèques'}
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

export default ProfessionalCategories;