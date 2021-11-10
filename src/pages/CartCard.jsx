import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
const Input = styled.input`
  flex: 1;
  min-width: 10%;

  padding: 10px;
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

const inStock = styled.span`
  color: red !important ;
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

const CartCard = ({ item, key }) => {
  useEffect(() => {
    if (item.qty < item.countInStock) {
      
      setStock(true);
    } else if (item.qty == item.countInStock) {
      setStock(false);
    } else {
      setStock(false);
    }
  }, [item]);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const [stock, setStock] = useState(true);
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (item) => {
    if (item.qty + 1 < item.countInStock) {
      dispatch(addToCart(item.product, item.qty + 1));
    } else if (item.qty + 1 == item.countInStock) {
      dispatch(addToCart(item.product, item.qty + 1));
      setStock(false);
    } else {
      setStock(false);
    }
  };

  const handleDecrement = (item) => {
    if (1 < item.qty && item.qty <= item.countInStock) {
      dispatch(addToCart(item.product, item.qty - 1 > 0 ? item.qty - 1 : 0));
      setStock(true);
    } else if (item.qty == 1) {
      removeFromCartHandler(item.product);
    } else {
    }
  };
  return (
    <div>
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
                <b>ID:{item.product}</b>
                {/* {pro._id} */}
              </ProductId>
              <ProductName>
                <b>
                  Rental Rate : Rs.
                  {item.price}
                  /month
                </b>
              </ProductName>
              <ProductId>
                <b>Deposit : Rs. {item.price * 3}</b>
              </ProductId>
              <inStock>{stock ? "in stock" : "out of stock"}</inStock>
            </Details>
          </ProductDetail>
          <PriceDetail>
            <ProductAmountContainer>
              <Button2 onClick={() => handleIncrement(item)}>
                <Add />
              </Button2>
              <ProductAmount value={item.qty}>{item.qty}</ProductAmount>
              <Button2 onClick={() => handleDecrement(item)}>
                <Remove />
              </Button2>
            </ProductAmountContainer>
            <ProductPrice>
              <br />
            </ProductPrice>
          </PriceDetail>
        </Product>

        <Hr />
      </>  
    </div>
  );
};

export default CartCard;
