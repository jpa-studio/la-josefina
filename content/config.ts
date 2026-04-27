export const siteConfig = {
  name: "Chivitería La Josefina",
  shortName: "La Josefina",
  tagline: "El mejor chivito de Colonia",
  city: "Colonia del Sacramento, Uruguay",
  logo: "/logo.webp",
  phone: "091 241 129",
  phoneHref: "tel:+59891241129",
  instagram: "https://www.instagram.com/chiviteria_lajosefina",
  instagramHandle: "@chiviteria_lajosefina",
  pedidosYa:
    "https://www.pedidosya.com.uy/restaurantes/colonia-del-sacramento/chiviteria-la-josefina-menu",
  nav: [
    { label: "Menú", href: "#menu" },
    { label: "Locales", href: "#locales" },
    { label: "Contacto", href: "#contacto" },
  ],
} as const;

export type Branch = {
  id: string;
  name: string;
  address: string;
  hours: string;
  phone: string;
  phoneHref: string;
  image?: string;
  imageAlt?: string;
};

export const branches: Branch[] = [
  {
    id: "ciudad-vieja",
    name: "Local Ciudad Vieja",
    address: "Manuel Lobo 350, Colonia del Sacramento",
    hours: "Lun–Dom 11:00–16:30",
    phone: "091 241 129",
    phoneHref: "tel:+59891241129",
    image: "/images/local/ciudad-vieja.jpg",
    imageAlt: "Fachada del Local Ciudad Vieja de Chivitería La Josefina",
  },
  {
    id: "yatching",
    name: "Local Yatching",
    address: "Calle Santa Rita, Colonia del Sacramento",
    hours: "Lun–Dom 11:00–00:00",
    phone: "091 241 129",
    phoneHref: "tel:+59891241129",
    image: "/images/local/ambiente.jpg",
    imageAlt: "Ambiente del Local Yatching de Chivitería La Josefina",
  },
];
