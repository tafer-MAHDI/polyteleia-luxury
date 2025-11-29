import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ArrowLeft } from 'lucide-react';

const projectsData = {
  "1": {
    title: "Villa Moderne Luxueuse",
    category: "Résidentiel",
    description: "Un projet d'architecture d'intérieur contemporain alliant élégance et sophistication. Boiseries sculptées, éclairage intégré et mobilier sur mesure créent une atmosphère raffinée et chaleureuse.",
    surface: "380m²",
    duration: "14 mois",
    materials: "Noyer, marbre, bois massif",
    features: [
      "Éclairage LED intégré sur mesure",
      "Mobilier contemporain luxueux",
      "Plafonds architecturaux avec moulures"
    ],
    images: [
      "/lovable-uploads/villa-moderne-1.jpg",
      "/lovable-uploads/villa-moderne-2.jpg",
      "/lovable-uploads/villa-moderne-3.jpg",
      "/lovable-uploads/villa-moderne-4.jpg",
      "/lovable-uploads/villa-moderne-5.jpg",
      "/lovable-uploads/villa-moderne-6.jpg",
      "/lovable-uploads/villa-moderne-7.jpg"
    ]
  },
  "2": {
    title: "Palais à Rabat",
    category: "Résidentiel",
    description: "Un palais d'exception alliant tradition marocaine et modernité. Espaces palatials avec finitions luxueuses, plafonds sculptés et éclairage d'ambiance sophistiqué créant une atmosphère majestueuse.",
    surface: "850m²",
    duration: "24 mois",
    materials: "Marbre blanc, bois précieux, dorures",
    features: [
      "Plafonds architecturaux avec éclairage intégré",
      "Murs texturés avec motifs géométriques",
      "Mobilier sur mesure haut de gamme",
      "Espaces de réception grandioses"
    ],
    images: [
      "/lovable-uploads/palais-rabat-1.jpg",
      "/lovable-uploads/palais-rabat-2.jpg",
      "/lovable-uploads/palais-rabat-3.jpg",
      "/lovable-uploads/palais-rabat-4.jpg",
      "/lovable-uploads/palais-rabat-5.jpg",
      "/lovable-uploads/palais-rabat-6.jpg"
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData[id as keyof typeof projectsData];

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
            {project ? (
              <>
                <div className="grid grid-cols-2 gap-8 mb-12">
                  {project.images.map((image, index) => (
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
                  <h1 className="text-4xl font-serif text-dark mb-4">{project.title}</h1>
                  <p className="text-gold text-lg mb-6">{project.category}</p>
                  
                  <div className="prose max-w-none">
                    <p className="text-gray-600 mb-6">
                      {project.description}
                    </p>

                    <h2 className="text-2xl font-serif text-dark mt-8 mb-4">Caractéristiques du projet</h2>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>Surface habitable : {project.surface}</li>
                      <li>Durée du projet : {project.duration}</li>
                      <li>Matériaux nobles : {project.materials}</li>
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>

                    <h2 className="text-2xl font-serif text-dark mt-8 mb-4">Notre approche</h2>
                    <p className="text-gray-600 mb-6">
                      Chaque espace a été conçu pour maximiser le confort et l'élégance, avec une attention particulière 
                      aux détails architecturaux, aux textures et à l'harmonie des couleurs. Notre expertise permet de créer 
                      des intérieurs sur mesure qui reflètent le prestige et le raffinement recherchés.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-600">Projet non trouvé</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;