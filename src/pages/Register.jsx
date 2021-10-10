//Redux code daal dena uske baad hi chalega otherwise not defined aaega

import styled from "styled-components";
import { AiOutlineGoogle } from "react-icons/ai";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from '../actions/userActions'


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
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  display: flex;
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  background-color: #3647d9;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #4f5dd6;
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

const Error = styled.span`
  color: red;
`;

const Register = ({ location, history }) => {
  //states
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  //redux part
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister

  //const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(username, email, password));
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        {message && <Error variant="danger">{message}</Error>}
        {error && <Error variant="danger">{error}</Error>}

        <Form onSubmit={submitHandler}>
          <Input
            id="name"
            placeholder="name"
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            id="username"
            placeholder="username"
            type="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            id="email"
            placeholder="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            id="password"
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            id="cnfmpassword"
            placeholder="confirm password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with all the policies
          </Agreement>
          <Button type="submit">Create</Button>
        </Form>
        <Agreement>OR</Agreement>

        <GButton>
          <AiOutlineGoogle />
        </GButton>
      </Wrapper>
    </Container>
  );
};

export default Register;
