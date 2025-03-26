
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useNavigate } from 'react-router-dom';
import { 
  CreditCard, 
  MapPin, 
  Package, 
  Phone, 
  User,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre es requerido" }),
  email: z.string().email({ message: "Email no válido" }),
  phone: z.string().min(9, { message: "Teléfono no válido" }),
  address: z.string().min(5, { message: "Dirección requerida" }),
  city: z.string().min(2, { message: "Ciudad requerida" }),
  postalCode: z.string().min(5, { message: "Código postal requerido" }),
  cardHolder: z.string().min(2, { message: "Nombre en tarjeta requerido" }),
});

const CheckoutForm = () => {
  const { subtotal, cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      cardHolder: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (cartItems.length === 0) {
      toast.error("Tu carrito está vacío");
      return;
    }

    try {
      // Here we would connect to Stripe API
      console.log("Processing payment with Stripe for:", values);
      console.log("Order items:", cartItems);
      console.log("Total:", subtotal);
      
      // Simulate payment processing
      toast.loading("Procesando pago...", { duration: 2000 });
      
      // Clear cart and redirect to success page
      setTimeout(() => {
        clearCart();
        toast.success("Pago completado con éxito", { duration: 2000 });
        navigate("/");
      }, 2500);
      
    } catch (error) {
      console.error("Error processing payment:", error);
      toast.error("Error al procesar el pago. Intenta de nuevo.");
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Finalizar Compra</h1>
        <p className="text-muted-foreground">Por favor, completa tus datos para finalizar la compra.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <h2 className="font-serif text-xl font-semibold flex items-center gap-2">
                <User className="h-5 w-5" /> Información Personal
              </h2>
              
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre completo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="tu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl>
                      <Input placeholder="Teléfono de contacto" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="space-y-4">
              <h2 className="font-serif text-xl font-semibold flex items-center gap-2">
                <MapPin className="h-5 w-5" /> Dirección de Envío
              </h2>
              
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dirección</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu dirección completa" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ciudad</FormLabel>
                      <FormControl>
                        <Input placeholder="Ciudad" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="postalCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Código Postal</FormLabel>
                      <FormControl>
                        <Input placeholder="Código postal" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="font-serif text-xl font-semibold flex items-center gap-2">
                <CreditCard className="h-5 w-5" /> Información de Pago
              </h2>
              
              <FormField
                control={form.control}
                name="cardHolder"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre en la tarjeta</FormLabel>
                    <FormControl>
                      <Input placeholder="Nombre como aparece en la tarjeta" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="p-4 bg-muted/50 rounded-md border border-dashed">
                <p className="text-sm text-center">
                  La información de tu tarjeta se procesará de forma segura a través de Stripe.
                </p>
              </div>
            </div>
            
            <Button type="submit" className="honey-button w-full mt-6">
              Pagar {subtotal.toFixed(2)}€
            </Button>
          </form>
        </Form>
        
        <div className="space-y-8">
          <div className="border rounded-lg p-6 space-y-4">
            <h2 className="font-serif text-xl font-semibold flex items-center gap-2">
              <Package className="h-5 w-5" /> Resumen del Pedido
            </h2>
            
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">
                      {item.quantity} ×
                    </span>
                    <span>{item.product.name}</span>
                  </div>
                  <span>{(item.product.price * item.quantity).toFixed(2)}€</span>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between font-medium">
                <span>Subtotal</span>
                <span>{subtotal.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>Envío</span>
                <span>Gratuito</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-4">
                <span>Total</span>
                <span>{subtotal.toFixed(2)}€</span>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span className="text-sm">
                ¿Tienes alguna duda? Llámanos al <span className="font-medium text-foreground">+34 912 345 678</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
