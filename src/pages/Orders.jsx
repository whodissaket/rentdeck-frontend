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
import { useStyles } from "./styles/style";
import { Link } from "react-router-dom";

const Orders = ({ admin }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <>
        <Typography className={classes.heading} variant="h3">
          Orders
        </Typography>

        {/* {orders.length ? null : <Typography>No orders.</Typography>} */}

        <Grid container spacing={4}>
          {/* {orders.map((order) => {
              const items = order?.items?.reduce(
                (total, item) => item.quantity + total,
                0
              ); */}
          return (
          <Grid key="1" item md={4} sm={6} xs={12}>
            <Card className={classes.card}>
              <Typography>
                <span>ID</span> <Chip label="processing" size="small" />
              </Typography>
              <Typography>
                <span>Products</span> 2
              </Typography>
              <Typography>
                <span>Items</span> item
              </Typography>
              <Typography>
                <span>Date</span>
                {/* {moment(order.date).fromNow()} */}
              </Typography>
              <Typography>
                <span>Price</span> Rs.900/month
              </Typography>
              <Typography>
                <span>Status</span>{" "}
                <Chip
                  style={{ color: "white" }}
                  label="processing"
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
          );
        </Grid>
      </>
    </Container>
  );
};
export default Orders;
