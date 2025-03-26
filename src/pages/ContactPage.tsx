
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensaje enviado correctamente. Nos pondremos en contacto contigo lo antes posible.");
  };
  
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
            Contacto
          </h1>
          <p className="text-muted-foreground text-lg">
            Estamos aquí para responder a tus preguntas. No dudes en ponerte en contacto con nosotros.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-2xl font-semibold mb-6">
              Envíanos un mensaje
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Nombre
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Tu nombre" 
                    required 
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="tu@email.com" 
                    required 
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Asunto
                </label>
                <Input 
                  id="subject" 
                  placeholder="Asunto de tu mensaje" 
                  required 
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Mensaje
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Escribe tu mensaje aquí..." 
                  rows={6} 
                  required 
                  className="w-full resize-none"
                />
              </div>
              
              <Button type="submit" className="honey-button">
                <Send className="h-4 w-4 mr-2" />
                Enviar mensaje
              </Button>
            </form>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-2xl font-semibold mb-6">
              Información de contacto
            </h2>
            
            <div className="space-y-6 mb-10">
              <Card className="overflow-hidden border-honey/10">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 text-honey flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-2">Dirección</h3>
                      <address className="not-italic text-muted-foreground">
                        Camino de las Abejas, 24<br />
                        28023 Madrid, España
                      </address>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border-honey/10">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Phone className="h-6 w-6 text-honey flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-2">Teléfono</h3>
                      <p className="text-muted-foreground">
                        +34 91 123 45 67
                      </p>
                      <p className="text-muted-foreground text-sm mt-1">
                        Lunes a Viernes: 9:00 - 18:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border-honey/10">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Mail className="h-6 w-6 text-honey flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        info@mieldecastano.com
                      </p>
                      <p className="text-muted-foreground text-sm mt-1">
                        Respondemos en 24-48 horas
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="rounded-lg overflow-hidden h-[300px] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.044683539224!2d-3.7722774843402227!3d40.44276296137328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422937bd10afe1%3A0xeac8a36d4b0de0ed!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1652893860689!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de nuestra tienda"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
