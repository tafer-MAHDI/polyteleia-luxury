import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ArrowLeft } from 'lucide-react';

const projectImages = [
  "/lovable-uploads/villa-moderne-1.jpg",
  "/lovable-uploads/villa-moderne-2.jpg",
  "/lovable-uploads/villa-moderne-3.jpg",
  "/lovable-uploads/villa-moderne-4.jpg",
  "/lovable-uploads/villa-moderne-5.jpg",
  "/lovable-uploads/villa-moderne-6.jpg",
  "/lovable-uploads/villa-moderne-7.jpg"
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-light">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-dark hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour
          </button>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 gap-8 mb-12">
              {projectImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-lg ${
                    index === 0 ? 'col-span-2 aspect-w-21 aspect-h-9' : 'aspect-w-16 aspect-h-9'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Vue du projet ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h1 className="text-4xl font-serif text-dark mb-4">Villa Moderne Luxueuse</h1>
              <p className="text-gold text-lg mb-6">Résidentiel</p>
              
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-6">
                  Un projet d'architecture d'intérieur contemporain alliant élégance et sophistication. 
                  Boiseries sculptées, éclairage intégré et mobilier sur mesure créent une atmosphère raffinée et chaleureuse.
                </p>

                <h2 className="text-2xl font-serif text-dark mt-8 mb-4">Caractéristiques du projet</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Surface habitable : 380m²</li>
                  <li>Durée du projet : 14 mois</li>
                  <li>Matériaux nobles : Noyer, marbre, bois massif</li>
                  <li>Éclairage LED intégré sur mesure</li>
                  <li>Mobilier contemporain luxueux</li>
                  <li>Plafonds architecturaux avec moulures</li>
                </ul>

                <h2 className="text-2xl font-serif text-dark mt-8 mb-4">Notre approche</h2>
                <p className="text-gray-600 mb-6">
                  Chaque espace a été conçu pour maximiser le confort et l'élégance, avec une attention particulière 
                  aux détails architecturaux, aux textures et à l'harmonie des couleurs. Les boiseries sur mesure et 
                  l'éclairage d'ambiance créent une atmosphère unique et sophistiquée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;