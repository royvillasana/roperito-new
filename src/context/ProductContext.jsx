import { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    size: '',
    minPrice: '',
    maxPrice: '',
    search: ''
  });

  const addToFavorites = (product) => {
    setFavorites(prev => [...prev, product]);
  };

  const removeFromFavorites = (productId) => {
    setFavorites(prev => prev.filter(p => p.id !== productId));
  };

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
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
        updateFilters
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}; 