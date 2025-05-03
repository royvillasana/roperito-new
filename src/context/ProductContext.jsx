import { createContext, useState, useContext, useEffect } from "react";
import { defaultImages } from "../config/images";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // Datos de ejemplo iniciales
  const exampleProducts = [
    {
      id: 1,
      name: "Vestido Vintage Floral",
      price: 29.99,
      image: defaultImages.products[0],
      category: "vestidos",
      size: "M",
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
      category: "chaquetas",
      size: "L",
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
      category: "camisetas",
      size: "S",
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
      category: "pantalones",
      size: "M",
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
      category: "camisetas",
      size: "XS",
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
      category: "chaquetas",
      size: "XL",
      seller: {
        rating: 4.7,
        totalRatings: 90,
      },
    },
  ];

  const [products] = useState(exampleProducts);
  const [searchResults, setSearchResults] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    category: "",
    size: "",
    price: "",
    search: "",
  });

  // Función para verificar si un producto está en el rango de precio seleccionado
  const isInPriceRange = (price, range) => {
    if (!range) return true;
    const [min, max] = range.split('-').map(Number);
    if (range === '100+') return price >= 100;
    return price >= min && price <= (max || Infinity);
  };

  // Función para filtrar productos
  const filterProducts = (productsToFilter) => {
    return productsToFilter.filter(product => {
      const matchesCategory = !filters.category || product.category === filters.category;
      const matchesSize = !filters.size || product.size === filters.size;
      const matchesPrice = !filters.price || isInPriceRange(product.price, filters.price);
      const matchesSearch = !filters.search || 
        product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        (product.title && product.title.toLowerCase().includes(filters.search.toLowerCase()));

      return matchesCategory && matchesSize && matchesPrice && matchesSearch;
    });
  };

  // Efecto para manejar la búsqueda y filtros
  useEffect(() => {
    const filterTimer = setTimeout(() => {
      if (filters.search || filters.category || filters.size || filters.price) {
        setLoading(true);
        const filteredResults = filterProducts(products);
        setSearchResults(filteredResults);
        setLoading(false);
      } else {
        setSearchResults(null);
      }
    }, 300); // Debounce de 300ms

    return () => clearTimeout(filterTimer);
  }, [filters, products]);

  const addToFavorites = (product) => {
    setFavorites((prev) => [...prev, product]);
  };

  const removeFromFavorites = (productId) => {
    setFavorites((prev) => prev.filter((p) => p.id !== productId));
  };

  const updateFilters = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  // Obtener los productos a mostrar (filtrados o productos de ejemplo)
  const displayProducts = searchResults || products;

  return (
    <ProductContext.Provider
      value={{
        products: displayProducts,
        loading,
        favorites,
        addToFavorites,
        removeFromFavorites,
        filters,
        updateFilters,
        isSearching: !!searchResults,
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
