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
                {/* <Typography>{order?.shippingAddress?.country}</Typography>
              <Typography>{order?.shippingAddress?.city}</Typography>
              <Typography>{order?.shippingAddress?.address1}</Typography>
              <Typography>{order?.shippingAddress?.address2}</Typography>
              <Typography>{order?.shippingAddress?.zipCode}</Typography> */}
              </Paper>
            </Grid>
          </Grid>

          <Typography variant="h4" className={classes.heading}>
            Products
          </Typography>

          <Grid container spacing={5}>
            {/* {order?.items?.map((item) => {
            let isAddReview = false;
            const reviewExist = item.product.reviews?.find(
              (review) => review.order == order._id
            );

            if (order.status === "DELIVERED" && !reviewExist && !admin) {
              isAddReview = true;
            } */}
            return (
            <Grid key="" item xs={12} sm={6} lg={4}>
              <Card className={classes.product}>
                <CardActionArea
                // onClick={() => history.push(`/product/${item.product._id}`)}
                >
                  <CardMedia
                    style={{ height: "250px", backgroundSize: "contain" }}
                    className={classes.media}
                    //   image={item.product.image}
                    //   title={item.product.name}
                  />
                </CardActionArea>

                <CardContent>
                  <Typography
                    className={classes.productName}
                    variant="h5"
                    //   component={Link}
                    //   to={`/product/${item.product._id}`}
                  >
                    Product Name
                  </Typography>
                  <Typography>
                    <span>Quantity</span>Qty
                  </Typography>
                  <Typography>
                    <span>Price</span> Rs.Price
                  </Typography>
                  <Typography>
                    <span>Total Price</span> Rs.Total
                  </Typography>

                  {/* {!admin && reviewExist ? (
                  <Button variant="contained" disabled>
                    Already reviewed!
                  </Button>
                ) : null} */}
                </CardContent>

                {/* {isAddReview && (
                <CardActions>
                  <Button
                    style={{ color: "white" }}
                    variant="contained"
                    color="primary"
                    // onClick={() =>
                    //   history.push(
                    //     `/order/${id}/review/${item.product._id}`
                    //   )
                    // }
                  >
                    Add Review
                  </Button>
                </CardActions>
              )} */}
              </Card>
            </Grid>
            );
          </Grid>

          {/* {!admin && order?.status === "DELIVERED" ? (
          <Box marginTop={4}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              disabled={deleteLoading}
              //   onClick={() => dispatch(deleteOrder(id))}
              endIcon={deleteLoading ? <CircularProgress size={20} /> : null}
            >
              Delete order
            </Button>
          </Box>
        ) : null} */}
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
