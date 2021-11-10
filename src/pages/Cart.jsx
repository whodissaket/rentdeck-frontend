
import styled from "styled-components";
import Announcement from "../components/Announcement/Announcement";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { mobile } from "../responsive";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation, useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { Col } from "react-bootstrap";
import CartCard from "./CartCard";
const Input = styled.input`
  margin: 20px 10px 0px 0px;
`;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const ProductSize = styled.h3`
  display: flex;
  flex: 2;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Box = styled.div`
  margin: 0 auto;
  display: flex;
  flex: 1;
  flex-direction: inherit;
  padding: 20px;
  width: 30%;
  border: 1px solid #000;
`;

const Cart = (item) => {
  const dispatch = useDispatch();
  const param = useParams();
  const location = useLocation();
  const history = useHistory();
  const productId = param.id;
  const qty = location.search ? Number(location?.search.split("=")[1]) : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const [duration, setDuration] = useState(1);
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  cart.duration = duration;
  cart.deposit = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * 3, 0)
  );
  cart.itemsPrice =
    addDecimals(
      cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    ) * cart.duration;
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 2 : 100);
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)+
    Number(cart.deposit)
  ).toFixed(2);
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG({cartItems?.length})</Title>
        <Top>
          <Link
            to="/products"
            style={{ color: "black", textDecoration: "none" }}
          >
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
        </Top>
        <Box>
          <ProductSize>
            <b>Rental Duration:</b>
          </ProductSize>

          <Col>
            <Input
              type="radio"
              label="1 month"
              id="month1"
              name="month"
              value="1"
              onChange={(e) => setDuration(e.target.value)}
            />{" "}
            1 month {}
            <br />
            <Input
              type="radio"
              label="2 month"
              id="month2"
              name="month"
              value="2"
              onChange={(e) => setDuration(e.target.value)}
            />
            2 months {}
            <br />
            <Input
              type="radio"
              label="3 month"
              id="month3"
              name="month"
              value="3"
              onChange={(e) => setDuration(e.target.value)}
            />
            3 months
          </Col>
        </Box>
        <br />
        <Bottom>
          {}

          <Info>
            {cartItems.length === 0 ? (
              <h1>CART EMPTY</h1>
            ) : (
              cartItems.map((item) => {
                return <CartCard item={item} key={item.product} />;
              })
            )}
          </Info>

          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </SummaryItemText>
              <SummaryItemPrice>
                {" "}
                Rs
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>{cart.shippingPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Tax </SummaryItemText>
              <SummaryItemPrice>{cart.taxPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Deposit</SummaryItemText>
              {/* *********************INSERT CODE HERE *********************** */}
              <SummaryItemPrice>{cart.deposit}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Duration</SummaryItemText>

              <SummaryItemPrice>{cart.duration}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <Button
              onClick={checkoutHandler}
              disabled={cart.cartItems.length === 0}
            >
              CHECKOUT NOW
            </Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <br />
      <br />
      <br />

      <Footer />
    </Container>
  );
};

export default Cart;
