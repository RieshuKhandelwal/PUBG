import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Register from "./components/Register";
import Aboutus from "./components/Aboutus";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <Router>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Features />
                <Story />
                <Contact />
              </>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
