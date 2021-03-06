import { useState, useEffect } from "react";
import axios from "axios";
import { popproducts } from "../../data";
import Product from "./Product";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({category , search,number}) => {
  const [prods, setProds] = useState([]);
console.log(category,search,number)
  useEffect(() => {
    if(category){
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/products/categories`, {
      headers: {
          'Content-Type': 'application/json',
      },
      categories : category
  }).then((response) => {
        setProds(response.data);
      }).catch((error)=>{console.log(error)})}
      else if(search){axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/s?q=${search}`).then((response) => {
            setProds(response.data);
          }).catch((error)=>{console.log(error)
            setProds(null);})}
      else if(number){axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/some?n=${number}`).then((response) => {

            setProds(response.data);
          }).catch((error)=>{console.log(error)})}
      else{
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/products`).then((response) => {
              setProds(response.data);
            }).catch((error)=>{console.log(error)})
      }
  }
  , [search,category,number]);


  return (
    <Container>
      {prods? prods.map((item) => <Product item={item} key={item._id} />) : <h1>NO PRODUCT FOUND</h1>}
    </Container>
  );
};

export default Products;
