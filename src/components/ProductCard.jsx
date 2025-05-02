import { Card, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaStar } from "react-icons/fa";
import { useProducts } from "../context/ProductContext";
import { useAuth } from "../context/AuthContext";
import { defaultImages } from "../config/images";
import CustomIconButton from "./CustomButton/CustomIconButton";
import Desplegable from "./Desplegable/Desplegable";

const ProductCard = ({ product }) => {
  const { isAuthenticated } = useAuth();

  const handleImageError = (e) => {
    e.target.src = defaultImages.fallback;
  };

  const handleEdit = () => {
    // Aquí podrías redirigir o abrir un modal
    console.log("Editar", product.id);
  };

  const handleDelete = () => {
    console.log("Eliminar", product.id);
  };

  return (
    <Card className="h-100 product-card position-relative">
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={product.image || product.mainImage || defaultImages.fallback}
          alt={product.name || product.title || "Producto"}
          style={{ height: "200px", objectFit: "cover" }}
          onError={handleImageError}
        />
        <div className="position-absolute top-0 end-0 m-2 d-flex flex-column gap-1">
          <CustomIconButton title={"Editar"} icon={<FaEdit />} />
          <Desplegable product={product} />

          <CustomIconButton
            title={"Eliminar"}
            icon={<FaTrash />}
            variant="danger"
            iconColor={"white"}
          />
        </div>
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name || product.title}</Card.Title>
        <Card.Text className="text-primary fw-bold">${product.price}</Card.Text>
        <div className="d-flex align-items-center mb-2">
          <FaStar className="text-warning me-1" />
          <span>
            {product.seller?.rating || 0} ({product.seller?.totalRatings || 0})
          </span>
        </div>
        <Button
          as={Link}
          to={`/product/${product.id}`}
          variant="outline-primary"
          className="mt-auto"
        >
          Ver detalle
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
