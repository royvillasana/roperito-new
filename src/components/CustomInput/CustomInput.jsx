import React from "react";
import { Form } from "react-bootstrap";
import "./CustomInput.css";

export default function CustomInput({
  label,
  name,
  placeholder = "",
  type,
  required,
  pattern = null,
  minLength = null,
  validate = null,
  register,
  errors,
  icon = null, // <- Nuevo prop
}) {
  return (
    <Form.Group className="custom-input-group">
      <Form.Label className="custom-input-label">{label}</Form.Label>
      <div
        className={`custom-input-wrapper ${errors[name] ? "has-error" : ""}`}
      >
        {icon && <span className="custom-input-icon">{icon}</span>}
        <Form.Control
          type={type}
          {...register(name, {
            required,
            pattern,
            minLength,
            validate,
          })}
          isInvalid={!!errors[name]}
          className="custom-input"
          placeholder={placeholder}
        />
      </div>
      <Form.Control.Feedback type="invalid" className="custom-feedback">
        {errors[name]?.message}
      </Form.Control.Feedback>
    </Form.Group>
  );
}
