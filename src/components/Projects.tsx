import { useNavigate } from 'react-router-dom';

const projects = [
  {
    title: "Villa Méditerranéenne",
    category: "Résidentiel",
    image: "/placeholder.svg"
  },
  {
    title: "Penthouse Parisien",
    category: "Résidentiel",
    image: "/placeholder.svg"
  },
  {
    title: "Restaurant Le Royal",
    category: "Commercial",
    image: "/placeholder.svg"
  },
  {
    title: "Boutique Luxury",
    category: "Commercial",
    image: "/placeholder.svg"
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
                  <p className="text-gold">{project.category}</p>
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