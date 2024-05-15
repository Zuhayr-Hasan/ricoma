// import { useState } from "react";
import "./App.css";
// import Nav from "./components/Navbar/Nav";
import Home from "./components/main/Mainpage";
// import FormPage from "./components/main/FormPage";
// import Slider from "./components/main/Slider";
import Product from "./components/products/Product";
// import Footer from "./components/main/Footer";
import { Routes ,Route } from "react-router-dom";

function App() {
  return <main>
    <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/products" element={<Product />} ></Route>
      </Routes>
  </main> ;
}

export default App;
