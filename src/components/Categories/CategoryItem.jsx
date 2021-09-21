import React from "react";
import { ItemContainer, Image, Info, Title, Button } from "./CategoriesEle";

const CategoryItem = ({ item }) => {
  return (
    <ItemContainer>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Remt it</Button>
      </Info>
    </ItemContainer>
  );
};

export default CategoryItem;
