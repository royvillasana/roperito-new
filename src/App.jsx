import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ProductProvider } from "./context/ProductContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateProduct from "./pages/CreateProduct";
import Gallery from "./pages/Gallery";
import ProductDetail from "./pages/ProductDetail";
import HowItWorks from "./pages/HowItWorks";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import "./App.css";
import Profile from "./pages/Profile/Profile";
import PrivateRoute from "./config/PrivateRoute";
import MisRutas from "./routes/MisRutas";

function App() {
  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <MisRutas />
        </ProductProvider>
      </AuthProvider>
    </>
  );
}

export default App;
