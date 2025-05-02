import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light" style={{ height: '250px', display: 'flex', flexDirection: 'column' }}>
      <Container className="h-100 d-flex flex-column">
        {/* Sección principal del footer */}
        <Row className="p-4 mt-4 align-items-center flex-column flex-lg-row text-center text-lg-start gap-4 gap-lg-0">
          <Col xs={12} lg="auto" className="mb-3 mb-lg-0">
            <Link to="/" className="text-decoration-none text-light d-inline-flex align-items-center">
              <div className="logo-container me-2">
                <img
                  src="/logo.PNG"
                  alt="Roperito"
                  className="logo-image"
                />
              </div>
              <span className="h5 mb-0">Roperito</span>
            </Link>
          </Col>
          
          <Col xs={12} lg className="mb-3 mb-lg-0">
            <div className="d-flex flex-column flex-lg-row justify-content-center gap-4">
              <Link to="/gallery" className="text-decoration-none text-light">
                Explorar publicaciones
              </Link>
              <Link to="/how-it-works" className="text-decoration-none text-light">
                ¿Cómo funciona?
              </Link>
            </div>
          </Col>

          <Col xs={12} lg="auto">
            <div className="d-flex align-items-center justify-content-center gap-3">
              <span className="text-light">Síguenos</span>
              <div className="social-icons d-flex gap-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light">
                  <FaFacebook size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
                  <FaInstagram size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light">
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Espacio flexible para empujar el contenido hacia abajo */}
        <div className="flex-grow-1"></div>

        {/* Sección inferior del footer */}
        <div className="mt-auto">
          <Row className="border-top border-secondary py-4">
            <Col className="text-center">
              <div className="d-flex justify-content-center gap-5 mb-2">
                <p className="mb-0">Dirección: Hannover 57, Ñuñoa, Chile - Email: info@roperito.com</p>
              </div>
              <p className="mb-4">
                © 2025 Roperito. Todos los derechos reservados.
              </p>
            </Col>
          </Row>
        </div>
      </Container>

      <style jsx="true">{`
        .logo-container {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: transparent;
        }
        .logo-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          mask-image: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 100 100' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='50'/%3E%3C/svg%3E");
          mask-mode: alpha;
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 100 100' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='50'/%3E%3C/svg%3E");
          -webkit-mask-mode: alpha;
        }

        @media (max-width: 991px) {
          footer {
            height: auto !important;
            min-height: 250px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer; 