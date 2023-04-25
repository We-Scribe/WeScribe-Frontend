import { Form, Button, Col, InputGroup, Container } from 'react-bootstrap'

import '../static/Login.css'

function Register() {
    return (
        <Container>
        <h1 className="login-title">Login</h1>

        <div className="d-flex justify-content-center">
        <Form className="login-form">
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    name="username"
                />
                </InputGroup>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
        </Container>
    );
}

export default Register