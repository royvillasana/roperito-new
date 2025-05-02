import { Container, Row, Col, Card, Button, Nav, Tab } from "react-bootstrap";
import { FaUser, FaStar, FaFolderMinus } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import ProductCard from "../../components/ProductCard";
import { useProducts } from "../../context/ProductContext";
import CustomAvatar from "../../components/CustomAvatar/CustomAvatar";
import "./Profile.css";
import { BiHeart, BiLogOut } from "react-icons/bi";
import { CiFolderOn } from "react-icons/ci";
import CustomButton from "../../components/CustomButton/CustomButton";
import { PiPlus } from "react-icons/pi";

const Profile = () => {
  const { user } = useAuth();
  const { products, favorites } = useProducts();

  // Simulamos productos del usuario
  const userProducts = products.slice(0, 2);
  console.log("que trae prodcut: ", products);

  return (
    <Container className="py-5 profile-contain">
      <Col lg={7} className="mb-4">
        <Card>
          <Card.Body className="d-flex flex-row justify-content-between align-items-center">
            <CustomAvatar />
            <div className="d-flex flex-column align-items-center gap-3">
              <div className="text-muted small">
                {user?.email || "test@example.com"}
              </div>
              <CustomButton title={"Cerrar Sesión"} icon={<BiLogOut />} />
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={7}>
        <Tab.Container defaultActiveKey="publications">
          <Card>
            <Card.Header>
              <Nav variant="tabs" className="justify-content-center">
                <Nav.Item>
                  <Nav.Link eventKey="publications">
                    <CiFolderOn /> Mis publicaciones
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="favorites">
                    <BiHeart /> Mis favoritos
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <div className="div-publish">
              <CustomButton title={"Crear publicación"} icon={<PiPlus />} />
            </div>

            <Card.Body>
              <Tab.Content>
                <Tab.Pane eventKey="publications">
                  <Row xs={1} md={2} className="g-4">
                    {user.products.map((product) => (
                      <Col key={product.id}>
                        <ProductCard product={product} myProducts />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="favorites">
                  <Row xs={1} md={2} className="g-4">
                    {user.favorites.map((product) => (
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
    </Container>
  );
};

export default Profile;
