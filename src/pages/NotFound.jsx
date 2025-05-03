import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch } from 'react-icons/fa';

const NotFound = () => {
  return (
    <Container className="py-5 text-center">
      <Row className="justify-content-center">
        <Col md={8}>
          <img
            src="/images/not-found.png"
            alt="Ropa perdida"
            className="img-fluid mb-4"
            style={{ maxHeight: '300px' }}
          />
          <h1 className="display-4 mb-4 gradient-primary">¡Ups! Parece que esta prenda se perdió</h1>
          <p className="lead mb-4">
            La página que buscas no está en nuestro armario. 
            <br />
            Pero no te preocupes, tenemos muchas otras prendas esperándote.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button
              as={Link}
              to="/"
              variant="primary"
              size="lg"
              className="d-flex align-items-center gap-2"
            >
              <FaHome />
              Volver al inicio
            </Button>
            <Button
              as={Link}
              to="/gallery"
              variant="outline-primary"
              size="lg"
              className="d-flex align-items-center gap-2"
            >
              <FaSearch />
              Explorar prendas
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound; 