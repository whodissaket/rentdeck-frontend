import React from "react";
import Announcement from "../components/Announcement/Announcement";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";
import Products from "../components/Products/Products";
import Slider from "../components/Slider/Slider";

const Text = styled.h3`
  text-align: center;
`;

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Text>All Products</Text>
      <Products category={null} search={null} />
      <Footer />
    </div>
  );
};

export default Home;
