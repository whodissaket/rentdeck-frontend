//Todo:Dynamic Description

import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement/Announcement";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { mobile } from "../responsive";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router";
import { useHistory } from "react-router";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 300;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.div`
  font-size: 20px;
  font-weight: 200;
`;

const FilterSelect = styled.select`
  margin-left: 10px;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 20px;
  cursor: pointer;
`;

const FilterOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 1.5px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #f8f4f8;
  }
`;

const Product = () => {
  const [prod, setP] = useState(null);
  const [qty, setQty] = useState(1);
  const history = useHistory();
  const location = useLocation();
  const id = location?.search.split("=")[1];
  const addHandler = () => {
    setQty((state) => state + 1);
  };
  const remHandler = () => {
    setQty((state) => (state - 1 >= 1 ? state - 1 : state));
  };
  console.log(id);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/products/id/${id}`)
      .then((response) => {
        console.log(response.data);
        setP(response.data);
      })
      .catch((error) => console.log(error.message));
  }, [id]);

  console.log(prod);
  const addToCart = () => {
    history.push(`/cart/${id}?qty=${qty}`);
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>{prod && <Image src={prod.images[0]} />}</ImgContainer>
        <InfoContainer>
          {prod && <Title>{prod.title}</Title>}

          <Desc>{prod?.desObj}</Desc>
          {prod && <Price>Deposit: Rs.{prod.rentalrate * 3}</Price>}
          <br />
          {prod && <Price>Monthly Rent:Rs.{prod.rentalrate}/month</Price>}
          <br />
          <AddContainer>
            <AmountContainer>
              <Button onClick={remHandler}>
                <Remove />
              </Button>
              <Amount>{qty}</Amount>
              <Button onClick={addHandler}>
                <Add />
              </Button>
            </AmountContainer>

            <Button onClick={addToCart}>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Product;
