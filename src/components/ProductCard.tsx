
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { type Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden border border-border/50 transition-all duration-300 hover:shadow-honey">
        <Link to={`/producto/${product.id}`} className="block h-full">
          <div className="relative overflow-hidden h-56">
            <div className="absolute inset-0 bg-gradient-honey opacity-30 z-10" />
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            {product.featured && (
              <Badge className="absolute top-3 left-3 z-20 bg-honey text-white border-none">
                Destacado
              </Badge>
            )}
          </div>
          
          <CardContent className="p-5">
            <h3 className="font-serif text-lg font-medium mb-2 line-clamp-1">{product.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {product.weight}
            </p>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          </CardContent>
          
          <CardFooter className="p-5 pt-0 flex justify-between items-center">
            <div className="text-lg font-medium text-honey-dark">
              {product.price.toFixed(2)}€
            </div>
            
            <Button 
              onClick={handleAddToCart}
              variant="outline" 
              size="icon"
              className="rounded-full transition-all duration-300 hover:bg-honey hover:text-white hover:border-honey"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Añadir al carrito</span>
            </Button>
          </CardFooter>
        </Link>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
