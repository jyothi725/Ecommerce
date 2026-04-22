import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [ toast, setToast ] = useState("");
  const [ theme, setTheme ] = useState("light");

    function showToast(message) {
        setToast(message);
        setTimeout(() => setToast(""), 2000);
    }

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const [search, setSearch] = useState("");

  function addToCart(product) {
      const existingItem = cart.find((item) => Number(item.id) === Number(product.id));
        
      if(existingItem) {
          const updatedCart = cart.map((item) => 
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          setCart(updatedCart);
      }  else {
          setCart([...cart, { ...product, quantity: 1}]);
      }
      setToast("Item added to cart🛒");
  }

  

  return (
    <>
      <ScrollToTop />
      <Navbar cartCount={cart.length} setSearch={setSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Products addToCart={addToCart} search={search} showToast={showToast}/>
            </>
          }
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} showToast={showToast}/>}
        />
        <Route
          path="/product/:id"
          element={<ProductDetails addToCart={addToCart} showToast={showToast}/>}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
          {toast && <div className="toast">{toast}</div>}
    </>
  );
}

export default App;