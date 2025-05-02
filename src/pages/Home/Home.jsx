import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import HeroSection from "../../components/HeroSection";
import ProductCard from "../../components/ProductCard";
import { useProducts } from "../../context/ProductContext";
import { useState, useEffect } from "react";
import { defaultImages } from "../../config/images";

const Home = () => {
  const { products, setProducts, filters, updateFilters } = useProducts();
  const [loading, setLoading] = useState(true);

  const handleSearchChange = (e) => {
    updateFilters({ search: e.target.value });
  };

  useEffect(() => {
    if (products) {
      setLoading(false);
    }
  }, []);

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
          {products.map((product) => (
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
