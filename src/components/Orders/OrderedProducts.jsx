///***********Db work needed here********
import { useSelector } from "react-redux";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";
import React from "react";
import Product1 from "./Product1"
import { useStyles } from "../../pages/styles/style2";

const OrderedProducts = () => {
  const classes = useStyles();
  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails
  return (
    <div>
      <Container maxWidth="lg">
        <>
          <Typography variant="h4" className={classes.heading}>
            Products
          </Typography>
          <Grid container spacing={5}>
            { order?.orderItems?.map((item) =><Product1 item={item} />
            )}
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
