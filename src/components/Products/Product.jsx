import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  ZoomOutMapOutlined,
} from "@material-ui/icons";
import React from "react";
import { useEffect } from "react";
import { Container, Circle, Image, Icon, Info } from "./ProductEle";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  useEffect(() => {}, [item]);
  return (
    <Container>
      <Circle />
      <Image src={item.images[0]} alt={item.title} />
      <Info>
        <Icon>
          <Link to={`/cart/${item._id}?qty=1`}>
            <ShoppingCartOutlined />
          </Link>
        </Icon>
        <Icon>
          <Link to={`product?id=${item._id}`}>
            <ZoomOutMapOutlined />
          </Link>
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
