// Badge Dynamically update krna hai

import { Badge } from "@material-ui/core";
import {
  PersonOutlineOutlined,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Logo,
  SearchBtn,
  LogoutBtn,
  MenuItem,
  Right,
  SearchContainer,
  Wrapper,
} from "./NavbarEle";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { logout } from "../../actions/userActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const items = cartItems.length;
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    history.push(`/products?s=${search}`);
  };
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
          <SearchContainer>
            <Input
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <SearchBtn onClick={handleSearch}>
              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchBtn>
          </SearchContainer>
        </Center>
        {userInfo ? (
          <Right>
            <MenuItem>Hi, {userInfo.username}</MenuItem>
            <LogoutBtn onClick={logoutHandler}>Log out</LogoutBtn>
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
              <Badge color="primary" badgeContent={items}>
                <Link
                  to="/cart"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <ShoppingCartOutlined />
                </Link>
              </Badge>
            </MenuItem>
          </Right>
        ) : (
          <Right>
            <MenuItem>
              <Link
                to="/register"
                style={{ color: "black", textDecoration: "none" }}
              >
                Register
              </Link>
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
                to="/profile"
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
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
