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

const WoodworkProjectDetail = () => {
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
              <h1 className="text-4xl font-serif text-dark mb-4">Habillage Mural Art Déco</h1>
              <p className="text-gold text-lg mb-6">Boiseries</p>
              
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-6">
                  Un habillage mural sur mesure en bois précieux, alliant élégance classique et motifs Art Déco. 
                  Chaque détail a été minutieusement sculpté pour créer une pièce unique qui s'intègre parfaitement 
                  dans son environnement.
                </p>

                <h2 className="text-2xl font-serif text-dark mt-8 mb-4">Caractéristiques du projet</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Essence de bois : Chêne massif</li>
                  <li>Dimensions : 4m x 3m</li>
                  <li>Finition : Vernis mat noble</li>
                  <li>Détails sculptés à la main</li>
                  <li>Système d'éclairage intégré</li>
                </ul>

                <h2 className="text-2xl font-serif text-dark mt-8 mb-4">Notre approche</h2>
                <p className="text-gray-600 mb-6">
                  Chaque élément de cet habillage mural a été pensé pour créer un équilibre parfait entre 
                  esthétique et harmonie avec l'espace. Les sculptures ont été réalisées à la main par nos artisans, 
                  perpétuant ainsi les traditions de la menuiserie d'art française.
                </p>
              </div>
            </div>
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

export default WoodworkProjectDetail;