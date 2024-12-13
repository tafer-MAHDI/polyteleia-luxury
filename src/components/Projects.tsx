import { useNavigate } from 'react-router-dom';

const projects = [
  {
    title: "Salon Moderne",
    category: "Résidentiel",
    image: "/lovable-uploads/e83c78e2-f919-49d2-aeac-fbdf32dc353a.png",
    description: "Design contemporain avec cheminée intégrée"
  },
  {
    title: "Suite Orientale",
    category: "Résidentiel",
    image: "/lovable-uploads/360692b4-51bd-4f62-9749-0d0b007e2f97.png",
    description: "Chambre luxueuse aux influences orientales"
  },
  {
    title: "Espace Piscine",
    category: "Extérieur",
    image: "/lovable-uploads/2d0cfbbb-37d1-4233-bf0a-9e63e4a80e78.png",
    description: "Aménagement extérieur avec piscine"
  },
  {
    title: "Suite Royale",
    category: "Résidentiel",
    image: "/lovable-uploads/2151b781-b997-4f47-b23e-637e9c9d3c4c.png",
    description: "Salon luxueux avec finitions artisanales"
  }
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-light text-center">
          Nos Réalisations
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="project-overlay">
                <div className="text-center text-light">
                  <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
                  <p className="text-gold mb-2">{project.category}</p>
                  <p className="text-sm opacity-90">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/all-projects')}
            className="inline-block px-8 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-light transition-all duration-500"
          >
            Voir plus de projets
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;