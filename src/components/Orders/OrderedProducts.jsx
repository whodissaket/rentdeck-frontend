///***********Db work needed here********

import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "../../pages/styles/style2";

const OrderedProducts = () => {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="lg">
        <>
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
      </Container>
    </div>
  );
};

export default OrderedProducts;
