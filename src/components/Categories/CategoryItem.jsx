import React from "react";
import { Link } from "react-router-dom";
import { ItemContainer, Image, Info, Title, Button } from "./CategoriesEle";

const CategoryItem = ({ item }) => {
  return (
    <ItemContainer>
      {console.log(item.category)}
      <Link to={`/products/${item.category}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Shop</Button>
        </Info>
      </Link>
    </ItemContainer>
  );
};

export default CategoryItem;
