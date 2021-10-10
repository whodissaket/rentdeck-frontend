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
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`product/${item._id}`} replace={true} >
          <ZoomOutMapOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
