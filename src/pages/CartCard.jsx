import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
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

const CartCard = (props)=>{
    console.log(props)
    const [c , setC]=useState(props.p.qty)
    const [orders, setOrd] = useState([{}]);
    const handleIncrement = ()=> {
        setC(state => (state+1));
      };
      const handleDecrement = ()=> {
        setC(state => ((state-1)>=0?((state-1)):state));
      };
return (
    <>
    <Product>
  <ProductDetail>
    <Image src={props.p.images[0]} />
    <Details>
      <ProductName>
        <b>Product:{props.p.title}</b>
        {/* ********  Changes here******** */}
        {/* {pro.name} */}
      </ProductName>
      <ProductId>
        <b>ID:{props.p._id}</b>
        {/* {pro._id} */}
      </ProductId>

      <ProductSize>
        <b>Tag:</b> {}
      </ProductSize>
    </Details>
  </ProductDetail>
  <PriceDetail>
    <ProductAmountContainer>
      <Button2 onClick={handleIncrement}>
        <Add />
      </Button2>
      <ProductAmount value={c}>{c}</ProductAmount>
      <Button2
      onClick={handleDecrement}>
        <Remove />
      </Button2>
    </ProductAmountContainer>
    <ProductPrice>
      Rs.
      {props.p.rentalrate}
      /month
    </ProductPrice>
  </PriceDetail>
</Product><Hr />)
</>)
}

export default CartCard