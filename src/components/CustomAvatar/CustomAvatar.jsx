import React from "react";
import { useAuth } from "../../context/AuthContext";
import { FaEdit, FaStar, FaUser } from "react-icons/fa";
import "./CustomAvatar.css";
import { Button } from "react-bootstrap";
import { PiPhone } from "react-icons/pi";
import CustomIconButton from "../CustomButton/CustomIconButton";

export default function CustomAvatar() {
  const { user } = useAuth();
  return (
    <div className="avatar-contain">
      <div className="info-user">
        <div className="rounded-circle bg-light p-3 d-inline-block mb-3">
          <FaUser size={25} className="text-primary" />
        </div>
        <div>
          <h3>{user?.name || "Juan Perez"}</h3>
          <p>{user?.address || "direccion calle numero 0321"}</p>
        </div>
      </div>

      <div className="fono">
        <div className="d-flex gap-2 align-items-center">
          <PiPhone />
          <p>{user?.fono || "+5699999999"}</p>
        </div>

        <CustomIconButton title={"Editar perfil"} icon={<FaEdit />} />
      </div>
    </div>
  );
}
