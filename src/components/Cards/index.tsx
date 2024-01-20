import React from "react";
import { IBikeTypes, IProduct } from "../../utils/types";
import {
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
  Rating,
  Stack
} from "@mui/material";
import Buttons, { IButtonTypes } from "../Buttons";
import useCartHandler from "../../hooks/useCartHandler";

interface IProductCard {
  product: IProduct;
}
const ProductCard: React.FC<IProductCard> = (props: IProductCard) => {
  const { bikeType, description, id, imageUrl, name, price, ratings } =
    props.product;

  const { addRemoveFromCart } = useCartHandler();
  const imgPath = (url: string) => {
    return require(`../../assets/images/${url}`);
  };
  const addToCart = (product: IProduct) => {
    addRemoveFromCart(product);
  };

  return (
    <Card sx={{ maxWidth: 260 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imgPath(imageUrl)}
        title="green iguana"
      />
      <CardContent>
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          <Typography gutterBottom variant="body1" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            ${price}
          </Typography>
        </Stack>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Rating name="read-only" value={ratings} readOnly />
        <Buttons
          type={IButtonTypes.PRIMARY}
          label={"Add"}
          onClick={() => addToCart(props.product)}
        ></Buttons>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
