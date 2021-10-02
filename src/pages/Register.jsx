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
  width: 40%;
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

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with all the policies
          </Agreement>
          <Button>CREATE</Button>
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
