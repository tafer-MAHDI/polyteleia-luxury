

const projects = [
  {
    title: "Espace Lounge Contemporain",
    category: "Commercial",
    image: "/lovable-uploads/project-1.jpg",
    description: "Design moderne avec plafonds circulaires et éclairage d'ambiance"
  },
  {
    title: "Salon Élégant",
    category: "Résidentiel",
    image: "/lovable-uploads/project-2.jpg",
    description: "Habillage mural sophistiqué avec finitions luxueuses"
  },
  {
    title: "Salon Prestige",
    category: "Résidentiel",
    image: "/lovable-uploads/project-3.jpg",
    description: "Espace de réception avec luminaires sculptés et détails dorés"
  },
  {
    title: "Boutique Parfumerie",
    category: "Commercial",
    image: "/lovable-uploads/project-4.jpg",
    description: "Aménagement luxueux avec arches dorées et éclairage intégré"
  },
  {
    title: "Studio Contemporain",
    category: "Résidentiel",
    image: "/lovable-uploads/project-5.jpg",
    description: "Espace ouvert avec cuisine intégrée et finitions en marbre"
  },
  {
    title: "Bureau Moderne",
    category: "Commercial",
    image: "/lovable-uploads/project-6.jpg",
    description: "Espace de travail avec éléments naturels et design épuré"
  }
];

const Projects = () => {

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-light text-center">
          Nos Réalisations
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Visite Virtuelle 360° */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-serif mb-8 text-light text-center">
            Visite Virtuelle 360°
          </h3>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://vtc.virtualtourscreator.com.au/share/77a222778f269ab996f317a93133fc4a" 
                allowFullScreen
                className="border-0"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/polyteleia_luxury_officiel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-light transition-all duration-500"
          >
            Voir plus de projets
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;