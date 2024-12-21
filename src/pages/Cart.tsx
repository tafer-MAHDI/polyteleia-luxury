import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: newQuantity } });
  };

  const handleRemoveItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-light py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-serif mb-8">Votre panier est vide</h1>
          <Button onClick={() => navigate('/')} className="bg-gold hover:bg-gold/90">
            Continuer vos achats
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif mb-8">Votre Panier</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-serif text-xl mb-2">{item.name}</h3>
                  <p className="text-gold font-semibold">{item.price}</p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-500"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow h-fit">
            <h2 className="font-serif text-2xl mb-4">Résumé de la commande</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Sous-total</span>
                <span>{state.total.toLocaleString()} DH</span>
              </div>
              <div className="flex justify-between">
                <span>Livraison</span>
                <span>Calculé à la prochaine étape</span>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold mb-4">
                <span>Total</span>
                <span>{state.total.toLocaleString()} DH</span>
              </div>
              <Button 
                className="w-full bg-gold hover:bg-gold/90"
                onClick={() => navigate('/checkout')}
              >
                Procéder au paiement
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;