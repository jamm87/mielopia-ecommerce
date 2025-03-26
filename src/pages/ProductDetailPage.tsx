
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Minus, Plus, ShoppingCart, Shield, Truck, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { getProductById, getFeaturedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = getProductById(id || '');
  const relatedProducts = getFeaturedProducts().filter(p => p.id !== id).slice(0, 3);
  
  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-medium mb-4">Producto no encontrado</h2>
          <p className="text-muted-foreground mb-6">
            El producto que buscas no existe o ha sido eliminado.
          </p>
          <Button asChild>
            <Link to="/productos">Volver a productos</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button 
            variant="ghost" 
            className="flex items-center text-muted-foreground hover:text-foreground"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-honey/10 absolute -right-12 -top-12 w-40 h-40 animate-float" />
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto rounded-lg shadow-honey relative z-10"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col h-full">
              <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">
                {product.name}
              </h1>
              <p className="text-muted-foreground mb-6">
                {product.weight}
              </p>
              
              <div className="text-2xl font-medium text-honey-dark mb-6">
                {product.price.toFixed(2)}€
              </div>
              
              <p className="text-muted-foreground mb-8">
                {product.description}
              </p>
              
              <div className="mb-8">
                <h3 className="font-serif font-medium mb-4">Características</h3>
                <ul className="space-y-2">
                  {product.details?.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-honey/20 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-honey" />
                      </div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="font-serif font-medium mb-4">Cantidad</h3>
                <div className="flex items-center space-x-4">
                  <Button 
                    onClick={() => handleQuantityChange(-1)} 
                    variant="outline" 
                    size="icon" 
                    disabled={quantity <= 1}
                    className="rounded-full h-10 w-10"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center font-medium">{quantity}</span>
                  <Button 
                    onClick={() => handleQuantityChange(1)} 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full h-10 w-10"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  onClick={handleAddToCart}
                  className="honey-button flex-1 flex items-center justify-center"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Añadir al carrito
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-none flex items-center justify-center"
                >
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Añadir a favoritos</span>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-honey mr-3" />
                  <span className="text-sm">Garantía de calidad</span>
                </div>
                <div className="flex items-center">
                  <Truck className="h-5 w-5 text-honey mr-3" />
                  <span className="text-sm">Envío en 24/48h</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <Separator className="mb-12" />
            <h2 className="font-serif text-2xl font-semibold mb-8">
              También te puede interesar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((product, index) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
