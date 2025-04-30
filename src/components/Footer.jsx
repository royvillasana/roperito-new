import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>Roperito</h5>
            <p className="text-muted">
              Tu marketplace de ropa de segunda mano. Encuentra prendas únicas y sostenibles.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <FaTwitter size={24} />
              </a>
              <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <h5>Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-decoration-none text-light">Inicio</Link>
              </li>
              <li className="mb-2">
                <Link to="/gallery" className="text-decoration-none text-light">Galería</Link>
              </li>
              <li className="mb-2">
                <Link to="/how-it-works" className="text-decoration-none text-light">Cómo Funciona</Link>
              </li>
              <li className="mb-2">
                <Link to="/create-product" className="text-decoration-none text-light">Vender</Link>
              </li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <span className="text-muted">Email:</span> info@roperito.com
              </li>
              <li className="mb-2">
                <span className="text-muted">Teléfono:</span> +57 300 123 4567
              </li>
              <li className="mb-2">
                <span className="text-muted">Dirección:</span> Calle 123 #45-67, Bogotá
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <p className="text-muted mb-0">
              © {new Date().getFullYear()} Roperito. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 