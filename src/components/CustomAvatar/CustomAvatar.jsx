import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { FaEdit, FaUser } from "react-icons/fa";
import "./CustomAvatar.css";
import { PiPhone } from "react-icons/pi";
import CustomButton from "../CustomButton/CustomButton";
import CustomModal from "../CustomModal/CustomModal";
import CustomInput from "../CustomInput/CustomInput";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Form } from "react-bootstrap";
import { MdEmail } from "react-icons/md";

export default function CustomAvatar() {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [showModal, setShowModal] = useState(false);

  const onSubmit = (data) => {
    // Aquí irá la lógica de registro cuando conectemos con el backend
    console.log(data);
    toast.success("¡Registro exitoso!");
  };

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
          <p>{user?.phone || "+5699999999"}</p>
        </div>

        <CustomButton
          title={"Editar perfil"}
          icon={<FaEdit />}
          onClick={() => setShowModal(true)}
        />
      </div>
      <CustomModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        confirm={() => {}}
        textButtonConfirm={"Guardar cambios"}
        textHeader={"Editar perfil"}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            value={user?.name}
            label={"Nombre"}
            type={"text"}
            name={"name"}
            required={"El nombre es requerido"}
            minLength={{
              value: 3,
              message: "El nombre debe tener al menos 3 caracteres",
            }}
            register={register}
            errors={errors}
            icon={<FaUser />}
          />
          <CustomInput
            value={user?.email}
            label={"Correo electrónico"}
            type={"email"}
            name={"email"}
            required={"El email es requerido"}
            pattern={{
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email inválido",
            }}
            register={register}
            errors={errors}
            icon={<MdEmail />}
          />
          <CustomInput
            value={user?.phone}
            label={"Telefono"}
            type={"phone"}
            name={"phone"}
            required={"El número de telefono es requerido"}
            register={register}
            errors={errors}
            icon={<PiPhone />}
          />
        </Form>
      </CustomModal>
    </div>
  );
}
