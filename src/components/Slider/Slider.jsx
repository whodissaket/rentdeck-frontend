import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import {
  Container,
  Arrow,
  Wrappper,
  ImgContainer,
  InfoContainer,
  Image,
  Slide,
  Title,
  Desc,
  Button,
} from "./SliderElements";
import { sliderItems } from "../../data";
import { Link } from "react-router-dom";

const Slider = (item) => {
  const history = useHistory();
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  const handleClick2 = () => {
    history.push("/products");
}
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrappper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>

              <Button onClick={handleClick2}> 
                  Shop Now
              </Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrappper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
