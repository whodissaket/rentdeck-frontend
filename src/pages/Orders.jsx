import { useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  Grid,
  Chip,
  Button,
} from "@material-ui/core";
import {} from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useStyles } from "./styles/style";
import { Link } from "react-router-dom";
import axios from "axios"
import { useState } from "react";

const Orders = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  console.log("here" + userInfo)
  const [ orders , setOrd] = useState([{}])

  const [pro, setPro] = useState({})
  const [tit , setTit] =  useState([])
  const classes = useStyles();
  useEffect(() => {
   
    axios.get(`http://localhost:5000/api/orders/myorders `, {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userInfo.token}`}
  }).then((response) => {
    setOrd(response.data)
    console.log(response.data)
      }).catch((error)=>{console.log(error)})
  
    }, [userInfo]);
    useEffect(()=>{console.log(orders)},[orders])


      const prodtit = (prod)=>{

      axios.get(`http://localhost:5000/api/products/id/${prod.product}`)
      .then((response) => {
        setTit((prev)=>[...prev ,response.data.title ]) })
.catch((error) => console.log(error.message))
const li = tit.map((item)=>{<li> {item}</li>})
console.log(tit)
console.log(li)
return (
{li}
);
}

  
  return (
    <Container maxWidth="lg">
      <>

      {orders.length ? <Typography className={classes.heading} variant="h3">
          Orders
        </Typography> : <Typography>No orders.</Typography>}

        <Grid container spacing={4}>
          {orders.map((order) => {
             //const items = order?.orderItems?.map((o)=>{getprods()})
          return (
          <Grid key="1" item md={4} sm={6} xs={12}>
            <Card className={classes.card}>
              <Typography>
                <span>{console.log(order)}</span> <Chip label="processing" size="small" />
              </Typography>
              <Typography>
                <span>Products</span> {order?.orderItems?.length}
              </Typography>
              <Typography>
                <span>Items  <ul>{}</ul></span> 
              </Typography>
              <Typography>
                <span>Date : {order?.createdAt}</span>
                {/* {moment(order.date).fromNow()} */}
              </Typography>
              <Typography>
                <span>Price</span> Rs.900/month
              </Typography>
              <Typography>
                <span>Status</span>{" "}
                <Chip
                  style={{ color: "white" }}
                  label={order?.paymentResult?.status}
                  size="small"
                  color="primary"
                />
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                //    onClick={() =>
                //         admin
                //           ? history.push(`/admin/order/${order._id}`)
                //           : history.push(`/order/${order._id}`)
                //       }
              >
                <Link to="/orderdetails" style={{ textDecoration: "none" }}>
                  Details
                </Link>
              </Button>
            </Card>
          </Grid>
          );} )}
        </Grid>
      </>
    </Container>
  );}
export default Orders;
