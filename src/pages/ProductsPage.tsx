
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'pura', name: 'Miel Pura' },
    { id: 'ecologica', name: 'Miel Ecológica' },
    { id: 'regalo', name: 'Packs Regalo' }
  ];
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);
  
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
            Nuestros Productos
          </h1>
          <p className="text-muted-foreground text-lg">
            Descubre nuestra selección de miel de castaño artesanal, elaborada con las técnicas más tradicionales para preservar todo su sabor y propiedades.
          </p>
        </motion.div>
        
        <Tabs defaultValue="all" onValueChange={setSelectedCategory} className="mb-12">
          <div className="flex justify-center">
            <TabsList className="bg-secondary/80 backdrop-blur-sm">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-honey data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 * index }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    No hay productos disponibles en esta categoría actualmente.
                  </p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ProductsPage;
