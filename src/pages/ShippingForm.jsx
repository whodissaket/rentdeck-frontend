import styled from "styled-components";

import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import Announcement from "../components/Announcement/Announcement";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useStyles } from "./styles/style2";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Heading = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  border-radius: 10px;
  background-color: #fafafa;
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
const Button2 = styled.button`
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

const Error = styled.span`
  color: red;
`;

const ShippingForm = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const classes = useStyles();
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
  };

  return (
    <div>
      <Navbar />
      <Announcement />
      <Container>
        <Wrapper>
          <Heading>Shipping Address</Heading>
          <Agreement />
          <Title>Enter Shipping Address</Title>
          <Form onSubmit={submitHandler}>
            <Input
              id="address"
              placeholder="Enter Address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <Input
              id="city"
              placeholder="Enter City"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Input
              id="postalCode"
              placeholder="Enter Pincode"
              type="number"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
            <Input
              id="country"
              placeholder="Enter Country"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </Form>
          <Agreement></Agreement>
          <Link to="/orderdetails">
            <Button>Continue</Button>
          </Link>
          <Agreement></Agreement>
          <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
            <Button2>Go Back</Button2>
          </Link>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default ShippingForm;
