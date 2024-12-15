import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const categories = {
  bureaux: [
    { id: 1, name: "Bureau Présidentiel Excellence", price: "54,890 DH", image: "/placeholder.svg", description: "Bureau présidentiel en bois massif" },
    { id: 2, name: "Bureau Direction Moderne", price: "41,690 DH", image: "/placeholder.svg", description: "Bureau de direction contemporain" },
    { id: 3, name: "Bureau Executive Plus", price: "47,190 DH", image: "/placeholder.svg", description: "Bureau executive avec extensions" },
    { id: 4, name: "Bureau Luxe Premium", price: "65,890 DH", image: "/placeholder.svg", description: "Bureau premium tout équipé" },
    { id: 5, name: "Bureau Classic Elite", price: "43,890 DH", image: "/placeholder.svg", description: "Bureau classique raffiné" },
    { id: 6, name: "Bureau Modern Tech", price: "49,390 DH", image: "/placeholder.svg", description: "Bureau high-tech connecté" },
    { id: 7, name: "Bureau Signature", price: "76,890 DH", image: "/placeholder.svg", description: "Bureau signature exclusif" },
    { id: 8, name: "Bureau Élégance", price: "52,690 DH", image: "/placeholder.svg", description: "Bureau élégant et fonctionnel" },
    { id: 9, name: "Bureau Prestige", price: "60,390 DH", image: "/placeholder.svg", description: "Bureau prestige haut de gamme" },
    { id: 10, name: "Bureau Executive Supreme", price: "87,890 DH", image: "/placeholder.svg", description: "Bureau supreme luxe" }
  ],
  tablesReunion: [
    { id: 11, name: "Table Réunion Executive", price: "42,790 DH", image: "/placeholder.svg", description: "Table de réunion professionnelle" },
    { id: 12, name: "Table Conférence Plus", price: "54,890 DH", image: "/placeholder.svg", description: "Table de conférence modulable" },
    { id: 13, name: "Table Meeting Pro", price: "38,390 DH", image: "/placeholder.svg", description: "Table de réunion moderne" },
    { id: 14, name: "Table Conseil Elite", price: "65,890 DH", image: "/placeholder.svg", description: "Table de conseil premium" },
    { id: 15, name: "Table Réunion Tech", price: "47,190 DH", image: "/placeholder.svg", description: "Table connectée" },
    { id: 16, name: "Table Conférence Luxe", price: "76,890 DH", image: "/placeholder.svg", description: "Table de conférence luxueuse" },
    { id: 17, name: "Table Meeting Classic", price: "43,890 DH", image: "/placeholder.svg", description: "Table classique élégante" },
    { id: 18, name: "Table Conseil Modern", price: "52,690 DH", image: "/placeholder.svg", description: "Table moderne design" },
    { id: 19, name: "Table Réunion Premium", price: "60,390 DH", image: "/placeholder.svg", description: "Table premium exclusive" },
    { id: 20, name: "Table Conférence Supreme", price: "87,890 DH", image: "/placeholder.svg", description: "Table supreme haut de gamme" }
  ],
  bibliotheques: [
    { id: 21, name: "Bibliothèque Corporate", price: "32,890 DH", image: "/placeholder.svg", description: "Bibliothèque professionnelle" },
    { id: 22, name: "Bibliothèque Executive", price: "43,890 DH", image: "/placeholder.svg", description: "Bibliothèque executive" },
    { id: 23, name: "Bibliothèque Modern", price: "30,690 DH", image: "/placeholder.svg", description: "Bibliothèque moderne" },
    { id: 24, name: "Bibliothèque Classic", price: "38,390 DH", image: "/placeholder.svg", description: "Bibliothèque classique" },
    { id: 25, name: "Bibliothèque Premium", price: "54,890 DH", image: "/placeholder.svg", description: "Bibliothèque premium" },
    { id: 26, name: "Bibliothèque Luxe", price: "65,890 DH", image: "/placeholder.svg", description: "Bibliothèque luxe" },
    { id: 27, name: "Bibliothèque Elite", price: "49,390 DH", image: "/placeholder.svg", description: "Bibliothèque elite" },
    { id: 28, name: "Bibliothèque Pro", price: "41,690 DH", image: "/placeholder.svg", description: "Bibliothèque professionnelle" },
    { id: 29, name: "Bibliothèque Supreme", price: "76,890 DH", image: "/placeholder.svg", description: "Bibliothèque supreme" },
    { id: 30, name: "Bibliothèque Signature", price: "87,890 DH", image: "/placeholder.svg", description: "Bibliothèque signature" }
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