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

interface IProductCard {
  product: IProduct;
}
const ProductCard: React.FC<IProductCard> = (props: IProductCard) => {
  const { bikeType, description, id, imageUrl, name, price, ratings } =
    props.product;

  const imgPath = (url: string) => {
    return require(`../../assets/images/${url}`);
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
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        ></Buttons>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
