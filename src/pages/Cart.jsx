import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement/Announcement";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { mobile } from "../responsive";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation  , useHistory ,useParams } from "react-router";
import { useDispatch , useSelector } from "react-redux";
import { addToCart, removeFromCart } from '../actions/cartActions'
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

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
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
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Button2 = styled.button`
  width: 100%;
  padding: 10px;
  background-color: white;

  font-weight: 600;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Cart = () => {
  const dispatch = useDispatch()
  const param=useParams()
  const location = useLocation()
  const history = useHistory()
  const productId = param.id
  const qty = location.search ? Number(location?.search.split('=')[1]) : 1
  console.log(productId ,qty)
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }
  const handleIncrement = (item)=> {
    console.log(item)
    dispatch(addToCart(item.product, item.qty+1));
  };
  const handleDecrement= (item)=>{ 
    if(item.qty>1) {
    dispatch(addToCart(item.product, (item.qty-1>0?item.qty-1:0)) ) 
  }
  else {
      removeFromCartHandler(item.product)
    } }
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link
            to="/products"
            style={{ color: "black", textDecoration: "none" }}
          >
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag({cartItems?.length})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          
        </Top>
        <Bottom>
        {}
          
          <Info>
          { console.log(cartItems) && cartItems.length===0 ? <h1>Cart Empty</h1> :cartItems.map((item) => { return (
    <>
    <Product>
  <ProductDetail>
    <Image src={item.image} />
    <Details>
      <ProductName>
        <b>Product:{item.name}</b>
        {/* ********  Changes here******** */}
        {/* {pro.name} */}
      </ProductName>
      <ProductId>
        <b>ID:{item._id}</b>
        {/* {pro._id} */}
      </ProductId>

      <ProductSize>
        <b>Tag:</b> {}
      </ProductSize>
    </Details>
  </ProductDetail>
  <PriceDetail>
    <ProductAmountContainer>
      <Button2 onClick={()=>handleIncrement(item)}>
        <Add />
      </Button2>
      <ProductAmount value={item.qty}>{item.qty}</ProductAmount>
      <Button2
      onClick={()=>handleDecrement(item)}>
        <Remove />
      </Button2>
    </ProductAmountContainer>
    <ProductPrice>
      Rs.
      {item.price}
      /month
    </ProductPrice>
  </PriceDetail>
</Product><Hr />)
</>) } )}
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>{}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{}</SummaryItemPrice>
            </SummaryItem>
            <Link
              to="/orderdetails"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Button>CHECKOUT NOW</Button>
            </Link>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
