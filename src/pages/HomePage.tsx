
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Award, Leaf, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts } from '@/data/products';

const HomePage = () => {
  const featuredProducts = getFeaturedProducts();
  
  const aboutRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px 0px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px 0px" });
  const featuredInView = useInView(featuredRef, { once: true, margin: "-100px 0px" });
  
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-background z-10" />
          <motion.div
            style={{ y }}
            className="w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1471943311424-646960669fbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" 
              alt="Miel de Castaño" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl text-center mx-auto"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Miel de Castaño Pura y Natural
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8">
              Del bosque a tu mesa. Descubre el sabor intenso y las propiedades únicas de nuestra miel artesanal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="honey-button group">
                <Link to="/productos">
                  Descubrir productos
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                <Link to="/nosotros">
                  Nuestra historia
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/50 backdrop-blur-sm border-honey/10">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-honey/10 flex items-center justify-center mb-5">
                  <Award className="h-6 w-6 text-honey" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">Calidad Premium</h3>
                <p className="text-muted-foreground">
                  Miel pura y no pasteurizada, para preservar todas sus propiedades y sabor natural.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/50 backdrop-blur-sm border-honey/10">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-honey/10 flex items-center justify-center mb-5">
                  <Leaf className="h-6 w-6 text-honey" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">100% Natural</h3>
                <p className="text-muted-foreground">
                  Sin aditivos, conservantes ni azúcares añadidos. Solo miel pura de castaño.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/50 backdrop-blur-sm border-honey/10">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-honey/10 flex items-center justify-center mb-5">
                  <Truck className="h-6 w-6 text-honey" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">Envío Seguro</h3>
                <p className="text-muted-foreground">
                  Embalaje especial que protege tus productos durante el transporte hasta tu hogar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section ref={aboutRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                Miel de Castaño Artesanal
              </h2>
              <p className="text-muted-foreground mb-6">
                La miel de castaño se caracteriza por su sabor intenso, ligeramente amargo y con notas a madera. De color ámbar oscuro, es rica en minerales y antioxidantes, lo que la convierte en una de las mieles más saludables.
              </p>
              <p className="text-muted-foreground mb-6">
                Nuestros apicultores utilizan métodos tradicionales para recolectar la miel de colmenas situadas en bosques de castaños centenarios, asegurando la máxima pureza y calidad del producto.
              </p>
              <Button asChild className="honey-button">
                <Link to="/nosotros">
                  Conoce nuestro proceso
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-square rounded-full bg-honey/10 absolute -right-12 -top-12 w-40 h-40 animate-float" />
              <div className="aspect-square rounded-full bg-honey/10 absolute -left-8 -bottom-8 w-24 h-24 animate-float" style={{ animationDelay: "2s" }} />
              <img 
                src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Miel de Castaño" 
                className="rounded-lg shadow-honey relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section ref={processRef} className="py-16 md:py-24 bg-gradient-honey">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
              Nuestro Proceso
            </h2>
            <p className="text-muted-foreground">
              Desde la colmena hasta tu mesa, cuidamos cada detalle para ofrecerte la mejor miel de castaño.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((step) => (
              <motion.div 
                key={step}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 * step }}
                className="text-center"
              >
                <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center text-3xl font-serif font-bold text-honey mx-auto mb-6 shadow-honey">
                  {step}
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">
                  {step === 1 && "Ubicación Estratégica"}
                  {step === 2 && "Recolección Cuidadosa"}
                  {step === 3 && "Extracción Natural"}
                  {step === 4 && "Envasado Artesanal"}
                </h3>
                <p className="text-muted-foreground">
                  {step === 1 && "Colocamos nuestras colmenas en bosques de castaños alejados de la contaminación."}
                  {step === 2 && "Recolectamos la miel en el momento óptimo, respetando el ciclo de las abejas."}
                  {step === 3 && "Extraemos la miel en frío para preservar todas sus propiedades."}
                  {step === 4 && "Envasamos manualmente cada producto para garantizar su calidad."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section ref={featuredRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold">
              Productos Destacados
            </h2>
            <Button asChild variant="ghost" className="mt-4 md:mt-0 text-honey hover:text-honey-dark hover:bg-honey/10">
              <Link to="/productos" className="group flex items-center">
                Ver todos los productos
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={featuredInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.15 * index }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-honey text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
              Sabor y Calidad en Cada Gota
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Descubre la diferencia de una miel artesanal, producida con pasión y respeto por la naturaleza.
            </p>
            <Button asChild className="bg-white text-honey hover:bg-white/90 hover:text-honey-dark">
              <Link to="/productos">
                Explorar Productos
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
