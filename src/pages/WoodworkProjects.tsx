import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ArrowLeft, MessageCircle } from 'lucide-react';

const woodworkProjects = [
  {
    id: 1,
    title: "Bibliothèque Sur Mesure",
    category: "Menuiserie d'Art",
    image: "/placeholder.svg",
    description: "Bibliothèque en chêne massif avec détails sculptés"
  },
  {
    id: 2,
    title: "Escalier Hélicoïdal",
    category: "Menuiserie d'Art",
    image: "/placeholder.svg",
    description: "Escalier en bois précieux avec rampe sculptée"
  },
  {
    id: 3,
    title: "Boiseries Haussmanniennes",
    category: "Boiseries",
    image: "/placeholder.svg",
    description: "Restauration complète de boiseries historiques"
  },
  {
    id: 4,
    title: "Dressing Luxe",
    category: "Aménagement",
    image: "/placeholder.svg",
    description: "Dressing en noyer avec finitions dorées"
  },
  {
    id: 5,
    title: "Portes Art Déco",
    category: "Menuiserie d'Art",
    image: "/placeholder.svg",
    description: "Ensemble de portes style Art Déco"
  },
  {
    id: 6,
    title: "Cave à Vin",
    category: "Aménagement",
    image: "/placeholder.svg",
    description: "Cave à vin sur mesure en bois exotique"
  },
  {
    id: 7,
    title: "Bureau Présidentiel",
    category: "Menuiserie d'Art",
    image: "/placeholder.svg",
    description: "Bureau en ébène avec marqueterie"
  },
  {
    id: 8,
    title: "Cuisine Sur Mesure",
    category: "Aménagement",
    image: "/placeholder.svg",
    description: "Cuisine luxueuse en bois massif"
  },
  {
    id: 9,
    title: "Moulures Sculptées",
    category: "Boiseries",
    image: "/placeholder.svg",
    description: "Ensemble de moulures ornementales"
  },
  {
    id: 10,
    title: "Table de Conférence",
    category: "Menuiserie d'Art",
    image: "/placeholder.svg",
    description: "Table monumentale en bois précieux"
  }
];

const WoodworkProjects = () => {
  const navigate = useNavigate();

  const handleWhatsAppContact = (projectTitle: string) => {
    const message = `Bonjour, je suis intéressé(e) par votre projet de menuiserie "${projectTitle}". Pouvez-vous me donner plus d'informations ?`;
    window.open(`https://wa.me/+33000000000?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-light">
      <Navigation />
      
      <div className="pt-32 pb-20 container mx-auto px-4">
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
                  onClick={() => handleWhatsAppContact(project.title)}
                  className="w-full py-3 bg-[#25D366] hover:bg-[#128C7E] text-white transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Demander plus d'informations
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WoodworkProjects;