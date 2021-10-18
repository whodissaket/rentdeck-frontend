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
  LogoutBtn,
  MenuItem,
  Right,
  SearchContainer,
  Wrapper,
} from "./NavbarEle";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";

const Navbar = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
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
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
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
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
