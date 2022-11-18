import { useState } from "react";
import "./App.css";
import { Home, AboutUs, Product, Gallery, ContactUs } from "./components/pages";
import { Routes, Route } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/products" element={<Product/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
    </Routes>
    
  );
}

export default App;
