import Button from "@mui/material/Button";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { Form } from "react-bootstrap";
import { TextField } from "@mui/material";
import "../Login/Login.css";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

function SignUp() {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    username: "",
  });

  const handleChange = (event) => {
    // console.log(event)
    const value = event.target.value;
    const name = event.target.name;
    const copy = Object.assign({}, user);
    copy[name] = value;
    setUser(copy);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User data submitted!");
    fetch("http://localhost:8080/users/", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) =>
        setUser({ email: "", name: "", password: "", username: "" })
      );
  };

  return (
    <>
      <Container component="main">
        <Row className="justify-content-md-center">
          <Col sm={6}>
            <Paper
              className="w-responsive text-center mx-auto p-3 mt-2"
              elevation={3}
            >
              <Col sm={12}>
                <Typography fontFamily="'Abril Fatface', cursive">
                  <h2>Create an Account</h2>
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
                        required
                        onChange={handleChange}
                        value={user.email}
                        name="email"
                        label="Email Address"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextEmail"
                  >
                    <Col sm="12">
                      <TextField
                        required
                        fullWidth
                        onChange={handleChange}
                        value={user.name}
                        name="name"
                        label="Full Name"
                      />
                    </Col>
                  </Form.Group>

                  <Col sm="12">
                    <TextField
                      required
                      fullWidth
                      onChange={handleChange}
                      value={user.username}
                      name="username"
                      label="Username"
                    />
                  </Col>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextPassword"
                  >
                    <Form.Label column sm="12"></Form.Label>
                    <Col sm="12">
                      <TextField
                        required
                        fullWidth
                        onChange={handleChange}
                        value={user.password}
                        name="password"
                        type="password"
                        label="Password"
                      />
                    </Col>
                  </Form.Group>
                  <Button
                    style={{ backgroundColor: "#1A76D2" }}
                    variant="contained"
                    size="large"
                    type="submit"
                  >
                    Create Account
                  </Button>
                </Form>
              </Col>
            </Paper>
            <Paper
              className="w-responsive text-center mx-auto p-3 mt-2"
              elevation={3}
            >
              <p>Already have an account?</p>
              <Link style={linkStyle} to="/signup">
                <Button
                  style={{ backgroundColor: "#1A76D2" }}
                  variant="contained"
                  size="large"
                >
                  <Link style={linkStyle} to="/login">
                    Sign In
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

export default SignUp;
