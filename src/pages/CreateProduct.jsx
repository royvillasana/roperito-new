import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const CreateProduct = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Aquí colocaremos la lógica para conectar con el backend y enviar los datos del producto
    console.log(data);
    toast.success('¡Producto publicado exitosamente!');
  };

  return (
    <Container className="py-5">
      <Card className="mx-auto" style={{ maxWidth: '600px' }}>
        <Card.Body className="p-4">
          <h2 className="text-center mb-4">Crear publicación</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                {...register('title', {
                  required: 'El título es requerido',
                  minLength: {
                    value: 5,
                    message: 'El título debe tener al menos 5 caracteres'
                  }
                })}
                isInvalid={!!errors.title}
              />
              <Form.Control.Feedback type="invalid">
                {errors.title?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                {...register('description', {
                  required: 'La descripción es requerida'
                })}
                isInvalid={!!errors.description}
              />
              <Form.Control.Feedback type="invalid">
                {errors.description?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Talla</Form.Label>
                  <Form.Select
                    {...register('size', {
                      required: 'La talla es requerida'
                    })}
                    isInvalid={!!errors.size}
                  >
                    <option value="">Selecciona una talla</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.size?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Categoría</Form.Label>
                  <Form.Select
                    {...register('category', {
                      required: 'La categoría es requerida'
                    })}
                    isInvalid={!!errors.category}
                  >
                    <option value="">Selecciona una categoría</option>
                    <option value="camisetas">Camisetas</option>
                    <option value="pantalones">Pantalones</option>
                    <option value="vestidos">Vestidos</option>
                    <option value="zapatos">Zapatos</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.category?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Precio (USD)</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                min="0"
                {...register('price', {
                  required: 'El precio es requerido',
                  min: {
                    value: 0,
                    message: 'El precio debe ser mayor a 0'
                  }
                })}
                isInvalid={!!errors.price}
              />
              <Form.Control.Feedback type="invalid">
                {errors.price?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Imágenes</Form.Label>
              <Form.Control
                type="file"
                multiple
                accept="image/*"
                {...register('images', {
                  required: 'Debes subir al menos una imagen'
                })}
                isInvalid={!!errors.images}
              />
              <Form.Control.Feedback type="invalid">
                {errors.images?.message}
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                Puedes subir hasta 3 imágenes. La primera será la imagen principal.
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Publicar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CreateProduct; 