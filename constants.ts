
import { Product, Sauce, Review } from './types';

export const WHATSAPP_NUMBER = '595986420754';
export const PHONE_NUMBER = '+595986420754';

export const PRODUCTS: Product[] = [
  {
    id: 'espiedo',
    name: 'Pollo al Espiedo Tradicional',
    subtitle: 'El Rey de los Domingos',
    description: 'Sometido a 3 horas de cocción lenta en su propio jugo. Piel dorada, carne que se deshace y un aroma que enamora a toda la cuadra.',
    price: 50000,
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&q=80&w=800',
    availability: 'Exclusivo: Sólo Domingos',
    tag: 'EL MÁS VENDIDO',
    features: [
      'Cocción 100% natural',
      'Incluye Sopa Paraguaya o Chipa Guasu',
      'Sin conservantes ni aditivos',
      'Ideal para compartir en familia'
    ]
  },
  {
    id: 'crispy',
    name: 'Pollo Crispy Ultra-Crujiente',
    subtitle: 'La Adicción del Fin de Semana',
    description: 'Doble empanizado secreto estilo PolloGUA. Por fuera un "crunch" que se escucha a metros, por dentro la jugosidad que mereces.',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800',
    availability: 'Viernes a Domingo',
    tag: 'RECOMENDADO',
    features: [
      'Empanizado especiado secreto',
      'Incluye Papas Fritas Gold Premium',
      'Siempre fresco, nunca congelado',
      'Perfecto para maratón de películas'
    ]
  }
];

export const SAUCES: Sauce[] = [
  { name: 'Ketchup Premium', price: 5000, emoji: '🍅', description: 'Dulce y equilibrado' },
  { name: 'Barbecue Smoky', price: 5000, emoji: '🔥', description: 'Toque ahumado artesanal' },
  { name: 'Salsa Golf Gua', price: 5000, emoji: '🏌️', description: 'La favorita local' },
  { name: 'Mostaza Miel', price: 5000, emoji: '🟡', description: 'Suave y adictiva' }
];

export const REVIEWS: Review[] = [
  { name: 'Ricardo G.', text: 'El pollo al espiedo es de otro planeta. La piel es crocante y la carne súper jugosa. ¡Lo pedimos todos los domingos!', rating: 5, location: 'Asunción' },
  { name: 'Maria Jose L.', text: 'Las papas del combo crispy son las mejores que probé. Llegan calientes y bien crocantes.', rating: 5, location: 'Fernando de la Mora' },
  { name: 'Enrique M.', text: 'Excelente atención por WhatsApp. Rápido, amable y el pollo riquísimo. Recomendado 100%.', rating: 5, location: 'Luque' }
];
