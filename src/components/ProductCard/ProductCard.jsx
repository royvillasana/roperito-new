import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash, FaStar } from "react-icons/fa";
import { defaultImages } from "../../config/images";
import Desplegable from "../Desplegable/Desplegable";
import FavoriteButton from "../CustomButton/FavoriteButton/FavoriteButton";
import CustomButton from "../CustomButton/CustomButton";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import CustomModal from "../CustomModal/CustomModal";
import "./ProductCard.css";

// ... rest of the existing code ... 