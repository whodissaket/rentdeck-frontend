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
  const [prods, setProds] = useState(null);
  useEffect(() => {
    if (props.match.params.id) {
      axios.get("http://localhost:5000/api/products").then((response) => {
        setProds(response.data);
      });
    } else {
      axios
        .get(`http://localhost:5000/api/products/${props.match.params.id}`)
        .then((response) => {
          setProds(response.data);
        });
    }
  }, []);

  return (
    <Container>
      {prods && prods.map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
