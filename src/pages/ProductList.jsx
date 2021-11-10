import React, { useState ,useEffect } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement/Announcement";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";
import { mobile } from "../responsive";
import { useHistory, useLocation, useParams } from "react-router";
import { useFormControl } from "@material-ui/core";
const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 400;
  margin-right: 20px;
  ${mobile({ marginRight: "0" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const [categories , setCategories]=useState(null)
  const search =
    location?.search.split("=")[0] == "?s"
      ? location?.search.split("=")[1]
      : null;
  var category =
    location?.search.split("=")[0] == "?categories"
      ? location?.search.split("=")[1]
      : null;
const history=useHistory()

const categoryHandler = (e) => {
  history.push(`/products?categories=${e.target.value}`)
  setCategories(e.target.value)
  };
  useEffect(()=>{
    setCategories(location?.search.split("=")[0] == "?categories"
      ? location?.search.split("=")[1]
      : null);},[location,search])
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Categorize by:</FilterText>
          <Select onChange={(e)=>{categoryHandler(e)}}>
            <Option disabled selected>
              All
            </Option>
            <Option>Furniture</Option>
            <Option>Kitchen</Option>
            <Option>Electronics</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={categories} search={search} />
      <Footer />
    </Container>
  );
};

export default ProductList;
