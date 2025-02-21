
import './App.css'
import ProductCard from './card/ProductCard'
import ReatYup from './card/Form'
import FormikYupForm from './Form/Formik'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import NotFound from './Components/NotFound';


function App() {
  

  return (
    <>
      {/* <ProductCard/> */}
      {/* <ReatYup/> */}
      {/* <FormikYupForm/> */}

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
      
    </>
    
  )
}

export default App
