import { Container, Row, Col, Button, Badge, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useProducts } from '../context/ProductContext';
import { useAuth } from '../context/AuthContext';
import { defaultImages } from '../config/images';

const ProductDetail = () => {
  const { id } = useParams();
  const { products, favorites, addToFavorites, removeFromFavorites } = useProducts();
  const { isAuthenticated } = useAuth();
  const [showContactModal, setShowContactModal] = useState(false);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos obtener el producto por ID
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // Datos de ejemplo si no se encuentra el producto
      setProduct({
        id: 1,
        name: 'Vestido Floral Vintage',
        title: 'Vestido Floral Vintage',
        description: 'Hermoso vestido floral vintage ideal para ocasiones especiales. Tela fresca y corte favorecedor.',
        price: 45.00,
        size: 'M',
        category: 'Vestidos',
        image: defaultImages.products[0],
        mainImage: defaultImages.products[0],
        seller: {
          name: 'Florencia G.',
          rating: 4.8,
          totalRatings: 24,
          phone: '300 123 4567',
          email: 'florencia@email.com'
        }
      });
    }
    setLoading(false);
  }, [id, products]);

  if (loading) {
    return <div>Cargando producto...</div>;
  }

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const isFavorite = favorites.some(fav => fav.id === product.id);

  const handleFavoriteClick = () => {
    if (!isAuthenticated) return;
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <Container className="py-5">
      <Link to="/" className="text-decoration-none mb-4 d-inline-block">
        ← Volver a Inicio
      </Link>

      <Row className="mt-4">
        <Col md={6} className="mb-4">
          <img
            src={product.image || product.mainImage || defaultImages.fallback}
            alt={product.name || product.title}
            className="img-fluid rounded shadow"
            style={{ maxHeight: '500px', objectFit: 'cover', width: '100%' }}
          />
        </Col>

        <Col md={6}>
          <div className="d-flex justify-content-between align-items-start">
            <h1 className="mb-3">{product.name || product.title}</h1>
            <Button
              variant="link"
              className="p-0 text-danger"
              onClick={handleFavoriteClick}
            >
              {isFavorite ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
            </Button>
          </div>

          <h2 className="text-primary mb-4">${product.price}</h2>

          <div className="mb-4">
            <Badge bg="light" text="dark" className="me-2">
              Talla: {product.size}
            </Badge>
            <Badge bg="light" text="dark">
              {product.category}
            </Badge>
          </div>

          <div className="mb-4">
            <h5>Descripción</h5>
            <p>{product.description}</p>
          </div>

          <div className="mb-4">
            <h5>Vendedor</h5>
            <p className="mb-2">{product.seller.name}</p>
            <div className="d-flex align-items-center mb-3">
              <FaStar className="text-warning me-1" />
              <span>{product.seller.rating} ({product.seller.totalRatings})</span>
            </div>
          </div>

          <Button 
            variant="primary" 
            size="lg" 
            className="w-100"
            onClick={() => setShowContactModal(true)}
          >
            Contactar al Vendedor
          </Button>
        </Col>
      </Row>

      <Modal show={showContactModal} onHide={() => setShowContactModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Información de Contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Teléfono:</strong> {product.seller.phone}</p>
          <p><strong>Email:</strong> {product.seller.email}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowContactModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProductDetail; 