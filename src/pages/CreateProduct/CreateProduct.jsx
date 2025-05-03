import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import CustomButton from "../../components/CustomButton/CustomButton";
import "./CreateProduct.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

const CreateProduct = () => {
  const location = useLocation();
  const productToEdit = location.state?.product || null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: productToEdit || {},
  });

  const [selectedImages, setSelectedImages] = useState(
    productToEdit?.images?.map((url) => ({ url })) || []
  );

  console.log(selectedImages.length);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const previews = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setSelectedImages((prev) => [...prev, ...previews]);
  };

  const handleRemoveImage = (indexToRemove) => {
    setSelectedImages((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  const onSubmit = (data) => {
    if (productToEdit) {
      console.log("Editando producto:", data);
      toast.success("¡Producto editado exitosamente!");
      // Aquí deberías hacer una llamada PUT al backend con productToEdit.id
    } else {
      console.log("Creando producto:", data);
      toast.success("¡Producto creado exitosamente!");
      // Aquí deberías hacer una llamada POST al backend
    }
  };

  return (
    <div className="create-product">
      <Container className="py-5">
        <Card className="mx-auto" style={{ maxWidth: "600px" }}>
          <Card.Body className="p-4">
            <h2 className="text-center mb-4 section-title">
              {productToEdit ? "Editar publicación" : "Crear publicación"}
            </h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  {...register("title", {
                    required: "El título es requerido",
                    minLength: {
                      value: 5,
                      message: "El título debe tener al menos 5 caracteres",
                    },
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
                  {...register("description", {
                    required: "La descripción es requerida",
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
                      {...register("size", {
                        required: "La talla es requerida",
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
                      {...register("category", {
                        required: "La categoría es requerida",
                      })}
                      isInvalid={!!errors.category}
                    >
                      <option value="">Selecciona una categoría</option>
                      <option value="camisetas">Camisetas</option>
                      <option value="pantalones">Pantalones</option>
                      <option value="vestidos">Vestidos</option>
                      <option value="zapatos">Zapatos</option>
                      <option value="poleras">Poleras</option>
                      <option value="chaquetas">Chaquetas</option>
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
                  {...register("price", {
                    required: "El precio es requerido",
                    min: {
                      value: 0,
                      message: "El precio debe ser mayor a 0",
                    },
                  })}
                  isInvalid={!!errors.price}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.price?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4">
                {selectedImages.length < 3 && (
                  <>
                    <Form.Label>Imágenes</Form.Label>
                    <Form.Control
                      type="file"
                      multiple
                      accept="image/*"
                      {...register(
                        "images",
                        !productToEdit && {
                          required: "Debes subir al menos una imagen",
                        }
                      )}
                      onChange={(e) => {
                        handleImageChange(e);
                      }}
                      isInvalid={!!errors.images}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.images?.message}
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                      Puedes subir hasta 3 imágenes. La primera será la imagen
                      principal.
                    </Form.Text>
                  </>
                )}

                {selectedImages.length > 0 && (
                  <div className="d-flex gap-3 flex-wrap mt-3">
                    {selectedImages.map((img, index) => (
                      <div
                        key={index}
                        style={{
                          position: "relative",
                          width: "100px",
                          height: "100px",
                          borderRadius: "8px",
                          overflow: "hidden",
                          border: "1px solid #ccc",
                        }}
                      >
                        <img
                          src={img.url}
                          alt={`preview-${index}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <div
                          onClick={() => handleRemoveImage(index)}
                          style={{
                            position: "absolute",
                            top: "4px",
                            right: "4px",
                            background: "rgba(0, 0, 0, 0.6)",
                            color: "#fff",
                            borderRadius: "50%",
                            width: "24px",
                            height: "24px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            transition: "background 0.2s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              "rgba(0, 0, 0, 0.8)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background =
                              "rgba(0, 0, 0, 0.6)";
                          }}
                        >
                          <CgClose />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Form.Group>
              <div className="d-grid">
                <CustomButton
                  title="Publicar"
                  type="submit"
                  variant="primary"
                  style="py-2 fw-semibold"
                />
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default CreateProduct;
