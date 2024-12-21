import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ArrowLeft } from 'lucide-react';

const woodworkProjects = [
  {
    id: 1,
    title: "Habillage Mural Art Déco",
    category: "Habillage Mural",
    image: "/lovable-uploads/95cb7086-af6d-470a-ae61-e49821a5d2e3.png",
    description: "Habillage mural en noyer avec motifs chevrons et éclairage intégré"
  },
  {
    id: 2,
    title: "Cuisine Contemporaine",
    category: "Cuisine",
    image: "/placeholder.svg",
    description: "Cuisine sur mesure en bois massif et laque"
  },
  {
    id: 3,
    title: "Dressing Luxe",
    category: "Dressing",
    image: "/placeholder.svg",
    description: "Dressing en noyer avec finitions dorées"
  },
  {
    id: 4,
    title: "Portes Art Déco",
    category: "Portes",
    image: "/placeholder.svg",
    description: "Ensemble de portes style Art Déco"
  },
  {
    id: 5,
    title: "Habillage Mural Classique",
    category: "Habillage Mural",
    image: "/placeholder.svg",
    description: "Boiseries murales style haussmannien"
  },
  {
    id: 6,
    title: "Cuisine Moderne",
    category: "Cuisine",
    image: "/placeholder.svg",
    description: "Cuisine design avec îlot central"
  },
  {
    id: 7,
    title: "Dressing Sur Mesure",
    category: "Dressing",
    image: "/placeholder.svg",
    description: "Dressing avec éclairage intégré"
  },
  {
    id: 8,
    title: "Portes Sculptées",
    category: "Portes",
    image: "/placeholder.svg",
    description: "Portes en chêne massif avec sculptures"
  },
  {
    id: 9,
    title: "Habillage Bibliothèque",
    category: "Habillage Mural",
    image: "/placeholder.svg",
    description: "Bibliothèque murale intégrée"
  },
  {
    id: 10,
    title: "Cuisine Classique",
    category: "Cuisine",
    image: "/placeholder.svg",
    description: "Cuisine traditionnelle en bois massif"
  }
];

const WoodworkProjects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-light">
      <Navigation />
      
      <div className="geometric-background pt-32 pb-20">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-dark hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour
          </button>

          <h1 className="text-4xl md:text-5xl font-serif text-dark mb-12 text-center">
            Nos Réalisations en Menuiserie
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {woodworkProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden bg-white shadow-lg rounded-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-dark mb-2">{project.title}</h3>
                  <p className="text-gold mb-4">{project.category}</p>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <button
                    onClick={() => navigate(`/woodwork-project/${project.id}`)}
                    className="w-full py-3 bg-dark text-light hover:bg-gold transition-colors duration-300"
                  >
                    En savoir plus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WoodworkProjects;
