import React, { createContext, useContext, useReducer } from 'react';
import { toast } from "sonner";

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' };

const initialState: CartState = {
  items: [],
  total: 0
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        toast.success("Quantité mise à jour dans le panier");
        return {
          ...state,
          items: updatedItems,
          total: calculateTotal(updatedItems)
        };
      }
      toast.success("Produit ajouté au panier");
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: calculateTotal([...state.items, { ...action.payload, quantity: 1 }])
      };
    }
    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      toast.info("Produit retiré du panier");
      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems)
      };
    }
    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems)
      };
    }
    case 'CLEAR_CART':
      return initialState;
    default:
      return state;
  }
};

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/[^\d]/g, ''));
    return total + (price * item.quantity);
  }, 0);
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};