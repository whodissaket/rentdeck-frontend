// Badge Dynamically update krna hai

import { Badge } from "@material-ui/core";
import {
  PersonOutlineOutlined,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Logo,
  MenuItem,
  Right,
  SearchContainer,
  Wrapper,
} from "./NavbarEle";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              RentDeck
            </Link>
          </Logo>
        </Left>
        <Center>
          {/* <Language>EN</Language> */}
          {/* <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer> */}
        </Center>
        <Right>
          <MenuItem>
            {/* <Link
              to="/register"
              style={{ color: "black", textDecoration: "none" }}
            >
              Register
            </Link> */}
          </MenuItem>
          <MenuItem>
            <Link
              to="/login"
              style={{ color: "black", textDecoration: "none" }}
            >
              Sign In
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/orderdetails"
              style={{ color: "black", textDecoration: "none" }}
            >
              <PersonOutlineOutlined />
            </Link>
          </MenuItem>
          <MenuItem>
            {/* Badge Dynamically Update krna hai  */}
            <Badge color="primary">
              <Link
                to="/cart"
                style={{ color: "black", textDecoration: "none" }}
              >
                <ShoppingCartOutlined />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
