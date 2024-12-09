import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <section className="geometric-background py-20">
      <div className="container mx-auto px-4">
        <Button 
          variant="ghost" 
          className="mb-8 hover:bg-gray-100"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2" />
          Retour
        </Button>

        <h2 className="text-4xl font-serif mb-8 text-center">Contactez-nous</h2>
        <p className="text-lg text-gray-600 mb-4 text-center">
          Pour toute demande d'information, veuillez remplir le formulaire ci-dessous.
        </p>

        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">Nom</label>
            <input 
              type="text" 
              id="name" 
              className="w-full p-2 border border-gray-300 rounded" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-2 border border-gray-300 rounded" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">Message</label>
            <textarea 
              id="message" 
              className="w-full p-2 border border-gray-300 rounded" 
              rows="4" 
              required 
            ></textarea>
          </div>
          <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-white py-3">
            Envoyer
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
