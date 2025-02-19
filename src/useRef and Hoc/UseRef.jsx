import React, { useRef, useEffect } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";


const UserForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleNext = (currentRef) => {
    if (currentRef === nameRef) {
      emailRef.current.focus();
    } else if (currentRef === emailRef) {
      passwordRef.current.focus();
    }
  };


  return (
    <Box
      sx={{
        p: 4,
        maxWidth: 400,
        mx: "auto",
        border: "1px solid black",
        mt: 15,
      }}
    >
      <Typography variant="h5" sx={{ p: 2 }}>
        Login Form
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <Box>
          <TextField inputRef={nameRef} label="Name" fullWidth />
          <Button
            sx={{ mt: 1 }}
            variant="contained"
            onClick={() => handleNext(nameRef)}
          >
            {" "}
            Next{" "}
          </Button>
        </Box>
        <Box>
          <TextField inputRef={emailRef} label="Email" fullWidth />
          <Button
            sx={{ mt: 1 }}
            variant="contained"
            onClick={() => handleNext(emailRef)}
          >
            {" "}
            Next{" "}
          </Button>
        </Box>
        <Box>
          <TextField
            inputRef={passwordRef}
            label="Password"
            type="password"
            fullWidth
          />
        </Box>
      </Box>
    </Box>
  );
};

export default UserForm;
