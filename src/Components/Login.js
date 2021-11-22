import { Container, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "@mui/material/Button";


function Login() {
  return (
    <>
	<h1>Login</h1>
      <Container>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="5">
              <Form.Control
                plaintext
                readOnly
                defaultValue="email@example.com"
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="5">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <Button variant="outlined" size="large">Login</Button>
        </Form>
      </Container>
    </>
  );
}

export default Login;
