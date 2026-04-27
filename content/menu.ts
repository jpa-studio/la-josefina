export type MenuCategoryId =
  | "chivitos"
  | "milanesas"
  | "hamburguesas"
  | "vegano"
  | "papas"
  | "bebidas";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  bestseller: boolean;
  image?: string;
};

export type MenuCategory = {
  id: MenuCategoryId;
  name: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "chivitos",
    name: "Chivitos",
    items: [
      {
        id: "chivito-la-josefina",
        name: "Chivito La Josefina",
        description:
          "Bife de lomo, lechuga, muzzarella, tomate, 2 huevos fritos, jamón, cheddar, rúcula en pan bata con papas fritas.",
        price: 599,
        bestseller: true,
        image: "/images/dishes/chivito-josefina.jpg",
      },
      {
        id: "chivito-mediterraneo",
        name: "Chivito Mediterráneo",
        description:
          "Bife de lomo, muzzarella, tomate, lechuga, aceitunas, albahaca, ajo, en pan bata con papas fritas.",
        price: 545,
        bestseller: true,
      },
      {
        id: "chivito-hawaiano",
        name: "Chivito Hawaiano",
        description:
          "Bife de pollo, jamón, ananá, tomate, lechuga en pan bata.",
        price: 545,
        bestseller: false,
      },
      {
        id: "chivito-estandar",
        name: "Chivito Estándar",
        description:
          "Bife de lomo o pollo, huevo frito, lechuga, tomate, en pan sésamo con papas fritas.",
        price: 400,
        bestseller: true,
        image: "/images/dishes/chivito-estandar.jpg",
      },
    ],
  },
  {
    id: "milanesas",
    name: "Milanesas",
    items: [
      {
        id: "milanesa-napolitana",
        name: "Milanesa Napolitana",
        description:
          "Milanesa de res con salsa napolitana, muzzarella y jamón.",
        price: 480,
        bestseller: true,
        image: "/images/dishes/milanesa-napolitana.jpg",
      },
      {
        id: "milanesa-al-plato",
        name: "Milanesa al Plato",
        description:
          "Milanesa de res o pollo con guarnición a elección.",
        price: 420,
        bestseller: false,
      },
    ],
  },
  {
    id: "hamburguesas",
    name: "Hamburguesas",
    items: [
      {
        id: "hamburguesa-clasica",
        name: "Hamburguesa Clásica",
        description:
          "Medallón de carne, lechuga, tomate, cheddar, mayonesa en pan brioche.",
        price: 380,
        bestseller: false,
      },
      {
        id: "hamburguesa-doble",
        name: "Hamburguesa Doble",
        description:
          "Doble medallón, doble cheddar, panceta, pepinillos.",
        price: 480,
        bestseller: true,
        image: "/images/dishes/hamburguesa-doble.jpg",
      },
    ],
  },
  {
    id: "vegano",
    name: "Menú vegano",
    items: [
      {
        id: "chivito-vegano",
        name: "Chivito Vegano",
        description:
          "Medallón de garbanzo, lechuga, tomate, muzzarella vegana, en pan bata.",
        price: 420,
        bestseller: false,
      },
      {
        id: "hamburguesa-vegana",
        name: "Hamburguesa Vegana",
        description:
          "Medallón de lentejas, aguacate, tomate, rúcula en pan integral.",
        price: 380,
        bestseller: false,
      },
    ],
  },
  {
    id: "papas",
    name: "Papas fritas",
    items: [
      {
        id: "papas-simples",
        name: "Papas Fritas Simples",
        description: "Porción generosa de papas fritas crocantes.",
        price: 180,
        bestseller: false,
      },
      {
        id: "papas-cheddar-panceta",
        name: "Papas con Cheddar y Panceta",
        description: "Papas fritas con salsa cheddar y panceta crocante.",
        price: 280,
        bestseller: true,
      },
    ],
  },
  {
    id: "bebidas",
    name: "Bebidas",
    items: [
      {
        id: "coca-cola",
        name: "Coca-Cola",
        description: "Lata 354ml.",
        price: 120,
        bestseller: false,
      },
      {
        id: "agua-mineral",
        name: "Agua Mineral",
        description: "500ml.",
        price: 90,
        bestseller: false,
      },
      {
        id: "cerveza-pilsen",
        name: "Cerveza Pilsen",
        description: "Lata 473ml.",
        price: 180,
        bestseller: false,
      },
    ],
  },
];

export function formatPrice(price: number): string {
  return `$${price.toLocaleString("es-UY")}`;
}
