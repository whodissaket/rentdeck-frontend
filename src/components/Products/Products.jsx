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

const Products = (props) => {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    console.log("here")
    axios.post(`http://localhost:5000/api/products/categories`, {
      headers: {
          'Content-Type': 'application/json',
      },
      categories : props.category
  }).then((response) => {
    console.log("here")
        setProds(response.data);
      }).catch((error)=>{console.log(error)})
  }, []);



console.log(prods)

  return (
    <Container>
      {prods.map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
