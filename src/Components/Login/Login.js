import { Container, Col, Row } from "react-bootstrap";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

function Login() {
  const [loggedUser, setLoggedUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log(event.target.value)
    const value = event.target.value;
    const name = event.target.name;
    const copy = Object.assign({}, loggedUser);
    copy[name] = value;
    setLoggedUser(copy);
  };

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={3}>
            <h1>Sign In</h1>
            <Box
              justifyContent="center"
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 2, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                className="outlined-textarea"
                label="Email"
                placeholder="Email Address"
                multiline
                onChange={handleChange}
                value={loggedUser.email}
                name="email"
              />

              <TextField
                className="outlined-password-input"
                type="password"
                label="Password"
                autoComplete="current-password"
                onChange={handleChange}
                value={loggedUser.password}
                name="password"
              />
              <div className= "buttons">
              <Button
              className="d-flex justify-content-end"
                style={{ backgroundColor: "#05668d" }}
                type="submit"
                variant="contained"
                size="large"
              >
                Sign in
              </Button>
             
              <p>OR</p>
              <Button
                style={{ backgroundColor: "#05668d" }}
                variant="contained"
                size="large"
              >
                <Link style={linkStyle} to="/signup">
                  Sign up
                </Link>
              </Button>
              </div>
            </Box>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default Login;
