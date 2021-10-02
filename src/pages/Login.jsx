import React from "react";
import styled from "styled-components";

import { AiOutlineGoogle } from "react-icons/ai";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2071&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  border-radius: 10px;
  background-color: #fcdec0;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 25%;
  margin: 10px 0;
  padding: 10px;
`;

const Agreement = styled.span`
  display: flex;
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  margin-top: 10px;
  width: 40%;
  border: none;
  margin-bottom: 10px;
  padding: 15px 20px;
  border-radius: 5px;
  background-color: #5e454b;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #634e53;
  }
`;
const GButton = styled.button`
  border: none;
  width: 40%;
  padding: 15px 20px;
  font-size: 18px;
  cursor: pointer;
  background-color: #db4a39;
  border-radius: 5px;

  &:hover {
    background-color: #ed6758;
  }
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>Login</Button>
          <Link>Forgot Password?</Link>
          <Link>New ? Create New Account</Link>
        </Form>
        <Agreement>OR</Agreement>
        <GButton>
          <AiOutlineGoogle />
        </GButton>
      </Wrapper>
    </Container>
  );
};

export default Login;
