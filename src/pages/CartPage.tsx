
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingCart, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/context/CartContext';
import { getFeaturedProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, subtotal } = useCart();
  const featuredProducts = getFeaturedProducts().slice(0, 3);
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Tu Carrito
          </h1>
          <p className="text-muted-foreground text-lg">
            Revisa tu selección y completa tu pedido.
          </p>
        </motion.div>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {cartItems.map((item, index) => (
                      <motion.div 
                        key={item.product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                          <div className="w-full sm:w-24 h-24 bg-secondary rounded-md overflow-hidden">
                            <img 
                              src={item.product.image} 
                              alt={item.product.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:justify-between">
                              <div>
                                <h3 className="font-serif font-medium">
                                  <Link to={`/producto/${item.product.id}`} className="hover:text-honey transition-colors">
                                    {item.product.name}
                                  </Link>
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {item.product.weight}
                                </p>
                              </div>
                              <div className="text-honey-dark font-medium mt-2 sm:mt-0">
                                {item.product.price.toFixed(2)}€
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-center mt-4">
                              <div className="flex items-center space-x-4">
                                <Button 
                                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)} 
                                  variant="outline" 
                                  size="icon" 
                                  disabled={item.quantity <= 1}
                                  className="h-8 w-8 rounded-full"
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <Button 
                                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)} 
                                  variant="outline" 
                                  size="icon" 
                                  className="h-8 w-8 rounded-full"
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                              
                              <Button 
                                onClick={() => removeFromCart(item.product.id)} 
                                variant="ghost" 
                                size="icon"
                                className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                              >
                                <Trash2 className="h-4 w-4" />
                                <span className="sr-only">Eliminar</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                        
                        {index < cartItems.length - 1 && (
                          <Separator className="my-6" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <Button 
                    variant="ghost" 
                    onClick={clearCart}
                    className="text-muted-foreground"
                  >
                    Vaciar carrito
                  </Button>
                  <Link to="/productos">
                    <Button variant="outline" className="flex items-center">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Seguir comprando
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
            
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-medium mb-6">
                    Resumen del pedido
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>{subtotal.toFixed(2)}€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Envío</span>
                      <span>Calculado en el siguiente paso</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between font-medium text-lg">
                      <span>Total</span>
                      <span>{subtotal.toFixed(2)}€</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="honey-button w-full group">
                    Finalizar compra
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <div className="flex justify-center mb-6">
              <ShoppingCart className="h-16 w-16 text-muted" />
            </div>
            <h2 className="font-serif text-2xl font-medium mb-4">Tu carrito está vacío</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Parece que aún no has añadido productos a tu carrito. Descubre nuestra selección de miel de castaño artesanal.
            </p>
            <Button asChild className="honey-button">
              <Link to="/productos">
                Ver productos
              </Link>
            </Button>
          </motion.div>
        )}
        
        {cartItems.length > 0 && featuredProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="font-serif text-2xl font-semibold mb-8">
              Te podría interesar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
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

export default CartPage;
