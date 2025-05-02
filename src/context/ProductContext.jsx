import { createContext, useState, useContext, useEffect } from "react";
import { defaultImages } from "../config/images";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // Datos de ejemplo
  const exampleProducts = [
    {
      id: 1,
      name: "Vestido Vintage Floral",
      price: 29.99,
      image: defaultImages.products[0],
      seller: {
        rating: 4.8,
        totalRatings: 120,
      },
    },
    {
      id: 2,
      name: "Chaqueta de Cuero Clásica",
      price: 49.99,
      image: defaultImages.products[1],
      seller: {
        rating: 4.5,
        totalRatings: 85,
      },
    },
    {
      id: 3,
      name: "Camisa a Cuadros Vintage",
      price: 19.99,
      image: defaultImages.products[2],
      seller: {
        rating: 4.7,
        totalRatings: 95,
      },
    },
    {
      id: 4,
      name: "Pantalones Vaqueros Retro",
      price: 34.99,
      image: defaultImages.products[3],
      seller: {
        rating: 4.6,
        totalRatings: 75,
      },
    },
    {
      id: 5,
      name: "Blusa de Seda Vintage",
      price: 24.99,
      image: defaultImages.products[4],
      seller: {
        rating: 4.9,
        totalRatings: 110,
      },
    },
    {
      id: 6,
      name: "Abrigo de Lana Clásico",
      price: 59.99,
      image: defaultImages.products[5],
      seller: {
        rating: 4.7,
        totalRatings: 90,
      },
    },
  ];

  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    size: "",
    minPrice: "",
    maxPrice: "",
    search: "",
  });

  useEffect(() => {
    setProducts(exampleProducts);
    // setLoading(false);
  }, [setProducts]);

  const addToFavorites = (product) => {
    setFavorites((prev) => [...prev, product]);
  };

  const removeFromFavorites = (productId) => {
    setFavorites((prev) => prev.filter((p) => p.id !== productId));
  };

  const updateFilters = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        favorites,
        addToFavorites,
        removeFromFavorites,
        filters,
        updateFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};
