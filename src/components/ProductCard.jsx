import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import { useProducts } from '../context/ProductContext';
import { useAuth } from '../context/AuthContext';
import { defaultImages } from '../config/images';

const ProductCard = ({ product }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useProducts();
  const { isAuthenticated } = useAuth();
  
  const isFavorite = favorites.some(fav => fav.id === product.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      return; // Podríamos mostrar un toast aquí indicando que debe iniciar sesión
    }
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const handleImageError = (e) => {
    e.target.src = defaultImages.fallback;
  };

  return (
    <Card className="h-100 product-card">
      <div className="position-relative">
        <Card.Img 
          variant="top" 
          src={product.image || product.mainImage || defaultImages.fallback} 
          alt={product.name || product.title || 'Producto'}
          style={{ height: '200px', objectFit: 'cover' }}
          onError={handleImageError}
        />
        <Button
          variant="link"
          className="position-absolute top-0 end-0 m-2 text-danger bg-light rounded-circle p-2"
          onClick={handleFavoriteClick}
        >
          {isFavorite ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
        </Button>
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name || product.title}</Card.Title>
        <Card.Text className="text-primary fw-bold">
          ${product.price}
        </Card.Text>
        <div className="d-flex align-items-center mb-2">
          <FaStar className="text-warning me-1" />
          <span>{product.seller?.rating || 0} ({product.seller?.totalRatings || 0})</span>
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