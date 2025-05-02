import axios from 'axios';

const API_URL =
    import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor para agregar el token a las peticiones
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const productService = {
    // Obtener todos los productos
    getProducts: async() => {
        const response = await api.get('/products');
        return response.data;
    },

    // Buscar productos
    searchProducts: async(searchTerm) => {
        const response = await api.get(`/products/search?term=${encodeURIComponent(searchTerm)}`);
        return response.data;
    },

    // Obtener un producto por ID
    getProductById: async(id) => {
        const response = await api.get(`/products/${id}`);
        return response.data;
    },

    // Crear un nuevo producto
    createProduct: async(productData) => {
        const response = await api.post('/products', productData);
        return response.data;
    },

    // Actualizar un producto
    updateProduct: async(id, productData) => {
        const response = await api.put(`/products/${id}`, productData);
        return response.data;
    },

    // Eliminar un producto
    deleteProduct: async(id) => {
        const response = await api.delete(`/products/${id}`);
        return response.data;
    }
};

export default api;