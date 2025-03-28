
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

export type ProductType = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  weight: string;
  category: string;
};

export type CartItemType = {
  product: ProductType;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItemType[];
  addToCart: (product: ProductType, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  processPayment: (customerInfo: any) => Promise<{ success: boolean, error?: string }>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: ProductType, quantity: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        const updatedItems = prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        
        toast.success(`Cantidad actualizada: ${existingItem.product.name}`, {
          duration: 2000
        });
        return updatedItems;
      } else {
        toast.success(`Añadido al carrito: ${product.name}`, {
          duration: 2000
        });
        return [...prevItems, { product, quantity }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find(item => item.product.id === productId);
      if (itemToRemove) {
        toast.info(`Eliminado del carrito: ${itemToRemove.product.name}`, {
          duration: 2000
        });
      }
      return prevItems.filter((item) => item.product.id !== productId);
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    toast.info('Carrito vaciado', {
      duration: 2000
    });
  };

  // This function will be connected to Stripe in the future
  const processPayment = async (customerInfo: any): Promise<{ success: boolean, error?: string }> => {
    try {
      // Here we will connect to Stripe API
      console.log('Processing payment with customer info:', customerInfo);
      console.log('Cart items:', cartItems);
      console.log('Total amount:', subtotal);
      
      // Mock successful payment for now
      return { success: true };
    } catch (error) {
      console.error('Error processing payment:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Error procesando el pago'
      };
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        processPayment,
      }}
    >
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
