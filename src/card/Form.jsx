import { useState } from "react";
import * as Yup from "yup";
import { TextField, Button, Box } from "@mui/material";

const ReatYup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Password: "",
  });
  const [errors, setErrors] = useState({});

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    Password: Yup.string().min(4).max(10).required("Password is required"),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      console.log("Form submitted", formData);
      setErrors({});
    } catch (Error) {
      const newError = {};
      Error.inner.forEach((error) => {
        newError[error.path] = error.message;
      });
      setErrors(newError);
    }
  };

  return (
    <Box

      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        
        maxWidth: 400,
        mx: "auto",
        p: 3,
        border: "1px solid lightgrey",
        mt: 20,
        borderRadius: 2,
      }}
    >
      <Box sx={{display:"flex",justifyContent:"center",fontSize:20}}><b>Login Form</b></Box>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        fullWidth
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        fullWidth
      />
      <TextField
        label="Password"
        name="Password"
        type="Password"
        value={formData.Password}
        onChange={handleChange}
        error={!!errors.Password}
        helperText={errors.Password}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default ReatYup;
