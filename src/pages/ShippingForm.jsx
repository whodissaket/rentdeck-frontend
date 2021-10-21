import styled from "styled-components";

import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress, savePaymentMethod } from "../actions/cartActions";
import Announcement from "../components/Announcement/Announcement";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useStyles } from "./styles/style2";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { createOrder } from "../actions/orderActions";
import { Col, Form } from "react-bootstrap";

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

  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form2 = styled.form`
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
  const history = useHistory();
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const [paymentMethod, setPaymentMethod] = useState("RazorPay");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("here")
    dispatch(
      saveShippingAddress({ address, city, postalCode, country }),
    );
    dispatch(savePaymentMethod(paymentMethod));
    console.log("here2")
    history.push('/placeorder')
  };
  const goBackHandler = () => {
    history.push("/cart");
  };
  
  return (
    <div>
      <Navbar />
      <Announcement />
      <Container>
        <Wrapper>
          <Heading>Shipping Address & Payment Method</Heading>
          <Agreement />
          <Title>Enter Shipping Address</Title>
          <Form2 onSubmit={submitHandler}>
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
          <br />
          <Title>Select Payment Method</Title>

            <Col>
              <Form.Check
                type="radio"
                label="RazorPay"
                id="razorpay"
                name="paymentMethod"
                value="RazorPay"
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <Form.Check
                type="radio"
                label="Credit or Debit Card"
                id="card"
                name="paymentMethod"
                value="card"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </Col>
            <br />
        
            <Button type="submit">Continue</Button>
            <br />
          <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
            <Button2 onClick={goBackHandler}>Go Back</Button2>
          </Link>
            </Form2>
            <Agreement />
          <br />
          <br />
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default ShippingForm;
