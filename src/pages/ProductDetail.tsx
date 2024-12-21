import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, ShoppingCart } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { useCart } from '@/contexts/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { dispatch } = useCart();

  // Simulation de données de produit
  const product = {
    id: Number(id),
    name: "Produit Luxueux",
    price: "54,890 DH",
    description: "Description détaillée du produit de luxe",
    image: "/placeholder.svg",
    details: [
      "Matériaux nobles",
      "Fabrication artisanale",
      "Design exclusif",
      "Finitions haute qualité",
      "Garantie à vie"
    ],
    dimensions: {
      height: "90cm",
      width: "180cm",
      depth: "75cm"
    },
    materials: ["Bois massif", "Cuir pleine fleur", "Métal brossé"],
    colors: ["Or", "Argent", "Bronze"]
  };

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      }
    });
  };

  const handleWhatsAppClick = () => {
    const message = `Bonjour, je suis intéressé(e) par le produit ${product.name} (Réf: ${product.id})`;
    const whatsappUrl = `https://wa.me/+33000000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-light py-20">
      <div className="container mx-auto px-4">
        <Button 
          variant="ghost" 
          className="mb-8 hover:bg-gray-100"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2" />
          Retour
        </Button>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[600px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-serif mb-4">{product.name}</h1>
              <p className="text-3xl text-gold font-semibold mb-6">{product.price}</p>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">Caractéristiques</h2>
              <ul className="space-y-3">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">Dimensions</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <p className="text-sm text-gray-500">Hauteur</p>
                  <p className="text-lg font-semibold">{product.dimensions.height}</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <p className="text-sm text-gray-500">Largeur</p>
                  <p className="text-lg font-semibold">{product.dimensions.width}</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <p className="text-sm text-gray-500">Profondeur</p>
                  <p className="text-lg font-semibold">{product.dimensions.depth}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">Matériaux</h2>
              <div className="flex flex-wrap gap-2">
                {product.materials.map((material, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                    {material}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">Coloris disponibles</h2>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                    {color}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                className="flex-1 bg-gold hover:bg-gold/90 text-white py-6 text-lg"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-6 h-6 mr-2" />
                Ajouter au panier
              </Button>

              <Button 
                className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white py-6 text-lg"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Contacter sur WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;