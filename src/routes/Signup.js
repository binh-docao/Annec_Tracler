import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import GuestHeader from '../components/GuestHeader';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const navigate = useNavigate();

  function validateForm() {
    return (
      username.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== ""
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();
  
    const userData = { username, email, password };
  
    try {
      const response = await fetch('http://localhost:4000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(userData),
      });
  
      const data = await response.json();
      if (response.ok) {
        setResponseMessage(data.message);

      } else {
        setResponseMessage(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('An error occurred during signup.');
    }
  }

  return (
    <div>
      <GuestHeader />
      <h4 className="text-center mt-4">Create an Account</h4>
      <div className="d-flex justify-content-center mt-5">
        <Form onSubmit={handleSubmit}>
          <div className="mb-3">
            <Form.Group size="lg" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="mb-3">
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </div>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className="mt-5 d-flex justify-content-center">
            <Button block size="lg" type="submit" disabled={!validateForm()}>
              Sign Up
            </Button>
          </div>
        </Form>
        <div className="mt-3 text-center">{responseMessage}</div>
      </div>
    </div>
  );
}

export default Signup;
