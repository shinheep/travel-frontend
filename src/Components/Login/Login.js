import { Container, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "@mui/material/Button";

function Login() {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={3}>
            <h1>Login</h1>
            <Form>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="4">
                  Email
                </Form.Label>
                <Col sm="12">
                  <Form.Control placeholder="Email" />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="4">
                  Password
                </Form.Label>
                <Col sm="12">
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Form.Group>
              <Button style={{backgroundColor: '#05668d'}} variant="contained" size="large">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;

