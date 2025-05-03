import { Container, Row, Col, Form } from 'react-bootstrap';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import './Gallery.css';

const Gallery = () => {
  const { products, filters, updateFilters } = useProducts();

  const handleFilterChange = (field, value) => {
    updateFilters({ [field]: value });
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Galería de Publicaciones</h1>

      {/* Filtros */}
      <Row className="mb-4">
        <Col md={6} className="mb-3 mb-md-0">
          <SearchBar
            value={filters.search}
            onChange={e => handleFilterChange('search', e.target.value)}
          />
        </Col>
        <Col md={2} className="mb-3 mb-md-0">
          <Form.Select
            value={filters.category}
            onChange={e => handleFilterChange('category', e.target.value)}
          >
            <option value="">Prenda</option>
            <option value="camisetas">Camisetas</option>
            <option value="pantalones">Pantalones</option>
            <option value="vestidos">Vestidos</option>
            <option value="zapatos">Zapatos</option>
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Select
            value={filters.size}
            onChange={e => handleFilterChange('size', e.target.value)}
          >
            <option value="">Talla</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Select
            value={filters.price}
            onChange={e => handleFilterChange('price', e.target.value)}
          >
            <option value="">Rango de $</option>
            <option value="0-25">$0 - $25</option>
            <option value="25-50">$25 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100+">$100+</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Grid de productos */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map(product => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;