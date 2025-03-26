
import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Package className="h-6 w-6 text-honey" strokeWidth={1.5} />
              <span className="text-lg font-serif font-semibold">Miel de Castaño</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-2">
              Miel de castaño artesanal de la mejor calidad, directamente de nuestros apicultores a tu mesa.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-honey transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-honey transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-honey transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-serif font-medium text-base mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-honey transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-muted-foreground hover:text-honey transition-colors text-sm">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-muted-foreground hover:text-honey transition-colors text-sm">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-muted-foreground hover:text-honey transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-serif font-medium text-base mb-4">Legales</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacidad" className="text-muted-foreground hover:text-honey transition-colors text-sm">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/terminos" className="text-muted-foreground hover:text-honey transition-colors text-sm">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-muted-foreground hover:text-honey transition-colors text-sm">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link to="/envios" className="text-muted-foreground hover:text-honey transition-colors text-sm">
                  Envíos y Devoluciones
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-serif font-medium text-base mb-4">Contacto</h3>
            <address className="not-italic text-sm text-muted-foreground">
              <p>Camino de las Abejas, 24</p>
              <p>28023 Madrid, España</p>
              <p className="mt-2">Teléfono: +34 91 123 45 67</p>
              <p>Email: info@mieldecastano.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 text-sm text-muted-foreground text-center">
          <p>&copy; {currentYear} Miel de Castaño. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
