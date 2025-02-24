
import { useState } from "react";
import { createPost } from "./AxiosApi"; 


//useState:
const Home = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await createPost(formData); // Fixed function call
      console.log("Response:", response);
      alert("Form submitted successfully!");
    } 
    catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "30px" }}>Login Form</h2>

      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        border: "1px solid grey", 
        padding: "20px", 
        width: "400px", 
        margin: "auto",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "lightblue"
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
              value={formData.name}  
              onChange={handleChange} 
              style={{ 
                width: "65%", 
                padding: "8px", 
                border: "1px solid gray", 
                borderRadius: "5px"
            }} 
              required 
            />
          </div>
          
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between", 
            marginBottom: "15px"
          }}>
            <label style={{ fontWeight: "bold", width: "30%" }}>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}  
              onChange={handleChange} 
              style={{ 
                width: "65%", 
                padding: "8px", 
                border: "1px solid gray", 
                borderRadius: "5px"
              }}  
              required 
            />
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
              value={formData.password}  
              onChange={handleChange} 
              style={{ 
                width: "65%", 
                padding: "8px", 
                border: "1px solid gray", 
                borderRadius: "5px"
              }} 
              required 
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
            <button type="submit" style={{ 
              backgroundColor: "blue", 
              color: "white",
              padding: "11px", 
              borderRadius: "6px", 
              cursor: "pointer", 
              width: "20%" 
            }}>
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Home;
