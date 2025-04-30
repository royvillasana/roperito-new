import { Navbar, Nav, Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Navbar expand="lg" className="bg-white shadow-sm py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/roperito-logo.svg"
            alt="Roperito"
            height="30"
            className="me-2"
          />
          <span className="text-primary fw-bold">Roperito</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/gallery">Explorar</Nav.Link>
            <Nav.Link as={Link} to="/how-it-works">¿Cómo funciona?</Nav.Link>
            
            {isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/create-product" className="me-2">
                  Publicar
                </Nav.Link>
                <Nav.Link as={Link} to="/profile" className="d-flex align-items-center">
                  <FaUser className="me-2" />
                  Mi Perfil
                </Nav.Link>
                <Button 
                  variant="outline-primary" 
                  onClick={handleLogout}
                  className="ms-2"
                >
                  Cerrar sesión
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Iniciar sesión</Nav.Link>
                <Button 
                  as={Link} 
                  to="/register" 
                  variant="primary"
                  className="ms-2"
                >
                  Registrarse
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header; 