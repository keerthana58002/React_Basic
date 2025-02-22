
import './App.css'
import ProductCard from './card/ProductCard'
import ReatYup from './card/Form'
import FormikYupForm from './Form/Formik'
<<<<<<< HEAD
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
=======
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import NotFound from './Components/NotFound';
>>>>>>> e907288f06bf85b9ca8279633101534570761371


function App() {
  const [formData, setFormData] = useState(null);

  return (
    <>
      {/* <ProductCard/> */}
      {/* <ReatYup/> */}
      {/* <FormikYupForm/> */}
<<<<<<< HEAD
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home setFormData={setFormData} />} />
        <Route path="/about" element={<About formData={formData} />} />
      </Routes>
    </Router>
=======

      <BrowserRouter>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px", background: "grey", color: "white" }}>
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXEVAMVNf_q5jtB9_Xi0o6PNwAbGx-0_glkw&s"  
        alt="Logo" 
        style={{ height: "40px",borderRadius:"50px" }} 
      />
        <ul style={{ display: "flex", listStyle: "none", gap: "30px", margin: 0 }}>
          <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
          <li><Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link></li>
          <li><Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
//       {/* <UserForm/> */}
//       {/* <Profile/> */}
//       <ThemeProviderWrapper>
//       <Container sx={{ textAlign: "center", padding: "20px",marginTop:"200px" }}>
//         <Typography variant="h4">Light/Dark Mode Toggle</Typography>
//         <ChildComponent/>
//         <ToggleButton/>
//       </Container>
//     </ThemeProviderWrapper>
  
      
>>>>>>> e907288f06bf85b9ca8279633101534570761371
  </>
    
  )
}

export default App;
