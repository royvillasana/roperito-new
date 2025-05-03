import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center">
        <Col md={8} lg={6}>
          <div className="mb-4" style={{ maxWidth: "100%", height: "auto" }}>
            <img
              src="/images/404.png"
              alt="404 - Página no encontrada"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
          <h1 className="mb-4">¡Ups! Página no encontrada</h1>
          <p className="lead mb-4">
            La página que estás buscando no existe o ha sido movida.
          </p>
          <Button as={Link} to="/" variant="primary" size="lg">
            Volver al inicio
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
