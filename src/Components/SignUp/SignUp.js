import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Paper } from "@mui/material";
import { Form } from "react-bootstrap";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

function SignUp() {

  



  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    username:"",
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
        setUser({ email: "", name: "", password: "", username: ""})
      );
  };
  


  return (
    <>
      
      <Container component="main">
        <Paper
          className="w-responsive text-center mx-auto p-3 mt-2"
          elevation={3}
        >
          <Row className="justify-content-md-center">
            <Col sm={6}>
              <h1>Sign Up</h1>
              <Form
                onSubmit={handleSubmit}
              >
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="4" md="12"></Form.Label>
                  <Col sm="12">
                    <Form.Control 
                    onChange={handleChange}
                    value={user.email}
                    name="email"
                    placeholder="Email Address" />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Col sm="12">
                    <Form.Control 
                    onChange={handleChange}
                    value={user.name}
                    name="name"
                    placeholder="Full Name" />
                  </Col>
                </Form.Group>

                <Col sm="12">
                  <Form.Control 
                  onChange={handleChange}
                  value={user.username}
                  name="username"
                  placeholder="Username" />
                </Col>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="12"></Form.Label>
                  <Col sm="12">
                    <Form.Control 
                    onChange={handleChange}
                    value={user.password}
                    name="password"
                    type="password" 
                    placeholder="Password" />
                  </Col>
                </Form.Group>
                <Button
                  style={{ backgroundColor: "#05668d" }}
                  variant="contained"
                  size="large"
                  type="submit"
                >
                  Sign Up
                </Button>
              </Form>
              <br />
              <p>OR</p>
              <Button
                style={{ backgroundColor: "#05668d" }}
                variant="contained"
                size="large"
              >
                <Link style={linkStyle} to="/login">
                  Sign In
                </Link>
              </Button>
            </Col>
          </Row>
        </Paper>
      </Container>
    </>
  );
}

export default SignUp;

