
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md py-3' 
        : 'bg-transparent py-5'
    }`}>
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Package className="h-8 w-8 text-honey" strokeWidth={1.5} />
          <span className={`text-xl font-serif font-semibold ${
            isScrolled 
              ? 'text-foreground' 
              : 'text-white dark:text-foreground'
          }`}>
            Miel de Castaño
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`font-medium transition-colors ${
            isScrolled 
              ? 'hover:text-honey text-foreground' 
              : 'hover:text-honey text-white dark:text-foreground'
          }`}>
            Inicio
          </Link>
          <Link to="/productos" className={`font-medium transition-colors ${
            isScrolled 
              ? 'hover:text-honey text-foreground' 
              : 'hover:text-honey text-white dark:text-foreground'
          }`}>
            Productos
          </Link>
          <Link to="/nosotros" className={`font-medium transition-colors ${
            isScrolled 
              ? 'hover:text-honey text-foreground' 
              : 'hover:text-honey text-white dark:text-foreground'
          }`}>
            Nosotros
          </Link>
          <Link to="/contacto" className={`font-medium transition-colors ${
            isScrolled 
              ? 'hover:text-honey text-foreground' 
              : 'hover:text-honey text-white dark:text-foreground'
          }`}>
            Contacto
          </Link>
          
          <Link to="/carrito" className="relative">
            <Button 
              variant="outline" 
              size="icon" 
              className={`rounded-full transition-all duration-300 hover:bg-honey/10 ${
                isScrolled 
                  ? '' 
                  : 'border-white/30 text-white hover:bg-white/10 dark:border-inherit dark:text-inherit'
              }`}
            >
              <ShoppingCart className={`h-5 w-5 ${
                isScrolled ? '' : 'text-white dark:text-inherit'
              }`} />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-honey text-white h-5 w-5 flex items-center justify-center p-0">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Link to="/carrito" className="relative mr-2">
            <Button 
              variant="outline" 
              size="icon" 
              className={`rounded-full transition-all duration-300 hover:bg-honey/10 ${
                isScrolled 
                  ? '' 
                  : 'border-white/30 text-white hover:bg-white/10 dark:border-inherit dark:text-inherit'
              }`}
            >
              <ShoppingCart className={`h-5 w-5 ${
                isScrolled ? '' : 'text-white dark:text-inherit'
              }`} />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-honey text-white h-5 w-5 flex items-center justify-center p-0">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className={`${
              isScrolled 
                ? 'text-foreground' 
                : 'text-white dark:text-foreground'
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background dark:bg-card border-b border-border"
          >
            <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
              <Link 
                to="/" 
                className="py-2 font-medium text-foreground dark:text-foreground" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/productos" 
                className="py-2 font-medium text-foreground dark:text-foreground" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Productos
              </Link>
              <Link 
                to="/nosotros" 
                className="py-2 font-medium text-foreground dark:text-foreground" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link 
                to="/contacto" 
                className="py-2 font-medium text-foreground dark:text-foreground" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
