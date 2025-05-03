import {
  Container,
  Row,
  Col,
  Button,
  Badge,
  Modal,
  Carousel,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useProducts } from "../context/ProductContext";
import { useAuth } from "../context/AuthContext";
import { defaultImages } from "../config/images";
import FavoriteButton from "../components/CustomButton/FavoriteButton/FavoriteButton";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const { isAuthenticated } = useAuth();
  const [showContactModal, setShowContactModal] = useState(false);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
    setLoading(false);
  }, [id, products]);

  if (loading) {
    return <div>Cargando producto...</div>;
  }

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <Container className="py-5">
      <Link to="/" className="text-decoration-none mb-4 d-inline-block">
        ← Volver a Inicio
      </Link>

      <Row className="mt-4">
        <Col md={6} className="mb-4">
          {product.images && product.images.length > 1 && (
            <>
              <Carousel
                variant="dark"
                interval={null}
                activeIndex={activeIndex}
                onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
              >
                {product.images.map((imgUrl, index) => (
                  <Carousel.Item key={index}>
                    <div style={{ height: "500px", overflow: "hidden" }}>
                      <img
                        className="d-block w-100 rounded"
                        src={imgUrl}
                        alt={`Imagen ${index + 1}`}
                        style={{
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>

              <div className="d-flex justify-content-center mt-3 flex-wrap">
                {product.images.map((thumbUrl, index) => (
                  <img
                    key={index}
                    src={thumbUrl}
                    alt={`Miniatura ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                      borderRadius: "5px",
                      margin: "5px",
                      border:
                        activeIndex === index
                          ? "2px solid #0d6efd"
                          : "1px solid #ccc",
                      cursor: "pointer",
                      transition: "border 0.2s ease-in-out",
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </Col>

        <Col md={6}>
          <div className="d-flex justify-content-between align-items-start">
            <h1 className="mb-3">{product.name || product.title}</h1>
            <FavoriteButton product={product} />
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
              <span>
                {product.seller.rating} ({product.seller.totalRatings})
              </span>
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
          <p>
            <strong>Teléfono:</strong> {product.seller.phone}
          </p>
          <p>
            <strong>Email:</strong> {product.seller.email}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowContactModal(false)}
          >
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProductDetail;
