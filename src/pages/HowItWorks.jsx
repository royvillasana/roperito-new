import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUserPlus, FaTshirt, FaComments, FaShieldAlt, FaSearch } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">¿Cómo funciona Roperito?</h1>
      <p className="text-center lead mb-5">
        Te guiamos paso a paso para que puedas <strong>vender </strong> 
         prendas usadas de una forma simple y rápida.
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
                Regístrate rápidamente con tu correo para
                comenzar a vender en Roperito, si ya estás registrado inicia sesión.
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
              <h3>2. Haz una publicación</h3>
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
                Resuelve dudas de los interesados y coordina la venta sin intermediarios. Al concretar la venta, cambia el estado de tu publicación.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <p className="text-center lead mb-5">
        Tambien puedes <strong>comprar</strong> moda circular a un precio muy conveniente.
      </p>


      <Row className="mb-5">
        <Col md={4} className="mb-4">
          <Card className="h-100 text-center p-4">
            <Card.Body>
              <div className="mb-3">
                <FaUserPlus size={40} className="text-primary" />
              </div>
              <h3>1. Accede a Roperito </h3>
              <p>
                Regístrate rápidamente con tu correo para
                comenzar, o inicia sesión si ya estás registrado.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="h-100 text-center p-4">
            <Card.Body>
              <div className="mb-3">
              <FaSearch size={40} className="text-primary" />
              </div>
              <h3>2. Descubre nuestro catálogo</h3>
              <p>
              Revisa todas nuestras publicaciones activas y selecciona tu artículo preferido.
          
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
              <h3>3. ¡Contacta al vendedor!</h3>
              <p>
              Resuelve tus dudas y cierra el trato directamente.
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
                <li className="mb-3">✓ ¡Prioriza Encuentros en Lugares Públicos!.</li>
                <li className="mb-3">✓ Revisa siempre la calificación del comprador/vendedor antes de concretar.</li>
              </ul>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HowItWorks; 