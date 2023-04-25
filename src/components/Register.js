import { Form, Button, Col, InputGroup, Container } from 'react-bootstrap'

import '../static/Register.css'

function Register() {
    return (
        <Container>
        <h1 className="register-title">Register</h1>

        <div className="d-flex justify-content-center">
        <Form className="register-form">
            <Form.Row>
                <Form.Group as={Col}>
                <Form.Label>First name</Form.Label>
                <Form.Control
                    type="text"
                    name="firstName"
                />
                </Form.Group>

                <Form.Group as={Col}>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                    type="text"
                    name="lastName"
                />
                </Form.Group>
            </Form.Row>

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

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
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