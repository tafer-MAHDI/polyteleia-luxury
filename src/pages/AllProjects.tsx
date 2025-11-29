import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ArrowLeft } from 'lucide-react';

const allProjects = [
  {
    id: 1,
    title: "Villa Moderne Luxueuse",
    category: "Résidentiel",
    image: "/lovable-uploads/villa-moderne-1.jpg",
    description: "Design contemporain avec boiseries élégantes et éclairage d'ambiance"
  },
  {
    id: 2,
    title: "Palais à Rabat",
    category: "Résidentiel",
    image: "/lovable-uploads/palais-rabat-1.jpg",
    description: "Architecture palatiale avec finitions luxueuses et design contemporain"
  },
  {
    id: 3,
    title: "Restaurant Le Royal",
    category: "Commercial",
    image: "/placeholder.svg",
    description: "Un restaurant gastronomique au design raffiné"
  },
  {
    id: 4,
    title: "Boutique Luxury",
    category: "Commercial",
    image: "/placeholder.svg",
    description: "Une boutique de luxe aux finitions exceptionnelles"
  },
  {
    id: 5,
    title: "Appartement Haussmannien",
    category: "Résidentiel",
    image: "/placeholder.svg",
    description: "Rénovation complète d'un appartement haussmannien"
  },
  {
    id: 6,
    title: "Hôtel Le Magnifique",
    category: "Hôtellerie",
    image: "/placeholder.svg",
    description: "Un hôtel 5 étoiles au design contemporain"
  },
  {
    id: 7,
    title: "Villa Côte d'Azur",
    category: "Résidentiel",
    image: "/placeholder.svg",
    description: "Une villa moderne sur la Côte d'Azur"
  },
  {
    id: 8,
    title: "Spa & Wellness Center",
    category: "Commercial",
    image: "/placeholder.svg",
    description: "Un centre de bien-être luxueux"
  },
  {
    id: 9,
    title: "Loft New-Yorkais",
    category: "Résidentiel",
    image: "/placeholder.svg",
    description: "Un loft au style industriel chic"
  },
  {
    id: 10,
    title: "Bureau Présidentiel",
    category: "Commercial",
    image: "/placeholder.svg",
    description: "Un espace de travail prestigieux"
  }
];

const AllProjects = () => {
  const navigate = useNavigate();

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
          Nos Réalisations
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
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
                  onClick={() => navigate(`/project-detail/${project.id}`)}
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
  );
};

export default AllProjects;