import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const projectImages = [
  "/lovable-uploads/e98c7a38-8a1d-4d13-a051-464b475d8f48.png",
  "/lovable-uploads/41bce79b-6f24-4fc8-a9f6-a60909e30392.png",
  "/lovable-uploads/aceb1672-e8f9-4728-beb2-a96d1f224ab0.png",
  "/lovable-uploads/843547f0-d01c-4448-97c0-d3a5fca0eafb.png",
  "/lovable-uploads/9bc47a92-b7e7-409a-9162-2623b4464d96.png",
  "/lovable-uploads/f635d505-e734-478c-b19a-27024e68f484.png"
];

const WoodworkProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleWhatsAppContact = () => {
    const message = `Bonjour, je suis intéressé(e) par votre projet de menuiserie Appartement Almaz. Pouvez-vous me donner plus d'informations ?`;
    window.open(`https://wa.me/+33000000000?text=${encodeURIComponent(message)}`, '_blank');
  };

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {projectImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-lg ${
                    index === 0 ? 'md:col-span-2' : ''
                  }`}
                >
                  <AspectRatio ratio={16/9}>
                    <img
                      src={image}
                      alt={`Vue du projet Almaz ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </AspectRatio>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h1 className="text-4xl font-serif text-dark mb-4">Projet Appartement Almaz</h1>
              <p className="text-gold text-lg mb-6">Menuiserie d'Art & Aménagement Intérieur</p>
              
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-6">
                  Un projet d'exception alliant élégance contemporaine et savoir-faire artisanal. 
                  Cet appartement de luxe a été entièrement habillé de boiseries sur mesure, 
                  créant une atmosphère à la fois moderne et chaleureuse.
                </p>

                <h2 className="text-2xl font-serif text-dark mt-8 mb-4">Caractéristiques du projet</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Boiseries murales en noyer américain</li>
                  <li>Motifs chevrons et lamelles verticales</li>
                  <li>Éclairage LED intégré</li>
                  <li>Niches décoratives rétroéclairées</li>
                  <li>Finition vernis mat noble</li>
                  <li>Mobilier sur mesure intégré</li>
                </ul>

                <h2 className="text-2xl font-serif text-dark mt-8 mb-4">Détails techniques</h2>
                <p className="text-gray-600 mb-6">
                  Les panneaux muraux ont été réalisés en noyer américain sélectionné, 
                  avec un motif chevron central et des lamelles verticales latérales. 
                  L'ensemble est rehaussé par un système d'éclairage LED intégré, 
                  créant une ambiance luxueuse et contemporaine.
                </p>

                <button
                  onClick={handleWhatsAppContact}
                  className="w-full mt-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white transition-colors duration-300 flex items-center justify-center gap-2 rounded-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  Contacter sur WhatsApp pour plus d'informations
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WoodworkProjectDetail;