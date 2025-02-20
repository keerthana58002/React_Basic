
import './App.css'
import React from "react";
import { Container, Typography } from "@mui/material";
import ToggleButton from "./Context/ToggleButton";
import { ThemeProviderWrapper } from "./Context/ThemeContext";
import ChildComponent from "./Context/ChildComponent";

function App() {
  

  return (
    <>
      {/* <ProductCard/> */}
      {/* <ReatYup/> */}
      {/* <FormikYupForm/> */}
      {/* <UserForm/> */}
      {/* <Profile/> */}
      <ThemeProviderWrapper>
      <Container sx={{ textAlign: "center", padding: "20px",marginTop:"200px" }}>
        <Typography variant="h4">Light/Dark Mode Toggle</Typography>
        <ChildComponent/>
        <ToggleButton/>
      </Container>
    </ThemeProviderWrapper>
  
      
    </>
    
  )
}

export default App
