import { defaultImages } from "./images";

export const userProfile = [
  {
    id: "u123456",
    name: "Juan Pérez",
    email: "a@gmail.com",
    phone: "+34 600 123 456",
    rating: {
      average: 4.2,
      total: 85,
      distribution: {
        1: 3,
        2: 5,
        3: 12,
        4: 25,
        5: 40,
      },
    },
    products: [
      {
        id: "p001",
        title: "Camiseta Retro",
        price: 19.99,
        mainImage: defaultImages.products[0],
        status: "active",
      },
      {
        id: "p002",
        title: "Gorra Gamer",
        price: 14.5,
        mainImage: defaultImages.products[1],
        status: "inactive",
      },
    ],
    favorites: [
      {
        id: "p003",
        title: "Sudadera Pixel Art",
        price: 35.0,
        mainImage: defaultImages.products[2],
      },
      {
        id: "p004",
        title: "Taza JavaScript",
        price: 12.75,
        mainImage: defaultImages.products[3],
      },
    ],
  },
];
