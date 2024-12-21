import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CartIcon = () => {
  const { state } = useCart();
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      className="relative"
      onClick={() => navigate('/cart')}
    >
      <ShoppingCart className="h-6 w-6" />
      {state.items.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {state.items.length}
        </span>
      )}
    </Button>
  );
};

export default CartIcon;