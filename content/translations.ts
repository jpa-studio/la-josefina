export type Lang = 'es' | 'en';

export const t = {
  es: {
    nav: {
      menu: 'Menú',
      branches: 'Locales',
      contact: 'Contacto',
      order: 'Pedir ahora',
    },
    hero: {
      badge: 'Colonia del Sacramento, Uruguay',
      tagline: 'El mejor chivito de Colonia',
      cta_menu: 'Ver Menú',
      cta_order: 'Pedir ahora',
    },
    menu: {
      label: 'NUESTRA CARTA',
      title: 'Menú',
      description: 'Elaborado con ingredientes frescos en el corazón de Colonia.',
      bestseller: 'Más vendido',
      order_btn: 'Pedir',
    },
    gallery: {
      label: 'GALERÍA',
      title: 'Así cocinamos',
    },
    branches: {
      label: 'DÓNDE ESTAMOS',
      title: 'Nuestros locales',
      description: 'Dos sucursales en Colonia del Sacramento para disfrutar de nuestros chivitos.',
      hours: 'Horarios',
      phone: 'Teléfono',
      directions: 'Cómo llegar',
    },
    cta: {
      title: '¿Tenés hambre? Pedí ahora por PedidosYa',
      subtitle: 'Llevá el mejor chivito de Colonia a tu puerta en minutos.',
      btn: 'Pedir ahora',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      order: 'Pedí por PedidosYa',
    },
  },
  en: {
    nav: {
      menu: 'Menu',
      branches: 'Locations',
      contact: 'Contact',
      order: 'Order now',
    },
    hero: {
      badge: 'Colonia del Sacramento, Uruguay',
      tagline: 'The best chivito in Colonia',
      cta_menu: 'View Menu',
      cta_order: 'Order now',
    },
    menu: {
      label: 'OUR MENU',
      title: 'Menu',
      description: 'Made with fresh ingredients in the heart of Colonia.',
      bestseller: 'Best seller',
      order_btn: 'Order',
    },
    gallery: {
      label: 'GALLERY',
      title: 'How we cook',
    },
    branches: {
      label: 'FIND US',
      title: 'Our locations',
      description: 'Two locations in Colonia del Sacramento.',
      hours: 'Hours',
      phone: 'Phone',
      directions: 'Get directions',
    },
    cta: {
      title: 'Hungry? Order now on PedidosYa',
      subtitle: 'Get the best chivito in Colonia delivered to your door.',
      btn: 'Order now',
    },
    footer: {
      rights: 'All rights reserved.',
      order: 'Order on PedidosYa',
    },
  },
} as const;
