
import './App.css'
import ProductCard from './card/ProductCard'
import ReatYup from './card/Form'
import FormikYupForm from './Form/Formik'
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";


function App() {
  const [formData, setFormData] = useState(null);

  return (
    <>
      {/* <ProductCard/> */}
      {/* <ReatYup/> */}
      {/* <FormikYupForm/> */}
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home setFormData={setFormData} />} />
        <Route path="/about" element={<About formData={formData} />} />
      </Routes>
    </Router>
  </>
    
  )
}
export default App
