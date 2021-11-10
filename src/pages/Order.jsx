// Line 122 se dusre component mei h
//Db needed here
//Person Name or Username fetch krna h idhar
//Order id fetch krna h
//Order status fetch krna h
//Shipping address fetch krna h agar h toh
import {
  getOrderDetails,
  payOrder,
  deliverOrder,
  returnOrder,
} from "../actions/orderActions";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  CardActions,
  CircularProgress,
  Box,
} from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
  ORDER_RETURN_RESET,
} from "../constants/orderConstants";
import { PersonOutlineOutlined } from "@material-ui/icons";
import { useStyles } from "./styles/style2";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Announcement from "../components/Announcement/Announcement";
import OrderedProducts from "../components/Orders/OrderedProducts";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory, useParams } from "react-router";

const Order = () => {
  const classes = useStyles();
  const param = useParams();
  const orderId = param.id;

  const [sdkReady, setSdkReady] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const orderReturn = useSelector((state) => state.orderReturn);
  const { loading: loadingReturn, success: successReturn } = orderReturn;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
    if (!order || order._id !== orderId) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch({ type: ORDER_RETURN_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
    }
  }, [dispatch, orderId, successPay, successDeliver, successReturn, order]);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  const paytime = () => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/api/orders/${orderId}/pay`,
        {},
        config
      )
      .then((response) => {
        checkoutRazorpay(response.data);
      })
      .catch((err) => console.error(err));
  };
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  const checkoutRazorpay = async (data) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    var options = {
      key: "rzp_test_T2oeimfMzgJTrL", // Enter the Key ID generated from the Dashboard
      amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: userInfo.username,
      description: "Test Transaction with Razorpay payment gateway",
      image: "https://avatars.githubusercontent.com/u/73386156",
      order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        const payRes = {
          id: `${orderId}`,
          status: true,
          update_time: `${Date(Date.now()).toString()}`,
          email_address: `${userInfo.email}`,
        };
        dispatch(payOrder(orderId, payRes));
        alert("Payment success!");
      },
      prefill: {
        name: userInfo.username,
        email: userInfo.email,
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };
    let rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.description);
    });
    rzp1.open();
  };
  const handleD = () => {
    window.location.reload(false);
    dispatch(deliverOrder(order));
  };
  const handleR = () => {
    window.location.reload(false);
    dispatch(returnOrder(order));
  };

  const showStatus = order?.isPaid
    ? order?.isDelivered
      ? order?.isReturned
        ? "RETURNED"
        : "RETURN PENDING"
      : "IN DELIVERY"
    : "UNPAID";
  const parseDate = (date) => {const ts = Date.parse(date);
    const dt = new Date(ts);
  return dt.toUTCString()}
  
  return (
    <div>
      <Navbar />
      <Announcement />
      <Container maxWidth="lg">
        <>
          {/* <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <PersonOutlineOutlined />
              {userInfo.username}
            </Grid>
          </Grid> */}
          <Typography className={classes.title} variant="h3">
            Order Details
          </Typography>

          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <Paper className={classes.paper}>
                <Typography>
                  <span>Username :</span>
                  <Chip label={userInfo.username} size="small" />
                </Typography>
                <Typography>
                  <span>Order ID : </span>
                  {order?._id}{" "}
                </Typography>
                <Typography>
                  <span>Products :</span> {order?.orderItems?.length}
                </Typography>
                <Typography>
                  <span>Date : </span>
                  {parseDate(order?.createdAt)}
                </Typography>
                <Typography>
                  <span>Price :</span> {order?.totalPrice}/month
                </Typography>
                <Typography>
                  <span>Status :</span>
                  <Chip
                    label={showStatus}
                    size="small"
                    style={{ color: "white", fontWeight: "bold" }}
                    color="primary"
                  />
                </Typography>
                { order?.isDelivered ? <Typography>
                  <span>Return Date :</span>
                  <Chip
                    label={parseDate(order.toBeReturnedAt)}
                    size="small"
                    style={{ color: "white", fontWeight: "bold" }}
                    color="primary"
                  />
                </Typography> : ""}
                {order ? (
                  <>
                    <br />
                     { !order.isPaid ? <Button onClick={paytime}>{"PAY"}</Button> : "" }
                       
                    { order.isPaid && !order.isDelivered ? <Button onClick={handleD} >{"SIMULATE DELIVERY"}</Button> : "" }
          
                     { order.isDelivered && !order.isReturned ? <Button onClick={handleR}>{"SIMULATE RETURN"}</Button> : "" }

            
                    { order.isReturned ? "RENTAL PRODUCTS HAVE BEEN RETURNED" : ""}
      
                  </>
                ) : null}
              </Paper>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h6">Shipping Address</Typography>
                <Typography variant="h7">
                  Schedule a visit for document verification
                </Typography>{" "}
                <Button
                  variant="contained"
                  color="success"
                  href="mailto:rentdeck101@gmail.com?subject=Document Verification Meet&body=I want to schedule the visit on **Details**"
                >
                  Schedule a visit
                </Button>
                {/* //******************db here ************************ */}
                <Typography>{order?.shippingAddress?.country}</Typography>
                <Typography>{order?.shippingAddress?.city}</Typography>
                <Typography>{order?.shippingAddress?.address}</Typography>
                <Typography>{order?.shippingAddress?.zipCode}</Typography>
              </Paper>
            </Grid>
          </Grid>
          {/* <------**********Changed from Here ***************-----> */}
          <OrderedProducts />
        </>

        {/* <Route
        path={`/order/${id}/review/:productId`}
        render={() => <AddReview order={id} />}
      /> */}
      </Container>
      <Footer />
    </div>
  );
};
export default Order;
