import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ArrowLeft } from 'lucide-react';

const woodworkProjects = [
  {
    id: 1,
    title: "Habillage Mural Art Déco",
    category: "Boiseries",
    image: "/placeholder.svg",
    description: "Habillage mural en bois précieux avec motifs Art Déco"
  },
  {
    id: 2,
    title: "Cuisine Contemporaine",
    category: "Cuisines",
    image: "/placeholder.svg",
    description: "Cuisine sur mesure en laque et bois noble"
  },
  {
    id: 3,
    title: "Dressing Walk-in",
    category: "Dressing",
    image: "/placeholder.svg",
    description: "Dressing luxueux avec éclairage intégré"
  },
  {
    id: 4,
    title: "Portes Sculptées",
    category: "Portes",
    image: "/placeholder.svg",
    description: "Ensemble de portes avec sculptures artisanales"
  },
  {
    id: 5,
    title: "Boiseries Haussmanniennes",
    category: "Boiseries",
    image: "/placeholder.svg",
    description: "Restauration complète de boiseries historiques"
  },
  {
    id: 6,
    title: "Cuisine Classique",
    category: "Cuisines",
    image: "/placeholder.svg",
    description: "Cuisine traditionnelle en chêne massif"
  },
  {
    id: 7,
    title: "Dressing Sur Mesure",
    category: "Dressing",
    image: "/placeholder.svg",
    description: "Dressing avec finitions laiton"
  },
  {
    id: 8,
    title: "Portes Coulissantes",
    category: "Portes",
    image: "/placeholder.svg",
    description: "Système de portes coulissantes en verre et bois"
  },
  {
    id: 9,
    title: "Habillage Bibliothèque",
    category: "Boiseries",
    image: "/placeholder.svg",
    description: "Habillage mural avec bibliothèque intégrée"
  },
  {
    id: 10,
    title: "Cuisine Design",
    category: "Cuisines",
    image: "/placeholder.svg",
    description: "Cuisine moderne avec îlot central"
  }
];

const WoodworkProjects = () => {
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {woodworkProjects.map((project) => (
              <div 
                key={project.id} 
                className="group relative overflow-hidden bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-dark bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-dark mb-2">{project.title}</h3>
                  <p className="text-gold mb-4">{project.category}</p>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <button
                    onClick={() => navigate(`/woodwork-project/${project.id}`)}
                    className="w-full py-3 bg-light text-gold border-2 border-gold hover:bg-gold hover:text-light transition-colors duration-300"
                  >
                    En savoir plus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fond 2D */}
      <div className="fixed inset-0 -z-10 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1%)`,
          backgroundSize: '100% 100%',
          opacity: 0.5
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)`,
          backgroundSize: '100% 100%'
        }}></div>
      </div>
    </div>
  );
};

export default WoodworkProjects;