import { Col, Row, Container } from "react-bootstrap";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Paper } from "@mui/material";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Login.css";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

function Login() {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    username: "",
  });

  const [loggedUser, setloggedUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    // console.log(event.target.value)
    const { value, name } = event.target;
    const copy = Object.assign({}, loggedUser);
    copy[name] = value;
    setloggedUser(copy);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setloggedUser({ email: "", password: "" });
  };

  return (
    <>
      <Container component="main">
        <Row className="justify-content-md-center">
          <Col sm={6}>
            <Paper
              className="w-responsive text-center mx-auto p-5 mt-2"
              elevation={3}
            >
              <Row className="justify-content-md-center">
                <Col sm={12}>
                  <Typography fontFamily="'Abril Fatface', cursive">
                    <h2>Sign in to Travelgram</h2>
                  </Typography>

                  <Form onSubmit={handleSubmit}>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label column sm="4" md="12"></Form.Label>
                      <Col sm="12">
                        <TextField
                          fullWidth
                          name="email"
                          type="email"
                          onChange={handleChange}
                          value={loggedUser.email}
                          label="Email"
                          required
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextPassword"
                    >
                      <Col sm="12">
                        <TextField
                          fullWidth
                          name="password"
                          type="password"
                          value={loggedUser.password}
                          onChange={handleChange}
                          label="Password"
                          required
                        />
                      </Col>
                    </Form.Group>
                    <Button
                      style={{ backgroundColor: "#1A76D2" }}
                      variant="contained"
                      size="large"
                      type="submit"
                    >
                      Sign In
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Paper>

            <Paper
              className="w-responsive text-center mx-auto p-3 mt-2"
              elevation={3}
            >
              <p>New to Travelgram?</p>

              <Link style={linkStyle} to="/signup">
                <Button
                  style={{ backgroundColor: "#1A76D2" }}
                  variant="contained"
                  size="large"
                >
                  <Link style={linkStyle} to="/signup">
                    Create an Account
                  </Link>
                </Button>
              </Link>
            </Paper>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
