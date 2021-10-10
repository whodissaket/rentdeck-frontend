//Product mapping according to the user krneka hai
import CartCard from "./CartCard";
import styled from "styled-components";
import Announcement from "../components/Announcement/Announcement";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { mobile } from "../responsive";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
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


const Cart = ({user}) => {
  const [orders, setOrd] = useState({});
  const dispatch = useDispatch();

  const [pro, setPro] = useState([]);
  const [load, setLoad] = useState(false)
  //Add to Cart Handler
  // useEffect(() => {
  //   if (productId) {
  //     dispatch(addToCart(productId, qty));
  //   }
  // }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    // dispatch(removeFromCart(id));
  };

  // const checkoutHandler = () => {
  //   // history.push("/orderdetais");
  // };

  useEffect(() => {
    console.log(user)
    axios.get(`http://localhost:5000/api/orders/mycart`, {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user?.token}`}
  }).then((response) => {
    setOrd(response.data)
    console.log("count this")
      }).catch((error)=>{console.log(error)})}, [user]);
    
    useEffect(
      ()=>{
      orders?.orderItems?.map((order)=>{
        console.log("count this 2")
      axios.get(`http://localhost:5000/api/products/id/${order.product}`)
      .then((response) => {
        const prod={...response.data , qty : order.qty}
        console.log(prod)
        setPro((prev)=> [...prev,prod]) 
        
      }
        )
.catch((error) => console.log(error.message))
})
console.log(pro)
return ()=>{setLoad(true)}
},[orders] 
)

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
            <TopText>Shopping Bag({orders?.orderItems?.length})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          
        </Top>
        <Bottom>
        {}
          
          <Info>
          { load && pro.map((P) =><CartCard p={P}/>)  }
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
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
