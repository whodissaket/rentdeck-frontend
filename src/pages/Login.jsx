import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { login } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://i.imgur.com/U50YLC1.png") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  ${mobile({ width: "75%" })}
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
  background-color: #3647d9;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #4f5dd6;
  }

  &:disabled {
    color: blue;
    cursor: not-allowed;
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

const New = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
`;

const Error = styled.span`
  color: red;
`;

const Login = ({ location, history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const googleId = null;
    dispatch(login(username, password, googleId));
  };
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  ///Google Login starts here.....

  const googleSuccess = async (res) => {
    const fullName =
      res?.profileObj.givenName + " " + res.profileObj.familyName;

    console.log(res);
    try {
      const password = null;
      dispatch(login(fullName, password, res.profileObj.googleId));
    } catch (err) {
      console.log(err);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log("Sign-in was unsuccessful.");
  };

  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} disabled={loading}>
            Login
          </Button>
          {error && <Error>Something went wrong.</Error>}

          <New>
            New ?<Link to="/register"> Create New Account</Link>
          </New>
        </Form>
        <Agreement>OR</Agreement>

        <GoogleLogin
          clientId="1019311600503-2d91uaf545vs4hdrq2tnndnohr9g8qh7.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={googleSuccess}
          onFailure={googleFailure}
        />
      </Wrapper>
    </Container>
  );
};

export default Login;
