import React from "react";
import { ButtonGroup, Dropdown } from "react-bootstrap";
import CustomIconButton from "../CustomButton/CustomIconButton";

export default function Desplegable({ product }) {
  const handleStatusChange = (status) => {
    console.log("Nuevo estado:", status, "para el producto", product.id);
  };

  return (
    <Dropdown as={ButtonGroup}>
      <CustomIconButton title={product.status || "Estado"} />
      <Dropdown.Toggle
        split
        variant="light"
        id="dropdown-split-basic"
        size="sm"
      />
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleStatusChange("Disponible")}>
          Disponible
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleStatusChange("Vendido")}>
          Vendido
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
