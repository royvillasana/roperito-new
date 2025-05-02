import React from "react";
import { Button } from "react-bootstrap";
import "./CustomIconButton.css";

export default function CustomIconButton({
  title,
  icon,
  variant = "light",
  iconColor = "#7c4dff",
}) {
  return (
    <Button
      variant={variant}
      className="d-flex align-items-center gap-2 custom-icon-button"
    >
      {icon && (
        <span className="icon-btn">
          {React.cloneElement(icon, { color: iconColor })}
        </span>
      )}
      {title}
    </Button>
  );
}
