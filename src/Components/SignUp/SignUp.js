import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container } from "react-bootstrap";
// import React, { useState } from "react";

function SignUp() {
  // const [accountInfo, setAccountInfo] = useState({ email: "", name: "",password:"" });

  return (
    <>
      <h1>Sign Up</h1>
      <Container>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              className="outlined-textarea"
              label="Email"
              placeholder="Email"
              multiline
            />
            <TextField
              className="outlined-textarea"
              label="Full Name"
              placeholder="Full Name"
              multiline
            />
            <TextField
              className="outlined-textarea"
              label="Username"
              placeholder="Username"
              multiline
            />
            <TextField
              className="outlined-password-input"
              type="password"
              label="Password"
              autoComplete="current-password"
            />
            <Button variant="outlined" size="large">
              Sign up
            </Button>
          </div>
        </Box>
      </Container>
    </>
  );
}

export default SignUp;
