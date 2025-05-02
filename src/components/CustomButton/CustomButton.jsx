import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CustomButton({
  title,
  to = null,
  type = null,
  className = "",
}) {
  return (
    <>
      {to ? (
        <Button as={Link} to={to} variant="primary" className={className}>
          {title}
        </Button>
      ) : (
        <Button variant="primary" className={className} type={type}>
          {title}
        </Button>
      )}
    </>
  );
}
