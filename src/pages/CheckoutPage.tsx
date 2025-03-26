
import React from 'react';
import { motion } from 'framer-motion';
import CheckoutForm from '@/components/CheckoutForm';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const { cartItems } = useCart();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {cartItems.length > 0 ? (
            <CheckoutForm />
          ) : (
            <div className="text-center py-12 max-w-lg mx-auto">
              <div className="flex justify-center mb-6">
                <ShoppingBag className="h-16 w-16 text-muted" />
              </div>
              <h2 className="font-serif text-2xl font-medium mb-4">Tu carrito está vacío</h2>
              <p className="text-muted-foreground mb-8">
                No puedes finalizar la compra con un carrito vacío. Añade algunos productos primero.
              </p>
              <Button asChild className="honey-button">
                <Link to="/productos">Ver productos</Link>
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CheckoutPage;
