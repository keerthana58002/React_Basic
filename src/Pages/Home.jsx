
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setFormData }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(form);
    navigate("/about");
  };

return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "30px" }}>Login Form</h2>

      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        border: "1px solid lightgrey", 
        padding: "20px", 
        width: "400px", 
        margin: "auto",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor:"lightblue"
      }}>
        
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between", 
            marginBottom: "15px"
          }}>
            <label style={{ fontWeight: "bold", width: "30%" }}>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              style={{ 
                width: "65%", 
                padding: "8px", 
                border: "1px solid gray", 
                borderRadius: "5px"
              }} 
              required />
          </div>
          
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between", 
            marginBottom: "15px"}}>

            <label style={{ fontWeight: "bold", width: "30%" }}>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={form.email} 
              onChange={handleChange} 
              style={{ 
                width: "65%", 
                padding: "8px", 
                border: "1px solid gray", 
                borderRadius: "5px"
              }}  
              required />
          </div>
          
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between", 
            marginBottom: "15px"
          }}>
            <label style={{ fontWeight: "bold", width: "30%" }}>Password:</label>
            <input 
              type="password" 
              name="password" 
              value={form.password} 
              onChange={handleChange} 
              style={{ 
                width: "65%", 
                padding: "8px", 
                border: "1px solid gray", 
                borderRadius: "5px"
              }} 
              required />
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
            <button type="submit" style={{ 
              backgroundColor: "blue", 
              color: "white",
              padding: "11px", 
              borderRadius: "6px", 
              cursor: "pointer", 
              width: "20%" 
            }}> Submit</button>
          </div>

        </form>
      </div>
    </div>
  );
};


export default Home;