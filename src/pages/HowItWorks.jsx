import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUserPlus, FaTshirt, FaComments, FaShieldAlt } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">¿Cómo funciona Roperito?</h1>
      <p className="text-center lead mb-5">
        Te guiamos paso a paso para que puedas vender y comprar
        moda circular de una forma simple y segura.
      </p>

      <Row className="mb-5">
        <Col md={4} className="mb-4">
          <Card className="h-100 text-center p-4">
            <Card.Body>
              <div className="mb-3">
                <FaUserPlus size={40} className="text-primary" />
              </div>
              <h3>1. Crea una cuenta</h3>
              <p>
                Regístrate rápidamente con tu correo o red social favorita para
                comenzar a usar Roperito.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="h-100 text-center p-4">
            <Card.Body>
              <div className="mb-3">
                <FaTshirt size={40} className="text-primary" />
              </div>
              <h3>2. Sube una prenda</h3>
              <p>
                Toma una buena foto, agrega detalles y elige el precio de tu
                prenda.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="h-100 text-center p-4">
            <Card.Body>
              <div className="mb-3">
                <FaComments size={40} className="text-primary" />
              </div>
              <h3>3. Interactúa con compradores</h3>
              <p>
                Responde mensajes y coordina la venta sin salir de la plataforma.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="bg-light border-0 p-4 mt-5">
        <Card.Body>
          <h2 className="text-center mb-4">
            <FaShieldAlt className="me-2" />
            Consejos de seguridad y uso responsable
          </h2>
          <Row>
            <Col md={6}>
              <ul className="list-unstyled">
                <li className="mb-3">✓ Usa fotos claras y que tu prenda esté limpia.</li>
                <li className="mb-3">✓ Elige precios justos según el estado de la ropa.</li>
                <li className="mb-3">✓ Responde con respeto y claridad a los interesados.</li>
              </ul>
            </Col>
            <Col md={6}>
              <ul className="list-unstyled">
                <li className="mb-3">✓ Nunca compartas información personal sensible.</li>
                <li className="mb-3">✓ Usa solo el chat interno.</li>
                <li className="mb-3">✓ Revisa siempre el perfil del comprador antes de concretar.</li>
              </ul>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HowItWorks; 