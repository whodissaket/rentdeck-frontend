import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { useEffect } from "react";
import { Container, Circle, Image, Icon, Info } from "./ProductEle";

const Product = ({ item }) => {
  useEffect(()=>{},[item])
  return (
    <Container>
      <Circle />
      <Image src={item.images[0]} alt={item.title} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
