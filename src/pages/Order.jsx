// Line 122 se dusre component mei h
//Db needed here

import { useEffect } from "react";
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
import {} from "@material-ui/icons";
import { useStyles } from "./styles/style2";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Announcement from "../components/Announcement/Announcement";
import OrderedProducts from "../components/Orders/OrderedProducts";


const showStatus = (status) => {
  switch (status) {
    case "ORDERED":
      return "PACKED";
    case "PACKED":
      return "SHIPPED";
    case "SHIPPED":
      return "DELIVERED";
    default:
      return "ORDER COMPLETED";
  }
};

const Order = ({ admin }) => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Announcement />
      <Container maxWidth="lg">
        <>
          <Typography className={classes.heading} variant="h3">
            Order Details
          </Typography>

          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <Paper className={classes.paper}>
                <Typography>
                  <span>Order ID</span>{" "}
                  <Chip
                    //  label={order?._id}
                    size="small"
                  />
                </Typography>
                <Typography>
                  <span>Products</span> 2{/* {order?.items.length} */}
                </Typography>
                <Typography>
                  <span>Items</span> items
                </Typography>
                <Typography>
                  <span>Date</span>
                  {/* {moment(order?.date).fromNow()} */}
                </Typography>
                <Typography>
                  <span>Price</span> Rs.900/month
                </Typography>
                <Typography>
                  <span>Status</span>{" "}
                  <Chip
                    //   label={order?.status}
                    size="small"
                    style={{ color: "white", fontWeight: "bold" }}
                    color="primary"
                  />
                </Typography>
                {admin ? (
                  <>
                    {/* {order?.status === "DELIVERED" ? null : (
                    <Typography>
                      <span>Change Status:</span>
                    </Typography>
                  )} */}
                    <Button
                      // disabled={order?.status === "DELIVERED" || buttonLoading}
                      variant="outlined"
                      color="primary"
                      // onClick={() =>
                      //   dispatch(
                      //     editAdminOrder({
                      //       id,
                      //       status: showStatus(order?.status),
                      //     })
                      //   )
                      // }
                      // endIcon={
                      //   buttonLoading ? <CircularProgress size={20} /> : null
                      // }
                    >
                      {/* {showStatus(order?.status)} */}
                    </Button>
                  </>
                ) : null}
              </Paper>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h6">Shipping Address</Typography>
                {/* //******************db here ************************ */}

                {/* <Typography>{order?.shippingAddress?.country}</Typography>
              <Typography>{order?.shippingAddress?.city}</Typography>
              <Typography>{order?.shippingAddress?.address1}</Typography>
              <Typography>{order?.shippingAddress?.address2}</Typography>
              <Typography>{order?.shippingAddress?.zipCode}</Typography> */}
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
