import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <Container className="how-it-works py-5">
      <h1 className="text-center mb-5">¿Cómo funciona Roperito?</h1>
      <Row className="g-4">
        <Col md={4}>
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Crea tu cuenta</h3>
            <p>
              Regístrate de forma rápida y sencilla para empezar a comprar o
              vender.
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Publica o explora</h3>
            <p>
              Sube tus prendas para vender o explora el catálogo para encontrar lo
              que buscas.
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Conecta y compra</h3>
            <p>
              Contacta con vendedores, acuerda los detalles y realiza tu compra de
              forma segura.
            </p>
          </div>
        </Col>
      </Row>

      <div className="benefits mt-5">
        <h2 className="text-center mb-4">Beneficios de usar Roperito</h2>
        <Row className="g-4">
          <Col md={6} lg={3}>
            <div className="benefit-card">
              <h4>Moda Sostenible</h4>
              <p>
                Contribuye al medio ambiente dando una segunda vida a la ropa de
                calidad.
              </p>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="benefit-card">
              <h4>Precios Accesibles</h4>
              <p>
                Encuentra prendas de marca a precios más bajos que en tiendas
                tradicionales.
              </p>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="benefit-card">
              <h4>Comunidad Activa</h4>
              <p>
                Forma parte de una comunidad que comparte el gusto por la moda
                circular.
              </p>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="benefit-card">
              <h4>Proceso Simple</h4>
              <p>
                Interfaz intuitiva y proceso de compra/venta diseñado para tu
                comodidad.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="faq mt-5">
        <h2 className="text-center mb-4">Preguntas Frecuentes</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="faq-item">
              <h4>¿Cómo garantizan la calidad de las prendas?</h4>
              <p>
                Los vendedores deben proporcionar fotos detalladas y descripciones
                precisas. Además, contamos con un sistema de valoraciones para
                mantener altos estándares.
              </p>
            </div>
            <div className="faq-item">
              <h4>¿Qué métodos de pago aceptan?</h4>
              <p>
                Aceptamos múltiples métodos de pago seguros, incluyendo tarjetas
                de crédito, débito y transferencias bancarias.
              </p>
            </div>
            <div className="faq-item">
              <h4>¿Cómo funciona el proceso de envío?</h4>
              <p>
                Los vendedores son responsables del envío. Recomendamos acordar
                los detalles de envío y costos directamente con el vendedor.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default HowItWorks; 