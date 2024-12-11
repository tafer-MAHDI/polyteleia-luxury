import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ArrowLeft } from 'lucide-react';

const projectImages = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg"
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
              <h1 className="text-4xl font-serif text-dark mb-4">Projet Villa Méditerranéenne</h1>
              <p className="text-gold text-lg mb-6">Résidentiel</p>
              
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-6">
                  Une villa contemporaine d'exception située sur les hauteurs de la Méditerranée. 
                  Ce projet incarne l'alliance parfaite entre luxe moderne et architecture méditerranéenne traditionnelle.
                </p>

                <h2 className="text-2xl font-serif text-dark mt-8 mb-4">Caractéristiques du projet</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Surface habitable : 450m²</li>
                  <li>Durée du projet : 18 mois</li>
                  <li>Matériaux nobles : Pierre naturelle, bois précieux, verre</li>
                  <li>Design sur mesure</li>
                  <li>Vue panoramique sur la mer</li>
                </ul>

                <h2 className="text-2xl font-serif text-dark mt-8 mb-4">Notre approche</h2>
                <p className="text-gray-600 mb-6">
                  Chaque détail a été pensé pour créer une harmonie parfaite entre intérieur et extérieur, 
                  maximisant la lumière naturelle et les vues spectaculaires tout en préservant l'intimité des occupants.
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