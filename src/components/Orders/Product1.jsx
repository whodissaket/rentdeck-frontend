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
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useStyles } from "../../pages/styles/style2";
const Product1 = ({ item }) => {
  const classes = useStyles();
  const history=useHistory()
  const [product, setProd] = useState(null);
  useEffect(() => {
    console.log(item)
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/products/id/${item.product}`)
      .then((response) => {
        setProd(response.data);
      })
      .catch((error) => console.log(error.message));
  }, [item]);

  return (
    <>
      <Grid key={item?._id} item xs={12} sm={6} lg={4}>
        <Card className={classes.product}>
          <CardActionArea
          onClick={() => history.push(`/product?id=${item.product}`)}
          >
            <CardMedia
              style={{ height: "250px", backgroundSize: "contain" }}
              className={classes.media}
              image={product?.images?.[0]}
              title={product?.title}
            />
          </CardActionArea>

          <CardContent>
            <Typography
              className={classes.productName}
              variant="h5"
              component={Link}
              to={`/product/${product?._id}`}
            >
            </Typography>
            <Typography>
              <span>Quantity :</span> {item?.qty}
            </Typography>
            <Typography>
              <span>Price :</span> Rs.{product?.rentalrate}
            </Typography>
            <Typography>
              <span>Total Price :</span> Rs.{product?.rentalrate * item?.qty}
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
    </>
  );
};

export default Product1;
