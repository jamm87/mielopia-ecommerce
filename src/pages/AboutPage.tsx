
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Leaf, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
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
            Nuestra Historia
          </h1>
          <p className="text-muted-foreground text-lg">
            Descubre quiénes somos, nuestra pasión por la apicultura y el compromiso con la calidad.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-3xl font-semibold mb-6">
              Tradición familiar desde 1985
            </h2>
            <p className="text-muted-foreground mb-6">
              Nuestra historia comenzó hace más de tres décadas cuando Antonio Martínez, un apasionado de la naturaleza y las abejas, decidió establecer sus primeras colmenas en los bosques de castaños del norte de España.
            </p>
            <p className="text-muted-foreground mb-6">
              Lo que empezó como una afición se convirtió rápidamente en un proyecto familiar, transmitiendo de generación en generación los conocimientos y el respeto por las abejas y el entorno natural.
            </p>
            <p className="text-muted-foreground">
              Hoy, continuamos con esa misma pasión, combinando métodos tradicionales con técnicas modernas que nos permiten ofrecer una miel de la máxima calidad mientras preservamos la biodiversidad.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-honey/10 absolute -right-12 -top-12 w-40 h-40 animate-float" />
            <div className="aspect-square rounded-full bg-honey/10 absolute -left-8 -bottom-8 w-24 h-24 animate-float" style={{ animationDelay: "2s" }} />
            <img 
              src="https://images.unsplash.com/photo-1473973266408-ed4e9c10a3e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" 
              alt="Nuestras colmenas" 
              className="rounded-lg shadow-honey relative z-10"
            />
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-serif text-3xl font-semibold mb-6">
            Nuestros Valores
          </h2>
          <p className="text-muted-foreground">
            Estos principios fundamentales guían nuestro trabajo diario y nuestra relación con clientes, proveedores y el entorno natural.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Card className="h-full border-honey/10">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-honey/10 flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-honey" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-4">Calidad sin Compromisos</h3>
                <p className="text-muted-foreground">
                  Cada frasco de miel que producimos pasa por estrictos controles de calidad. Nos negamos a añadir azúcares, conservantes o cualquier otro aditivo que comprometa la pureza de nuestra miel.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Card className="h-full border-honey/10">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-honey/10 flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-honey" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-4">Compromiso Ambiental</h3>
                <p className="text-muted-foreground">
                  Protegemos a nuestras abejas y su entorno natural. Implementamos prácticas sostenibles que respetan el ciclo vital de las abejas y contribuyen a la conservación de la biodiversidad en los bosques de castaños.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Card className="h-full border-honey/10">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-honey/10 flex items-center justify-center mx-auto mb-6">
                  <User className="h-8 w-8 text-honey" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-4">Cercanía y Transparencia</h3>
                <p className="text-muted-foreground">
                  Mantenemos una relación cercana con nuestros clientes y comunidad. Compartimos abiertamente nuestro proceso de producción y fomentamos visitas a nuestras instalaciones para conocer de primera mano cómo trabajamos.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <div className="relative overflow-hidden rounded-lg mb-20">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1471943311424-646960669fbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" 
            alt="Bosque de castaños" 
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="text-center text-white max-w-3xl p-6"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                "La miel más pura nace del mayor respeto a la naturaleza"
              </h2>
              <p className="text-xl opacity-90">
                - Antonio Martínez, Fundador
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
