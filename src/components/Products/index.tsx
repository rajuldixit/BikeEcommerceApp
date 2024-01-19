import { Grid, Stack } from "@mui/material";
import React from "react";
import { products } from "../../utils/constants";
import { IProduct } from "../../utils/types";
import ProductCard from "../Cards";

const Products = () => {
  return (
    <Stack sx={{ height: "80vh", overflowY: "scroll" }} p={2}>
      <Grid container spacing={2}>
        {products.map((product: IProduct) => (
          <Grid item xs={12} sm={4} md={3} key={product.id}>
            <ProductCard product={product}></ProductCard>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Products;
