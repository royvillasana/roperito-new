import { Container, Row, Col, Card, Button, Nav, Tab } from 'react-bootstrap';
import { FaUser, FaStar } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductContext';

const Profile = () => {
  const { user } = useAuth();
  const { products, favorites } = useProducts();

  // Simulamos productos del usuario
  const userProducts = products.slice(0, 2);

  return (
    <Container className="py-5">
      <Row>
        <Col lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <div className="text-center mb-4">
                <div className="rounded-circle bg-light p-3 d-inline-block mb-3">
                  <FaUser size={40} className="text-primary" />
                </div>
                <h3>{user?.name || 'Usuario'}</h3>
                <p className="text-muted mb-2">{user?.email}</p>
                <div className="d-flex align-items-center justify-content-center">
                  <FaStar className="text-warning me-1" />
                  <span>4.8 (23 calificaciones)</span>
                </div>
              </div>
              <Button variant="outline-primary" className="w-100">
                Editar perfil
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={8}>
          <Tab.Container defaultActiveKey="publications">
            <Card>
              <Card.Header>
                <Nav variant="tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="publications">
                      Mis publicaciones
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="favorites">
                      Mis favoritos
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Tab.Content>
                  <Tab.Pane eventKey="publications">
                    <Row xs={1} md={2} className="g-4">
                      {userProducts.map(product => (
                        <Col key={product.id}>
                          <ProductCard product={product} />
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="favorites">
                    <Row xs={1} md={2} className="g-4">
                      {favorites.map(product => (
                        <Col key={product.id}>
                          <ProductCard product={product} />
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Card.Body>
            </Card>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile; 