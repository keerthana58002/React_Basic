
import { Formik, Form, Field } from "formik";
import { TextField, Button, Box } from "@mui/material";
import * as Yup from "yup";

const FormikYupForm = () => {
  // Yup Schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(4) .max(10).required("Password is required"),
    confirmpassword: Yup.string() .oneOf([Yup.ref("password"), null], "Passwords must match").required("Confirm password is required"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", confirmpassword: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log("Form Submitted:", values)} >

      {({ handleChange, handleBlur, values, errors, touched }) => (
        <Form>
          <Box sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxWidth: 400,
              mx: "auto",
              p: 3,
              border: "1px solid #ccc",
              borderRadius: 2,
              mt:15
            }}>
          <Box sx={{display:"flex",justifyContent:"center",fontSize:20}}><b>Login Form</b></Box>
            <Field as={TextField}
              label="Name"
              name="name"
              fullWidth
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={touched.name && !!errors.name} 
              helperText={touched.name && errors.name} />

            
            <Field as={TextField}
              label="Email"
              name="email"
              type="email"
              fullWidth
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email} />

            
            <Field as={TextField}
              label="Password"
              name="password"
              type="password"
              fullWidth
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={touched.password && !!errors.password} 
              helperText={touched.password && errors.password} />

            
            <Field as={TextField}
              label="Confirm Password"
              name="confirmpassword"
              type="password"
              fullWidth
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmpassword}
              error={touched.confirmpassword && !!errors.confirmpassword} 
              helperText={touched.confirmpassword && errors.confirmpassword} />

        
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default FormikYupForm;
