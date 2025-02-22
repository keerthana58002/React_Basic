
import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px", background: "grey", color: "white" }}>
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXEVAMVNf_q5jtB9_Xi0o6PNwAbGx-0_glkw&s"  
        alt="Logo" 
        style={{ height: "40px",borderRadius:"50px" }}
      />
        
        <ul style={{ display: "flex", listStyle: "none", gap: "30px", margin: 0 }}>
          <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
          <li><Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link></li>
      </ul>
      </nav>
   
  )
}

export default Navbar;