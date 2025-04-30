import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductContext';
import { useState, useEffect } from 'react';
import { defaultImages } from '../config/images';

const Home = () => {
  const { products, setProducts, filters, updateFilters } = useProducts();
  const [loading, setLoading] = useState(true);

  // Datos de ejemplo
  const exampleProducts = [
    {
      id: 1,
      name: 'Vestido Vintage Floral',
      price: 29.99,
      image: defaultImages.products[0],
      seller: {
        rating: 4.8,
        totalRatings: 120
      }
    },
    {
      id: 2,
      name: 'Chaqueta de Cuero Clásica',
      price: 49.99,
      image: defaultImages.products[1],
      seller: {
        rating: 4.5,
        totalRatings: 85
      }
    },
    {
      id: 3,
      name: 'Camisa a Cuadros Vintage',
      price: 19.99,
      image: defaultImages.products[2],
      seller: {
        rating: 4.7,
        totalRatings: 95
      }
    },
    {
      id: 4,
      name: 'Pantalones Vaqueros Retro',
      price: 34.99,
      image: defaultImages.products[3],
      seller: {
        rating: 4.6,
        totalRatings: 75
      }
    },
    {
      id: 5,
      name: 'Blusa de Seda Vintage',
      price: 24.99,
      image: defaultImages.products[4],
      seller: {
        rating: 4.9,
        totalRatings: 110
      }
    },
    {
      id: 6,
      name: 'Abrigo de Lana Clásico',
      price: 59.99,
      image: defaultImages.products[5],
      seller: {
        rating: 4.7,
        totalRatings: 90
      }
    }
  ];

  useEffect(() => {
    setProducts(exampleProducts);
    setLoading(false);
  }, [setProducts]);

  const handleSearchChange = (e) => {
    updateFilters({ search: e.target.value });
  };

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div className="home">
      <HeroSection />
      
      <Container className="py-5">
        <h2 className="text-center mb-4">Publicaciones recientes</h2>
        
        <Row className="mb-4">
          <Col md={6} className="mx-auto">
            <InputGroup>
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
              <Form.Control
                placeholder="Buscar prendas..."
                value={filters.search}
                onChange={handleSearchChange}
              />
            </InputGroup>
          </Col>
        </Row>

        <Row xs={1} md={2} lg={3} className="g-4">
          {products.map(product => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home; 