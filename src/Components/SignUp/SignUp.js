import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";

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
      
      <Container>
      
        <Row className="justify-content-md-center">
          <Col sm={3} lg={3}>
          <h1>Sign Up</h1>
            <Box
            justifyContent="center"
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
                <TextField
                  className="outlined-textarea"
                  label="Email"
                  placeholder="Email"
                  multiline
                  onChange={handleChange}
                  value={user.email}
                  name="email"
                />
                <TextField
                  className="outlined-textarea"
                  label="Full Name"
                  placeholder="Full Name"
                  multiline
                  onChange={handleChange}
                  value={user.name}
                  name="name"
                />
                <TextField
                  className="outlined-textarea"
                  label="Username"
                  placeholder="Username"
                  multiline
                  onChange={handleChange}
                  value={user.username}
                  name="username"
                />
                <TextField
                  className="outlined-password-input"
                  type="password"
                  label="Password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  value={user.password}
                  name="password"
                />
              
                  <Button style={{backgroundColor: '#05668d'}} type="submit" variant="contained" size="large">
                    Sign up
                  </Button>
               
            </Box>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SignUp;

