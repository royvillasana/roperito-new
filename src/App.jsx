import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProductProvider } from "./context/ProductContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import CreateProduct from "./pages/CreateProduct";
import Gallery from "./pages/Gallery";
import ProductDetail from "./pages/ProductDetail";
import HowItWorks from "./pages/HowItWorks";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import "./App.css";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <AuthProvider>
        <ProductProvider>
          <div className="app min-vh-100 min-vw-100 d-flex flex-column">
            <Header />
            <main className="flex-grow-1">
              <div className="container-fluid px-0 general-container">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/create-product" element={<CreateProduct />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/how-it-works" element={<HowItWorks />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </main>
            <Footer />
            <ToastContainer position="bottom-right" />
          </div>
        </ProductProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
