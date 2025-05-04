import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <h1 className="hero-title">
              Dale una segunda vida a tu ropa
            </h1>
            <p className="hero-subtitle">
              "Moda circular con historias por contar"
            </p>
            <Button 
              as={Link} 
              to="/gallery" 
              variant="primary" 
              size="lg"
              className="hero-button"
            >
              Ver publicaciones
            </Button>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="/images/hero-image.jpg"
              alt="Ropa de segunda mano"
              className="hero-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection; 