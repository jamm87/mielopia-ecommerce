
export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  weight: string;
  category: string;
  details?: string[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "honey-pure-250",
    name: "Miel Pura de Castaño",
    price: 8.95,
    description: "Nuestra miel pura de castaño, extraída directamente de colmenas ubicadas en bosques de castaños centenarios. Un sabor intenso y distintivo.",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    weight: "250g",
    category: "pura",
    details: [
      "Cosecha artesanal",
      "Sin aditivos ni conservantes",
      "Alto contenido en minerales y antioxidantes",
      "Sabor intenso con ligeras notas amargas",
      "Textura cremosa natural"
    ],
    featured: true
  },
  {
    id: "honey-pure-500",
    name: "Miel Pura de Castaño",
    price: 15.95,
    description: "Formato familiar de nuestra miel pura de castaño, con todo el sabor y propiedades de esta variedad única.",
    image: "https://images.unsplash.com/photo-1557521009-3644f3694bde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    weight: "500g",
    category: "pura",
    details: [
      "Cosecha artesanal",
      "Sin aditivos ni conservantes",
      "Alto contenido en minerales y antioxidantes",
      "Sabor intenso con ligeras notas amargas",
      "Textura cremosa natural"
    ],
    featured: true
  },
  {
    id: "honey-pure-1000",
    name: "Miel Pura de Castaño",
    price: 27.95,
    description: "Nuestra presentación más grande, ideal para los amantes de la miel de castaño que desean disfrutarla durante más tiempo.",
    image: "https://images.unsplash.com/photo-1566289588261-c70f348f6291?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    weight: "1000g",
    category: "pura",
    details: [
      "Cosecha artesanal",
      "Sin aditivos ni conservantes",
      "Alto contenido en minerales y antioxidantes",
      "Sabor intenso con ligeras notas amargas",
      "Textura cremosa natural"
    ]
  },
  {
    id: "honey-organic-250",
    name: "Miel Ecológica de Castaño",
    price: 10.95,
    description: "Miel de castaño certificada ecológica, producida en entornos naturales libres de pesticidas y productos químicos.",
    image: "https://images.unsplash.com/photo-1593526411462-6fcd8a1bab31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    weight: "250g",
    category: "ecologica",
    details: [
      "Certificación ecológica oficial",
      "Producida en bosques protegidos",
      "Proceso de extracción respetuoso con las abejas",
      "Mayor contenido de enzimas naturales",
      "Sin pasteurizar para preservar todas sus propiedades"
    ],
    featured: true
  },
  {
    id: "honey-organic-500",
    name: "Miel Ecológica de Castaño",
    price: 18.95,
    description: "Formato familiar de nuestra miel ecológica de castaño, con certificación que garantiza su producción sostenible.",
    image: "https://images.unsplash.com/photo-1540788873263-5578ee19aefa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    weight: "500g",
    category: "ecologica",
    details: [
      "Certificación ecológica oficial",
      "Producida en bosques protegidos",
      "Proceso de extracción respetuoso con las abejas",
      "Mayor contenido de enzimas naturales",
      "Sin pasteurizar para preservar todas sus propiedades"
    ]
  },
  {
    id: "gift-pack-premium",
    name: "Pack Regalo Premium",
    price: 32.95,
    description: "Una elegante caja regalo con tres variedades de miel de castaño: pura, con polen y con propóleo. El regalo perfecto para los amantes de productos naturales.",
    image: "https://images.unsplash.com/photo-1575218823246-8a303c2be7c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    weight: "3x125g",
    category: "regalo",
    details: [
      "Presentación en caja de madera artesanal",
      "Incluye folleto explicativo sobre la miel de castaño",
      "Ideal como regalo gourmet",
      "Disponible con tarjeta personalizada",
      "Envío en embalaje especial para productos delicados"
    ],
    featured: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
