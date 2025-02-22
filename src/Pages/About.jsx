
import React from "react";

const About = ({ formData }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px"}}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>About Page</h2>
      {formData ? (
        <div style={{ backgroundColor: "lightblue", padding: "24px", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",width:"300px" }}>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Password:</strong> {formData.password}</p>
        </div>
      ) : (
        <p>No data submitted yet.</p>
      )}
    </div>
  );
};

export default About;